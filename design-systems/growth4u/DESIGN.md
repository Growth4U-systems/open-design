# Growth4U Design System

> Category: B2B SaaS / AI Marketing
> Cuerpo de marca para Growth4U — agencia de marketing AI-first. Paleta navy + teal + purple, tipografía Manrope/Roboto, ilustración line art editorial integrada (nunca pegote).

---

## 1. Visual Theme & Atmosphere

Growth4U es una marca B2B que vive entre la confianza institucional (navy oscuro, layouts limpios, tipografía geométrica) y el toque tech-creativo (gradientes integrados, accents teal/purple, ilustración line art editorial). El sistema rechaza dos extremos opuestos: ni corporate aburrido (pura paleta navy + sans neutra) ni "startup juguete" (gradientes pastel + emojis decorativos).

El centro de gravedad visual es la **paleta navy/teal/purple** sobre fondos cream/light. El gradiente brand `linear-gradient(160deg, #032149 0%, #1a3690 35%, #0faec1 100%)` aparece en social posts y heroes; el resto del sistema vive en tokens sólidos. Cada color tiene un rol semántico declarado (navy = texto/líneas, teal = CTAs/datos positivos, purple = premium/badges) — los colores no se intercambian arbitrariamente.

La ilustración es **line art editorial limpio**: trazo fino constante, navy sobre blanco (light) o blanco sobre navy (dark), accents en teal/purple/sky. Un personaje por imagen (excepto team scenes). Datos y métricas siempre en teal o amber. La regla **anti-pegote** es no negociable: nunca componer personaje sobre gradiente con CSS overlay; o se genera la imagen entera como una sola pieza, o se usa un fondo sólido integrado.

**Key Characteristics:**
- Paleta deep navy + electric blue + teal + purple — confianza B2B + spark tech
- Manrope ExtraBold para titulares (geométrico, tracking ajustado), Roboto para cuerpo
- Gradiente brand `linear-gradient(160deg, navy → royal → teal)` como signature en social y heroes
- Ilustración line art editorial integrada — nunca pegote
- Logo: "Growth" en navy + "4U" con gradient teal→blue→purple
- Cada color tiene `use:` semántico — no se intercambian arbitrariamente

---

## 2. Color Palette & Roles

### Primary

- **Navy** (`#032149`) — Líneas line art (light), fondos (dark), texto principal. La columna vertebral cromática del sistema; el "negro" de Growth4U.
- **Royal** (`#1a3690`) — Fondos secundarios, gradientes (mid-stop del gradiente brand).
- **Electric** (`#3f45fe`) — Acentos en ropa de personajes, elementos interactivos, hover states.
- **Sky** (`#45b6f7`) — Detalles terciarios, highlights suaves.
- **Teal** (`#0faec1`) — Highlights de texto, gafas de personajes, CTAs, datos positivos, logo "4U". El acento más usado.
- **Purple** (`#6351d5`) — Detalles de ropa, badges, gradiente del logo, elementos premium.

### Neutral

- **White** (`#FFFFFF`) — Fondos light, texto en dark.
- **Background** (`#f8f9fb`) — Fondo página, secciones alternas (gris muy frío con sutil tinte azul).
- **Muted** (`#94a3b8`) — Texto secundario, meta info.
- **Body** (`#475569`) — Cuerpo de texto en surfaces light.

### Gradient System

- **Brand** (`linear-gradient(160deg, #032149 0%, #1a3690 35%, #0faec1 100%)`) — Fondos de social posts, heroes web, portadas, carousel covers. La firma visual.
- **Logo** (`linear-gradient(90deg, #0faec1, #3f45fe, #6351d5)`) — El "4U" del logo, badges premium.
- **Accent bar** (`linear-gradient(90deg, #0faec1, #1a3690, #6351d5)`) — Barras decorativas, dividers.

---

## 3. Typography Rules

### Font Family

- **Heading**: Manrope (Google Fonts) — pesos 600, 700, 800.
- **Body**: Roboto (Google Fonts) — pesos 400, 500.
- **Code**: monospace de sistema (`ui-monospace`, `Menlo`, `Consolas`).

### Hierarchy

