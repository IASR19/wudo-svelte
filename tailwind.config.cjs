/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  daisyui: {
    themes: [
      {
        wudu_light: {
          "primary": "#193e8b",
          "secondary": "#728cc1",
          "accent": "#7c3aed",
          "neutral": "#4b5563",
          "base-100": "#e0f2fe",
          "info": "#2dd4bf",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        dark: {
          "primary": "#193e8b",
          "secondary": "#728cc1",
          "accent": "#7c3aed",
          "neutral": "#374151",
          "base-100": "#1f2937",
          "info": "#2dd4bf",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}
