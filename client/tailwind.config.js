/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      container: "1300px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(10,31,31,1) 97%);",
      },
      colors: {
        redText: "#DF6951",
        purpleText: "#181E4B",
        lightPurpleText: "#31599b",
        yellowColor: "#ffbf00",
        textWhite: "#fff",
        buttonColor: "#DF6951",
        blueText: "#143c75",
        green: "#06cccc",
        orange: "#ff9700",
        pink: "#f74871",
      },
    },
  },
  plugins: [],
};