| Role | Family | Size | Weight | Line height | Letter spacing | Notes |
|---|---|---|---|---|---|---|
| Display / Hero | Manrope | 56px | 800 | 1.10 | -2px | Hero headlines |
| H1 | Manrope | 48px | 800 | 1.15 | -1.5px | Page titles |
| H2 | Manrope | 36px | 700 | 1.20 | -1px | Section titles |
| H3 | Manrope | 24px | 700 | 1.30 | normal | Subsections |
| Quote | Manrope | 54px | 800 | 1.20 | normal | Social post quotes (1080px canvas) |
| Data | Manrope | 36px | 700 | 1.10 | normal | Métricas, datos destacados |
| Label | Manrope | 14px | 600 | 1.40 | 1.5px (uppercase) | Categorías, tags |
| Body | Roboto | 18px | 400 | 1.70 | normal | Párrafos, cuerpo |
| Meta | Roboto | 14px | 500 | 1.40 | normal | Autor, fecha, meta info |

### Minimum Sizes (no negociables)

- **Social 1080px canvas**: ≥ 24px.
- **Web desktop**: ≥ 16px.
- **Web mobile**: ≥ 14px.
- **Texto sobre imagen**: `text-shadow` obligatorio o fondo semitransparente.

---

## 4. Component Stylings

### Buttons

- Primary CTA: fondo teal (`#0faec1`), texto blanco, radius 8px, font Manrope 600, hover → fondo electric (`#3f45fe`).
- Secondary: fondo white, borde 1px navy (`#032149`), texto navy, hover → fondo bg (`#f8f9fb`).
- Premium / Upgrade: fondo gradient logo, texto blanco, sombra purple-glow.

### Cards

- Fondo white, borde 1px transparent, radius 12px, sombra `0 2px 12px rgba(0,0,0,0.06)`.
- Hover: sombra elevated `0 4px 20px rgba(0,0,0,0.08)`.

### Inputs

- Fondo white, borde 1px muted (`#94a3b8`), radius 8px, padding 12px 16px.
- Focus: borde 2px teal, sin shadow extra (sobrio).

### Navigation

- Sidebar: fondo bg, items con hover navy/8% opacity, active state border-left 3px teal.
- Top nav: fondo white o gradient brand (según contexto), texto navy o blanco.

### Image Treatment

- Light surfaces: ilustraciones line art con líneas navy sobre fondo blanco/cream, accents teal/purple/sky.
- Dark surfaces / gradient brand: líneas blancas sobre fondo navy/gradient, mismos accents.
- **Anti-pegote**: nunca personaje + fondo de color con CSS overlay. Generar imagen completa como una pieza única.

---

## 5. Layout Principles

### Spacing System

| Token | Valor |
|---|---|
| xs | 8px |
| sm | 16px |
| md | 24px |
| lg | 32px |
| xl | 48px |
| xxl | 64px |
| section | 80px |

### Border Radius Scale

| Token | Valor | Uso |
|---|---|---|
| sm | 4px | Tags, badges pequeños |
| md | 8px | Buttons, inputs |
| lg | 12px | Cards estándar |
| xl | 16px | Cards prominentes, modales |
| xxl | 20px | Hero containers |
| pill | 30px | Pills, status badges |
| round | 50% | Avatars, círculos |

### Grid & Container

- **Max width**: 1200px (web desktop).
- **Grid**: 12 columnas en desktop, 4 en mobile.
- **Section spacing**: 80px vertical entre secciones grandes.
- **Whitespace**: generoso. Si dudas, deja más aire.

---

## 6. Depth & Elevation

### Shadows

| Token | Valor | Uso |
|---|---|---|
| card | `0 2px 12px rgba(0,0,0,0.06)` | Cards estándar |
| elevated | `0 4px 20px rgba(0,0,0,0.08)` | Cards en hover, modales |
| text-on-dark | `0 2px 8px rgba(3, 33, 73, 0.6)` | Texto sobre gradient brand |
| logo-on-dark | `0 2px 12px rgba(3, 33, 73, 0.8)` | Logo sobre fondo oscuro |
| teal-glow | `0 4px 20px rgba(15, 174, 193, 0.3)` | CTA highlight, métricas positivas |
| purple-glow | `0 8px 24px rgba(99, 81, 213, 0.4)` | Botones premium, badges |

### Borders

- Default: 1px solid `rgba(3, 33, 73, 0.1)` (navy 10% opacity).
- Emphasis: 1px solid navy `#032149`.
- Dark surfaces: 1px solid `rgba(255, 255, 255, 0.15)`.

---

## 7. Do's and Don'ts

### Do

- **DO** usar la paleta declarada exclusivamente. Ningún color fuera de esta tabla.
- **DO** respetar el `use:` semántico de cada color (navy = texto/líneas, teal = CTA/datos positivos, purple = premium).
- **DO** mantener trazo fino y constante en todas las ilustraciones.
- **DO** integrar texto y fondo en la misma imagen cuando hay personaje (anti-pegote).
- **DO** usar gradient brand en heroes y social posts donde corresponda.
- **DO** aplicar `text-shadow` cuando texto va sobre imagen o gradient.
- **DO** respetar tamaños mínimos por canvas (24px social, 16px desktop, 14px mobile).

