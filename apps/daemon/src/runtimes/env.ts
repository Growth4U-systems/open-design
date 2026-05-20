import { expandConfiguredEnv } from './paths.js';

type RuntimeEnvMap = NodeJS.ProcessEnv | Record<string, string>;

// Build the env passed to spawn() for a given agent adapter.
//
// The claude adapter strips ANTHROPIC_API_KEY so Claude Code's own auth
// resolution (claude login / Pro/Max plan) wins instead of silently
// falling back to API-key billing whenever the daemon happened to be
// launched from a shell that exported the key for SDK or scripting use.
// See issue #398.
//
// However, when ANTHROPIC_BASE_URL is set the user is intentionally
// routing Claude Code to a custom endpoint (e.g. a Kimi/Moonshot proxy).
// In that case claude login is meaningless, so preserve the API key so
// the child can authenticate against the custom base URL.
//
// Windows env-var names are case-insensitive at the kernel level
// (`GetEnvironmentVariable`), but spreading `process.env` into a plain
// object loses Node's case-insensitive accessor — `Anthropic_Api_Key`
// would survive a literal `delete env.ANTHROPIC_API_KEY` and still reach
// the child. Iterate keys and compare case-insensitively to close that.
export function spawnEnvForAgent(
  agentId: string,
  baseEnv: RuntimeEnvMap,
  configuredEnv: unknown = {},
): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = {
    ...baseEnv,
    ...expandConfiguredEnv(configuredEnv),
  };
  if (agentId !== 'claude') return env;
  const hasCustomBaseUrl = Object.keys(env).some(
    (k) =>
      k.toUpperCase() === 'ANTHROPIC_BASE_URL' &&
      typeof env[k] === 'string' &&
      env[k].trim() !== '',
  );
  if (hasCustomBaseUrl) return env;
  // Growth4U fork — cloud-mode opt-in. Per-tenant deployments bake the
  // `claude` CLI into the image but cannot run an interactive
  // `claude login`, so the only viable auth path is ANTHROPIC_API_KEY.
  // When the operator sets OD_CLAUDE_PRESERVE_API_KEY=1 in the daemon
  // env we keep the key instead of stripping it. Upstream behavior is
  // preserved by default so this stays a no-op for desktop installs.
  const preserveApiKey = Object.keys(env).some(
    (k) =>
      k.toUpperCase() === 'OD_CLAUDE_PRESERVE_API_KEY' &&
      typeof env[k] === 'string' &&
      env[k].trim() !== '' &&
      env[k].trim() !== '0' &&
      env[k].trim().toLowerCase() !== 'false',
  );
  if (preserveApiKey) return env;
  for (const key of Object.keys(env)) {
    if (key.toUpperCase() === 'ANTHROPIC_API_KEY') delete env[key];
  }
  return env;
}
