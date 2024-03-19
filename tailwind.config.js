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
            "half_baked" : "#5c96c1",
            "moss_green" : "#a6d8b1",
            "sprout" : "#8abbd0",
            "vanilla" : "#b6d1e2",
            "cold_purple" : "#c6e2eb",
            "martinique" : "#5c96c1",
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