# PS Icon Library

A simple, lightweight, and framework-agnostic icon library built with Web Components.

## Installation

Install the package using npm:

```bash
npm install ps-icon-lib
```

## Usage

1.  **Import the component** into your project's main JavaScript file.

    ```javascript
    import 'ps-icon-lib';
    ```

2.  **Make sure the `icons` folder is served.** Copy the `node_modules/ps-icon-lib/icons` directory to a location that is served by your web server (e.g., your public or assets folder). By default, the component will look for icons at `/icons/`.

3.  **Use the custom tag** in your HTML:

    ```html
    <ps-icon name="cloud"></ps-icon>
    <ps-icon name="cloud-moon"></ps-icon>
    ```

### Styling

You can style the icons easily using CSS. The icon size is based on the `font-size` and the color is based on the `color` property.

```html
<style>
  .big-red-icon {
    font-size: 48px;
    color: red;
  }
</style>

<ps-icon name="cloud" class="big-red-icon"></ps-icon>
```

### Available Icons

* `cloud`
* `cloud-moon`
* `cloud-fog`
* `cloud-bolt`
* `cloud-arrow`
* `circle-heat`
* `heat-alt`
* *(add more as you create them)*

---
Made with ❤️ by Praveen Sripati.