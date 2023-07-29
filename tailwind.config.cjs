const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.njk"],
	theme: {
		container: {
			center: true
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark"],
	}
};