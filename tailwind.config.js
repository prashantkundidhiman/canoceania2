module.exports = {
  content: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html", "./themes/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),]
}
