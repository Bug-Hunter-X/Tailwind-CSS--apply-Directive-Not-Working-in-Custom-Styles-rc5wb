The issue is caused by the way `@apply` is used within `addUtilities`.  `@apply` is designed to work within the context of a fully compiled CSS file, but in `addUtilities`, we're attempting to use it prematurely before compilation.  To solve this, we need to define the styles directly within `addUtilities` instead of relying on `@apply`.

Here's the corrected `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-text-style': {
          fontSize: '1.125rem', // instead of @apply text-lg
          fontWeight: '700',  // instead of @apply font-bold
          color: '#374151',   // instead of @apply text-gray-800
        },
      });
    },
  ],
};
```

This corrected version directly defines the styles in the `addUtilities` plugin, eliminating the need for the `@apply` directive in this context.  This ensures the styles are applied correctly.