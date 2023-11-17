/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./*.html', './partials/**/*.html'],
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,

			// or have default horizontal padding
			padding: {
				default: '50px',
				// xxs: '12px',
				xs: '12px',
				sm: '12px',
				md: '50px',
			},

			// default breakpoints but with 40px removed
			screens: {
				xxs: '280px',
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1279px',
			},
		},
		extend: {
			fontFamily: {
				montserrat: ["'Montserrat', sans-serif;"],
				montserratmedium: ["'Montserrat Medium', sans-serif;"],
				montserratsemibold: ["'Montserrat SemiBold', sans-serif;"],
				montserratbold: ["'Montserrat Bold', sans-serif;"],
				montserratextrabold: ["'Montserrat ExtraBold', sans-serif;"],
			},
			fontSize: {
				xs: ['12px', '12px'],
				sm: ['14px', '14px'],
				base: ['16px', '24px'],
				md: ['18px', '32px'],
				lg: ['32px', '36px'],
				xl: ['48px', 'normal'],
				'2xl': ['80px', 'normal'],
			},
			spacing: {
				1: '20px',
				2: '30px',
				3: '32px',
				4: '40px',
				5: '60px',
				6: '120px',
				7: '140px',
				8: '160px',
				9: '180px',
				calendarUnit: '44px',
			},
			colors: {
				bavRed: '#e10019',
				bavBlue: '#009be1',
				bavMedGray: '#969696',
				bavDarkGray: '#505050',
				bavVeryLightGray: '#f5f5f7',
				bavHellGray: '#c8c8c8',
				black: '#000000',
				white: '#ffffff',
				bavGreen: '#a0c36e',
				bavTurqoise: '#46aabe',
				bavOrange: '#d79b5a',
				bavPink: '#e178c3',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			boxShadow: {
				lg: '-4px 0 4px 0 rgba(80, 80, 80, 0.3)',
				xl: 'inset 0 11px 8px -10px rgba(0, 0, 0, 0.1)',
				cardShadow:
					'4px 4px 8px 0 rgba(0, 0, 0, 0.05), -4px 4px 8px 0 rgba(0, 0, 0, 0.05), 0 -1px 8px 0 rgba(0, 0, 0, 0.05);',
				'3xl': '0 2px 7px 0 rgba(150, 150, 150, 0.4)',
				modal: '0 2px 8px 0 bavDarkGray',
			},
			visibility: ['group-hover'],
		},
	},
	plugins: [],
};
