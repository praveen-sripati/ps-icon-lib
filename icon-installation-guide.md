
# Icon Component Installation Guide

## Install the Package

```bash
npm install ps-icon-lib # Replace with your actual package name
```

Next, follow the setup guide for your specific framework.
- [Angular](#angular)
- [React](#react)
- [Vue.js](#vuejs)
- [Svelte](#svelte)

---

## Angular

Integrating into an Angular project requires three steps: configuring your assets, updating your component's schema, and importing the library.

### 1. Configure `angular.json` to Serve Icons

Tell the Angular CLI to copy the icons folder into your application's build output. In `angular.json`, add the following to the `assets` array:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "node_modules/ps-icon-lib/icons/",
    "output": "/icons/"
  }
]
```

> **Important:** You must restart your `ng serve` development server after this change.

### 2. Update Component Schema

For any standalone component where you want to use the icons, add `CUSTOM_ELEMENTS_SCHEMA` to the component's decorator.

```ts
// src/app/app.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  //...
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class AppComponent {}
```

### 3. Import the Library

Import the library once in your application's entry point to register the `<ps-icon>` element.

```ts
// src/main.ts
import 'ps-icon-lib'; // Add this line
```

### 4. Use in a Template

```html
<h1>My Angular App <ps-icon name="home" size="lg"></ps-icon></h1>
```

---

## React

React's setup is simpler as it doesn't require a special template schema.

### 1. Make Icons Available

Copy the `icons/` folder from `node_modules/ps-icon-lib/` into your project's `public` folder.

### 2. Import the Library

Import the library once in your application's main entry point.

```js
// src/index.js (for Create React App) or src/main.jsx (for Vite)
import 'ps-icon-lib'; // Add this line
```

### 3. Use in a Component

```jsx
// src/App.js
function App() {
  return (
    <div>
      <h1>My React App <ps-icon name="home" size="lg"></ps-icon></h1>
      <p>A user icon: <ps-icon name="user" style={{ color: 'dodgerblue' }}></ps-icon></p>
    </div>
  );
}
```

---

## Vue.js

For Vue projects (using Vite), configure Vite to recognize the custom element.

### 1. Make Icons Available

Copy the `icons/` folder from `node_modules/ps-icon-lib/` into your project's `public` folder.

### 2. Configure `vite.config.js`

Tell Vue's template compiler to treat `<ps-icon>` as a custom element.

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags with 'ps-' prefix as custom elements
          isCustomElement: (tag) => tag.startsWith('ps-')
        }
      }
    })
  ],
})
```

### 3. Import the Library

```js
// src/main.js
import 'ps-icon-lib'; // Add this line
```

### 4. Use in a Template

```html
<!-- src/App.vue -->
<template>
  <h1>My Vue App <ps-icon name="home" size="lg"></ps-icon></h1>
  <p>A user icon: <ps-icon name="user" style="color: #42b883;"></ps-icon></p>
</template>
```

---

## Svelte

Svelte (and SvelteKit) has excellent support for web components.

### 1. Make Icons Available

For SvelteKit projects, copy the `icons/` folder from `node_modules/ps-icon-lib/` into your project's `static` folder.

### 2. Import the Library

```js
// src/routes/+layout.js
import 'ps-icon-lib'; // Add this line
```

### 3. Use in a Component

```html
<!-- src/routes/+page.svelte -->
<h1>My Svelte App <ps-icon name="home" size="lg"></ps-icon></h1>
<p>A user icon: <ps-icon name="user" style="color: #ff3e00;"></ps-icon></p>
```

---
