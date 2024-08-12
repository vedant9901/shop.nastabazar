/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Open Sans", "sans-serif"],
      },
      lineHeight: {
        normal: "1.5",
        none: "1",
        tight: "1.25",
        snug: "1.375",
        loose: "2",
      },
      colors: {
        primary: "#FFED00",
        secondary: "#E31E23",
        backgroundPrimary:"#E6E6E6",
        accent: '#019376',
        black: "#000000",
        lightBlue: "#0ea5e9",
        saveColour: "#ba4444",
        themeGray: "#6b7280",
        cartItemCheckoutPage: '#859AA2',
        instagramStart: '#f58529',
        instagramMiddle: '#dd2a7b',
        instagramEnd: '#515bd4',
      },
      container: {
        center: true,
        padding: "15px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.05)', opacity: 0.7 },
        },
      },
      status: {
        pending: withOpacity("--color-pending"),
        processing: withOpacity("--color-processing"),
        complete: withOpacity("--color-complete"),
        canceled: withOpacity("--color-canceled"),
        failed: withOpacity("--color-failed"),
        "out-for-delivery": withOpacity("--color-out-for-delivery"),
      },
      textColor: {
        body: withOpacity("--text-base"),
        "body-dark": withOpacity("--text-base-dark"),
        muted: withOpacity("--text-muted"),
        "muted-light": withOpacity("--text-muted-light"),
        heading: withOpacity("--text-heading"),
        "sub-heading": withOpacity("--text-sub-heading"),
        bolder: withOpacity("--text-text-bolder"),
      },
      minHeight: {
        580: "580px",
        140: "35rem", // 560px
        40: "10rem", // 140px
        6: "2.5rem",
      },
      height: {
        4.5: "1.125rem",
        13: "3.125rem",
        22: "5.25rem",
        double: "200%",
      },
      maxHeight: {
        "70vh": "70vh",
        "85vh": "85vh",
        140: "35rem", // 560px
      },
      maxWidth: {
        1920: "1920px",
      },
      minWidth: {
        150: "150px",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      inset: {
        22: "5.25rem",
      },
      strokeWidth: {
        2.5: "2.5",
      },
      transitionProperty: {
        height: "height",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.04, 0.62, 0.23, 0.98)",
      },
      transitionDuration: {
        '1000': '1000ms', // Custom transition duration
      },
      transitionProperty: {
        'transform': 'transform',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
