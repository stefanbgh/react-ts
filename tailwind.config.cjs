/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				"bounce-slow": "bounce-slow 2s infinite",
			},
			keyframes: {
				"bounce-slow": {
					"0%, 100%": {
						transform: "translateY(-50%)",
						"animation-timing-function":
							"cubic-bezier(0.8, 0, 1, 1)",
					},
					"50%": {
						transform: "translateY(0)",
						"animation-timing-function":
							"cubic-bezier(0, 0, 0.2, 1)",
					},
				},
			},
		},
	},
	plugins: [],
};
