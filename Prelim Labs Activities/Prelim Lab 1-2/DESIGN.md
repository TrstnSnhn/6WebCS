# Design

## Typography
- **Headings:** Archivo (Sans-serif, strong, modern)
- **Body:** Space Grotesk (Sans-serif, clean, slightly quirky)
- **Scale:** Modular scale for consistent hierarchy.

## Colors (OKLCH)
- **Background:** `oklch(0.99 0.005 250)` (Nearly white with a hint of cool slate)
- **Ink (Body Text):** `oklch(0.2 0.02 250)` (Deep slate for high readability)
- **Accent:** `oklch(0.6 0.25 250)` (Vibrant Blue for CTAs and highlights)
- **Muted:** `oklch(0.9 0.01 250)` (Subtle borders and separators)

## Components
- **Hero:** Impactful typography with a centered or split profile image.
- **Section Headers:** Clean, bold, and distinct.
- **Grids:** Responsive layouts for skills and hobbies.
- **Interactive Elements:** Subtle scale and color transitions on hover/active states.

## Motion
- **Entrance:** Fade-in and slide-up for sections using `@starting-style`.
- **Transitions:** `200ms ease-out` for most interactions.
- **Press:** `scale(0.98)` for immediate feedback.