### Don't

- **DON'T** mezclar foto y line art en la misma pieza.
- **DON'T** componer personaje + fondo con CSS overlay (anti-pegote).
- **DON'T** usar más de un personaje por imagen (excepto team scenes).
- **DON'T** usar accents amarillos, rojos o verdes que no estén en la paleta.
- **DON'T** poner datos/métricas en colores fríos. Datos positivos siempre teal o amber semántico.
- **DON'T** romper el line weight constante en una misma pieza.
- **DON'T** sustituir Manrope/Roboto por otras fuentes sin justificación brand.

---

## 8. Responsive Behavior

### Breakpoints

| Token | Valor | Uso |
|---|---|---|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape / small desktop |
| xl | 1280px | Desktop estándar |

### Strategy

- Mobile-first. Stack vertical de secciones por defecto.
- Tablet: 2-column grids para features/testimonials.
- Desktop: full layout 12-col con max-width 1200px.
- Imágenes: fluid, max-width 100%, mantener aspect ratio.

---

## 9. Agent Prompt Guide

Reglas para skills downstream que generan assets visuales:

- **No inventes colores fuera de la paleta declarada.** Cada color tiene su `use:` — respétalo.
- **No añadas box-shadows que no estén en §6.**
- **El gradient brand es el fondo signature** de social posts dimensionados 1080×1350 (LinkedIn) y 1080×1920 (IG story). El resto: white/bg.
- **Logo**: aplicar las color rules de §10 (Sancho Extension) según fondo.
- **Tamaños mínimos**: ver §3. Texto < 14px nunca. Texto < 24px nunca en social 1080px.
- **Composition**: anti-pegote (R2 de §7). Si hay personaje, generar como una sola pieza.
- **Para social posts**: usar las dimensiones declaradas en §11.

### Quick Color Reference

| Para texto principal | `#032149` (navy) |
| Para texto sobre dark | `#FFFFFF` (white) |
| Para CTAs primarios | `#0faec1` (teal) |
| Para hover / interactivo | `#3f45fe` (electric) |
| Para badges premium | `#6351d5` (purple) |
| Para fondos light | `#FFFFFF` o `#f8f9fb` |
| Para gradient hero | `linear-gradient(160deg, #032149 0%, #1a3690 35%, #0faec1 100%)` |

---

## 10. Sancho Extensions

### Logo Color Rules

| Contexto | "Growth" | "4U" |
|---|---|---|
| `onWhite` | `#032149` (navy) | `linear-gradient(90deg, #0faec1, #3f45fe, #6351d5)` |
| `onGradient` | `#FFFFFF` (white) | `#FFFFFF` (white) |
| `onTeal` | `#FFFFFF` (white) | `#032149` (navy) |
| `onDark` | `#FFFFFF` (white) | `linear-gradient(90deg, #0faec1, #3f45fe, #6351d5)` |

- **Min size**: 44px on 1080px canvas.
- Forms: full (`Growth4U`) o short (`G4U`) según espacio.

### Illustration Discipline

- **Style**: Clean Line Art Editorial.
- **Line color**: navy `#032149` en light surfaces; white `#FFFFFF` en dark surfaces.
- **Line weight**: thin, constante en toda la pieza.
- **Accents permitidos**: teal `#0faec1`, purple `#6351d5`, sky `#45b6f7`.
- **Background**: white `#FFFFFF` en light, navy `#032149` en dark.
- **Reglas**:
  - Nunca mezclar foto + ilustración en la misma pieza.
  - Same line weight across all elements.
  - One character per image (excepto team scenes).
  - Data/métricas siempre en teal o amber.

### Social Specs por Canal

| Canal | Tipo | Dimensiones | Background default |
|---|---|---|---|
| LinkedIn | Post | 1080×1350 | gradient brand |
| LinkedIn | Carousel cover | 1200×628 | white |
| LinkedIn | Carousel slide | 1200×628 | white |
| Instagram | Post | 1080×1080 | white |
| Instagram | Story | 1080×1920 | gradient brand |
| Blog | Header / OG | 1200×630 | white |

---

<!-- Migrated from design-tokens.json v1.0 (approved 2026-03-08) -->
<!-- Source: brand/growth4u/brand-book/visual-identity/design-tokens.json + visual-identity.current.md -->
