# RESTAURANT — Enterprise Restaurant Management & POS Dashboard

A high-performance, fully responsive Single Page Application (SPA) designed for restaurant administrators and employees to manage tables, take orders, and monitor staff. This project highlights strict TypeScript typing, asynchronous data caching, real-time WebSocket communication, and adaptive layouts.

🚀 **Live Demo:** [Netlify](https://task7-restaurant.netlify.app)

---

## 📖 Functionality

The application provides a comprehensive toolkit for day-to-day restaurant operations:

- **Role-Based Authentication Flow:** Separate multi-state onboarding pipelines for Employees and Administrators with robust local validation and context storage.

- **Dynamic Employee Directory:** A searchable, filterable, and paginated data table integrated with the DummyJSON API, built using TanStack Table and cached via TanStack Query.

- **Interactive Visual Floor Plan:** A fluid grid-based layout reflecting real-time table statuses (Free, Occupied, Reserved) that safely converts into a vertical list on smaller viewports.

- **POS Order Management Panel:** A advanced multi-category order sheet utilizing TanStack Table grouping, featuring instant quantity modifiers, itemized totals, specialized menu comments, and reactive price aggregations.

- **Real-Time Support Chat:** A custom responsive WebSocket module linked to an echo server (wss://ws.ifelse.io), transforming from a desktop popover into a fluid fullscreen layout on mobile.

- **Mobile-First Responsive Layout:** Full cross-device compatibility featuring fluid typography scales, structural table scroll-guards, and a collapsible sidebar that turns into a touch-friendly navigation drawer via a burger menu.

---

## 🛠️ Tech Stack

### Core

- **React:** Functional components, hooks, and localized context architecture.

- **TypeScript:** 100% strict typing throughout components, endpoints, and table schemas (any is prohibited).

- **TanStack Router:** Type-safe, declarative client-side routing for seamless page transitions.

### Data Fetching & WebSockets

- **TanStack Query:** Server-state management handling automated data fetching, background updates, and optimal caching policies for external endpoints.

- **Native WebSocket API:** Bi-directional real-time communication channel integrated directly with an external Echo Server.

### Build Tooling

- **Vite:** High-speed development environment and optimized production bundling configuration.

### Styling & Layout

- **Material UI (MUI):** Core design system utilized via responsive Breakpoint Objects inside layout elements and the sx engine.

- **SASS (SCSS):** Structured modular pre-processor stylesheets layered in parallel to handle localized UI fine-tuning.

---

## 🏗️ Architecture

The project is structured according to the **Feature-Sliced Design (FSD)** architectural methodology to ensure clean separation of concerns and scaling modularity:

- `app/`: Global routing configurations, application providers, and foundational style hooks.
- `pages/`: Layout compositions transforming feature modules into functional views (`Start`, `Login`, `Register`, `Employees`, `Tables`).
- `widgets/`: Macro-UI components handling specific operational regions (e.g., `OrderWidget`, `EmployeesWidget`, `AdminSidebar`, `ChatWidget`).
- `features/`: Interactive user-logic modules (e.g., `EmployeeSearch`, `EmployeeFilter`).
- `entities/`: Domain-specific business logic models, custom type definitions, and column schemas (e.g., `EmployeeTable`, `orderColumns`).
- `shared/`: Reusable UI elements (custom helper cards, icons), utility helpers (validation algorithms), and central API client handlers.

---

## 📦 Installation & Startup

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/sevasmith/restaurant.git

cd restaurant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## 👥 Contact

Developer: Seva Kavalenka

Mentor: Nikita Mihnevich

Deadline: 2 weeks (Completed June 2026)
