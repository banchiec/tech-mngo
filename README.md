# Mango Frontend Technical Assessment

This repository contains my solution for the Mango Frontend Technical Assessment.

The project has been developed using **Next.js 15**, **React 19**, **TypeScript**, and the **App Router**, following a reusable and scalable component-based architecture.

---

## Overview

The goal of this technical assessment is to implement a reusable custom **Range** component capable of handling two different scenarios:

- **Exercise 1:** Standard numeric range.
- **Exercise 2:** Fixed catalog values.

The solution focuses on component reusability, separation of concerns, accessibility, and maintainability.

---

## Features

### Exercise 1

- Custom range component (without using the native HTML `<input type="range">`)
- Two draggable handles
- Editable minimum and maximum values
- Manual value validation
- Boundary validation
- Handle collision prevention
- Mocked API endpoint
- Server-side data loading using React `use()` and `Suspense`

### Exercise 2

- Fixed catalog values
- Read-only labels
- Two draggable handles
- Selected catalog highlighting
- Mocked API endpoint
- Reuses the same `Range` component

---

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library

---

## Project Structure

```text
src/
├── app/                # Next.js routes and API handlers
├── components/         # Reusable UI components
├── features/           # Feature-specific views
├── hooks/              # Custom hooks
├── services/           # Data access layer
├── types/              # Shared TypeScript types
├── utils/              # Helper functions
└── __tests__/          # Unit and integration tests
```

---

## Architecture

The project follows a component-based architecture with a clear separation of responsibilities:

- **app** → Routing and API endpoints.
- **features** → Feature-specific presentation logic.
- **components** → Reusable UI components.
- **hooks** → Business logic and state management.
- **services** → Data retrieval.
- **utils** → Pure utility functions.
- **types** → Shared TypeScript definitions.

The `Range` component is completely reusable and shared between both exercises.

---

## Testing

The project includes unit and integration tests covering:

- Range component rendering
- Pointer interactions
- Manual input editing
- Exercise 1 integration
- Exercise 2 integration

Run the tests with:

```bash
npm test
```

---

## Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

- http://localhost:3000/exercise1
- http://localhost:3000/exercise2

---

## Available Scripts

```bash
npm run dev
npm run test
npm run lint
npm run build
```

---

## Notes

Some implementation decisions taken during development:

- Shared reusable `Range` component for both exercises.
- Business logic extracted into a custom hook (`useRange`).
- Mock API endpoints to simulate backend responses.
- React 19 `use()` with `Suspense` to consume asynchronous server data.
- Type-safe implementation using TypeScript.
- Accessibility considerations such as descriptive `aria-label` attributes.

---

## Author

**Iván Espinoza Condori**

Thank you for taking the time to review my solution.