// A simple in-memory cache to store fetched SVG content.
// This prevents the browser from re-fetching an icon every time it's used.
const iconCache = new Map();

// A map to define the pixel values for our size variations.
// Using `rem` units is best practice for accessibility.
const sizeMap = {
  xs: '0.75rem',  // 12px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  xxl: '4rem',     // 64px
};


class MyIcon extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate the component's internal markup and styles.
    this.attachShadow({ mode: 'open' });
  }

  // `connectedCallback` is a lifecycle method that runs when the element
  // is added to the document (DOM).
  async connectedCallback() {
    const name = this.getAttribute('name');
    if (!name) {
      // If no 'name' attribute is provided, do nothing.
      return;
    }

    // Get the size attribute, convert to lowercase for case-insensitivity.
    const sizeAttr = this.getAttribute('size')?.toLowerCase();

    // Look up the size in our map. If it doesn't exist or isn't provided,
    // fall back to '1em' to scale with font-size as before.
    const iconSize = sizeMap[sizeAttr] || '1em';

    let svgContent;

    // Check if we have already fetched and cached this icon.
    if (iconCache.has(name)) {
      svgContent = iconCache.get(name);
    } else {
      // If not in cache, fetch the SVG file.
      try {
        // The path assumes the 'icons' folder is at the root of the website.
        // This path might need to be adjusted based on your final setup.
        const response = await fetch(`/icons/${name}.svg`);

        if (!response.ok) {
          throw new Error(`Could not load icon: ${response.statusText}`);
        }

        svgContent = await response.text();
        // Store the newly fetched SVG content in the cache.
        iconCache.set(name, svgContent);

      } catch (error) {
        console.error(error);
        // Render an empty SVG or a fallback icon on error.
        svgContent = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>`;
      }
    }

    // Populate the Shadow DOM with the component's style and the SVG content.
    this.shadowRoot.innerHTML = `
      <style>
        /* :host refers to the <my-icon> element itself */
        :host {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          /* The width and height are now set by our iconSize variable */
          width: ${iconSize}; /* Default size, scales with parent font-size */
          height: ${iconSize};
        }
        /* Target the SVG element inside the shadow DOM */
        .icon-container {
          display: inherit;
          width: 100%;
          height: 100%;
          /* 'currentColor' makes the icon inherit its color from CSS 'color' property. */
          fill: currentColor; 
        }
      </style>
      
      <div class="icon-container" part="icon-container">
        ${svgContent}
      </div>
    `;
  }
}

// Define the custom element so the browser recognizes the <my-icon> tag.
customElements.define('ps-icon', MyIcon);