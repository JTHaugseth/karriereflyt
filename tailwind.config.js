/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(90deg, rgba(236,234,232,1) 0%, rgba(222,219,217,1) 100%)",
        // Secondary gradiant
        "background-gradient":
          "linear-gradient(90deg, #ECEAE8 0%, #DEDBD9 100%)",
        "icons-gradient": "linear-gradient(90deg, #FFFBF8 0%, #EDE4DE 100%)",
        // Primary gradient
        "slate-gray-gradient":
          "linear-gradient(90deg, #7E9AA3 0%, #516F76 100%)",
        "pistach-gradient": "linear-gradient(90deg, #9CA594 0%, #77826F 100%)",
        "vanilla-latte": "linear-gradient(90deg, #C2B2A2 0%, #8D7D6D 100%)",
      },
      colors: {
        //Gradiants starts
        "gr-start": "#ECEAE8 ",
        "gr-end": "#DEDBD9",

        "secondary-grey": "#4A4A4A",
        "button-border-color": "#6E6E6E",
        "card-text-color": "#69625D",
        "secondary-blue-bg": "#899DA2",
        "box-border-color": "#f1f1f1a8",
        "partner-box": "#FFFBF8",
        //Primary flat
        "slate-gray-flat": "#6B858D",
        "pistasch-flat": "#8A9482",
        "vanilla-latte-flat": "#A59584",

        purple: "#8F8799",
        "weird-red": "#998787",
        "weird-green": "#6B8D8B",
        // Primary gradient
        "slate-gray-gradient":
          "linear-gradient(90deg, #7E9AA3 0%, #516F76 100%)",
        "pistach-gradient": "linear-gradient(90deg, #9CA594 0%, #77826F 100%)",
        "vanilla-latte": "linear-gradient(90deg, #C2B2A2 0%, #8D7D6D 100%)",

        // Secondary flat
        "text-flat": "#4A4A4A",
        "text-flat-inverted": "#FFFBF8",
        "background-flat": "#FFFBF8",
        "background-flat-inverted": "#4A4A4A",
        3: "#E6E4E2",

        // Secondary gradiant
        "icons-gradient": "linear-gradient(90deg, #FFFBF8 0%, #EDE4DE 100%)",
        "background-gradient":
          "linear-gradient(90deg, #ECEAE8 0%, #DEDBD9 100%)",

        // Border colors
        "border-dark": "#dbd8d5",

        //CTA button number two
        "secondary-btn": "#E6E4E2",
      },
      fontSize: {
        headline: "69px",
        subHeadline: "32px",
        header1: "40px",
        header2: "20px",
        header3: "16px",
        footerTitle: "16px",
        footer: "12px",
        button: "16px",
        icon: "18px",

        //mobile
        mobileHeadline: "42px",
        mobileSubheadline: "21px",
        mobileHeader: "28px",
        mobileHeader2: "16px",
        mobileHeader3: "12px",
        mobileNormal: "12px",
        mobileButton: "12px",
      },

      width: {
        45: "45%",
        10: "10%",
      },

      borderRadius: {
        notSquared: "32px",
      },
    },
  },
  plugins: [],
};
