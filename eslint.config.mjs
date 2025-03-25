// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/multi-word-component-names': 'off',   // Disable multi-word component name rule
    'vue/no-multiple-template-root': 'off',    // Allow multiple root elements (Nuxt 3 feature)
    'vue/first-attribute-linebreak': 'off',    // Disable line break rule for first attribute
    'no-console': 'warn',                      // Warn on console logs, but allow
    'no-debugger': 'error',                     // Error on debugger statements
    "vue/attribute-hyphenation": "off",
    '@typescript-eslint/no-explicit-any': 'off',
  }
})
