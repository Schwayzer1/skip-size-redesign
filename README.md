# Skip Size Selector – Redesign Challenge

This project is a complete visual redesign of the **"Choose Your Skip Size"** page from [wewantwaste.co.uk](https://wewantwaste.co.uk), created as part of a frontend coding challenge.

<p align="center">
  <a href="https://codesandbox.io/p/github/Schwayzer1/skip-size-redesign/main" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-CodeSandbox-green?style=for-the-badge&logo=codesandbox" alt="Live Demo" />
  </a>
</p>

## 🚀 Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/) - for reusable, accessible UI components
- [Framer Motion](https://www.framer.com/motion/) – for UI animation
- [clsx](https://github.com/lukeed/clsx) – for conditional class handling

---

## 🎨 Redesign Goals

- ✅ Visually distinct from the original dark-themed UI
- ✅ Responsive layout (mobile + desktop)
- ✅ Clean, modern UI with soft visuals (glassmorphism touch)
- ✅ Maintain original functionality (selecting a skip, showing total, etc.)
- ✅ Emphasize user interaction through hover & selection states

---

## ✨ Redesign Highlights

| Feature                 | Description                                                                |
| ----------------------- | -------------------------------------------------------------------------- |
| **Visual Identity**     | Gradient background, white cards with blur (glass effect), rounded buttons |
| **Card Interaction**    | Selectable cards with hover effects, animated transitions                  |
| **Animated Bottom Bar** | Shows selected skip using `framer-motion`, appears from left               |
| **Road Warning**        | Skips not allowed on road display a yellow badge                           |
| **Price Highlighting**  | Prices are shown clearly in bold & modern fonts                            |

---

## 📦 API Source

Skips are loaded dynamically from:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Each skip card is rendered based on this data structure:

```ts
export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
```
