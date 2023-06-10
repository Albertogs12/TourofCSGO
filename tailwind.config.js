/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{html,js}"],
theme: {
  extend: {
    backgroundImage: theme => ({
      'Background': "url('./assets/fondocsgo.jpg')",
    })
  },
},
plugins: [],
}


