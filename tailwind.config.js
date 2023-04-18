const { blackA, green, mauve, slate, violet } = require("@radix-ui/colors");
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...slate,
        ...violet,
        primary: {
          100: "#8CC63F",
          200: "#628D2A",
          300: "#F8FCF4",
        },
        accent: {
          100: "#F2C94C",
          200: "#D0A00F",
        },
        text: {
          100: "#dedede",
          200: "#9e9e9e",
        },
        bg: {
          100: "#3B3F36",
          200: "#383C33",
          300: "#4D5246",
        },
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: "scale(0)",
            transform: "translateY(120vh)",
            filter: "blur(0px)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
            transform: "translateY(0)",
            filter: "blur(10px)",
          },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        fade: "fadeIn .6s ease-out",
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      fontFamily: {
        inspiration: ["Inspiration", "cursive"],
      },
    },
  },
  plugins: [],
};
