# Tailwind CSS @apply Directive Issue

This repository demonstrates a bug where the `@apply` directive in Tailwind CSS doesn't work correctly when used within custom styles defined in `tailwind.config.js`.

## Bug Description

Even with correctly defined classes and a properly configured `tailwind.config.js` file, the `@apply` directive fails to apply the expected styles to elements. This issue specifically arises when using `@apply` within a custom style defined using the `addUtilities` plugin.  The styles defined within the `@apply` directive aren't reflected in the output.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Observe that the element with the class `.custom-text-style` does not have the expected styles applied.

## Solution

The solution involves understanding the context of `@apply` within `addUtilities` and adjusting the approach to defining custom styles.  The solution is provided in `bugSolution.js` which shows a corrected approach for applying custom styles while utilizing Tailwind's functionality effectively.