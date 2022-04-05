module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      background: {
        'hero-pattern': "url('./img/bg-page.png')",
        'gradient-lineary':"linear-gradient(156deg, rgba(58,83,180,1) 0%, rgba(67,93,135,1) 15%, rgba(66,137,147,1) 30%, rgba(105,118,122,1) 47%, rgba(253,29,29,1) 73%, rgba(252,176,69,1) 100%)"
    },
    clipPath:{
      'round-shape' : "ellipse(100% 50% at 48% 44%)"
    },
    
      fontFamily:{

       'header' : 'Kaushan Script',
       'content' : 'Space Mono'

    }
  },
  plugins: [],
  }
}