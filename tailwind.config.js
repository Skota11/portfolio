/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors : {
            "half_baked" : "#8bcbc2",
            "moss_green" : "#a6d8b1",
            "sprout" : "#c2d6a8",
            "vanilla" : "#d1c4a8",
            "cold_purple" : "#b1a6d8",
            "martinique" : "#2b2e4a",
            "osyarena_kuro" : "#333",
            "powder_blue" : "#add8e1",
            "spring_wood": "#f6f2ee",
            "marzipan":"#f6e492",
            "gray" : "#f6f6f6",
        }
      },
    },
    plugins: [],
  }