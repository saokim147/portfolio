# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built as a statically-exported Next.js application.

**Tech Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS v4

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (outputs to /out)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Single-page application** - All portfolio sections are in `app/page.tsx` as a client component (`'use client'`)
- **Static export** - Configured via `output: 'export'` in `next.config.js`, builds to `/out` directory
- **Tailwind v4** - Uses the new `@theme` syntax in `app/globals.css` for custom colors, fonts, and animations
- **Path alias** - `@/*` maps to the root directory

## Styling

Tailwind CSS v4 theme configuration is defined in `app/globals.css` using `@theme`:

- **Colors:** Primary (slate-800), secondary (slate-700), accent (green-500), background (slate-900)
- **Fonts:** Space Grotesk (sans), Archivo (heading)
- **Animations:** fadeIn, slideUp, float, gradient - defined as custom keyframes

The design uses glass morphism effects and dark theme with green accent throughout.
