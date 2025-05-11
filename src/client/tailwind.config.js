/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom animations configuration
      animation: {
        // Marquee animation: 8s duration (very fast scrolling)
        // linear: constant speed
        // infinite: repeats forever
        'marquee': 'marquee 8s linear infinite',
      },
      // Keyframes define the animation steps
      keyframes: {
        marquee: {
          // Start position: no translation
          '0%': { transform: 'translateX(0)' },
          // End position: move left by 50% of the container width
          // This creates the infinite scroll effect
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}