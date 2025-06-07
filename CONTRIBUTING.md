# How to Contribute to PS-Icons

We welcome contributions! If you would like to add a new icon to the library, please follow the steps below.

## Adding a New Icon

This is the standard workflow for adding a new icon to ensure it is optimized, documented, and properly released.

### 1. Prepare the SVG Asset

1.  **Design:** Create the new icon on a 24x24 pixel grid to maintain consistency.
2.  **Export:** Export the icon as an SVG file using a simple, lowercase name (e.g., `new-icon.svg`).
3.  **Optimize:** Use a tool like [SVGOMG](https://jakearchibald.github.io/svgomg/) to clean up the SVG. The final file **must**:
    -   Have a `viewBox="0 0 24 24"` attribute.
    -   **Not** have `width` or `height` attributes.
    -   Use `currentColor` for any `fill` or `stroke` properties to make it styleable.
    -   Be free of unnecessary metadata or editor-specific code.
4.  **Add File:** Place the final, optimized `.svg` file into the `/icons` directory.

### 2. Document and Test

1.  **Update README:** Open `README.md` and add the new icon's name to the "Available Icons" list in alphabetical order.
2.  **Update Demo:** Open `demo.html` and add the new icon to the page. This is for visually confirming that the icon renders correctly.

### 3. Submitting Changes

1.  **Create a Pull Request:** Once you have completed the steps above, commit your changes and create a pull request.
2.  **Versioning:** The project maintainer will handle versioning and publishing to npm. New icons result in a `minor` version bump according to Semantic Versioning.

Thank you for contributing!