module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#114042",
          "secondary": "#2C7FFD",
          "accent": "#3D8386",
          "neutral": "#404040",
          "base-100": "#F7F7F7",
          "info": "#2C7FFD",
          "success": "#FCD430",
          "warning": "#D4AD14",
          "error": "#FFDD56",
        },
      },
    ],
  },

  // dark theme :
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         "primary": "#114042",
  //         "secondary": "#000000",
  //         "accent": "#3D8386",
  //         "neutral": "#404040",
  //         "base-100": "#222222",
  //         "info": "#246264",
  //         "success": "#D4AD14",
  //         "warning": "#FCD430",
  //         "error": "#FF83AA",
  //       },
  //     },
  //   ],
  // },
  


}