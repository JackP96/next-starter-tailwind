module.exports = {
	purge: ["./components/**/*.js", "./pages/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				merriweather: ["Merriweather", "serif"],
			},
			textColor: {
				gray: "#333333",
				primary: "#0b2640",
				secondaryGray: "#444444",
			},
			backgroundColor: {
				lightBlue: "rgba(19,68,115,0.1)",
				primary: "#0b2640",
			},
			maxWidth: {
				90: "90%",
			},
		},
	},
};
