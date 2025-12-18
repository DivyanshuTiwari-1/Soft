/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx}',
	  './components/**/*.{ts,tsx}',
	  './app/**/*.{ts,tsx}',
	  './src/**/*.{ts,tsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	//   extend: {
	// 	keyframes: {
	// 	  "accordion-down": {
	// 		from: { height: 0 },
	// 		to: { height: "var(--radix-accordion-content-height)" },
	// 	  },
	// 	  "accordion-up": {
	// 		from: { height: "var(--radix-accordion-content-height)" },
	// 		to: { height: 0 },
	// 	  },
	// 	},
	// 	animation: {
	// 	  "accordion-down": "accordion-down 0.2s ease-out",
	// 	  "accordion-up": "accordion-up 0.2s ease-out",
	// 	},
	// extend: {
	// 	keyframes: {
	// 	  "fade-up": {
	// 		from: { opacity: 0, transform: "translateY(12px)" },
	// 		to: { opacity: 1, transform: "translateY(0)" },
	// 	  },
	// 	  "slide-in-left": {
	// 		from: { opacity: 0, transform: "translateX(-16px)" },
	// 		to: { opacity: 1, transform: "translateX(0)" },
	// 	  },
	// 	  float: {
	// 		"0%, 100%": { transform: "translateY(0)" },
	// 		"50%": { transform: "translateY(-8px)" },
	// 	  },
	// 	  "glow-pulse": {
	// 		"0%, 100%": { opacity: 0.4 },
	// 		"50%": { opacity: 0.8 },
	// 	  },
	// 	  shimmer: {
	// 		"0%": { backgroundPosition: "200% 0" },
	// 		"100%": { backgroundPosition: "-200% 0" },
	// 	  },
	// 	  ripple: {
	// 		"0%": { transform: "scale(1)", opacity: 0.5 },
	// 		"100%": { transform: "scale(1.8)", opacity: 0 },
	// 	  },
	// 	  "spin-slow": {
	// 		to: { transform: "rotate(360deg)" },
	// 	  },
	// 	  "bounce-soft": {
	// 		"0%, 100%": { transform: "translateY(0)" },
	// 		"50%": { transform: "translateY(-4px)" },
	// 	  },
	// 	  "timeline-draw": {
	// 		from: { transform: "translateY(-100%)" },
	// 		to: { transform: "translateY(0)" },
	// 	  },
	// 	},
	// 	animation: {
	// 	  "fade-up": "fade-up 0.6s ease forwards",
	// 	  "slide-in-left": "slide-in-left 0.6s ease forwards",
	// 	  float: "float 6s ease-in-out infinite",
	// 	  "float-slow": "float 10s ease-in-out infinite",
	// 	  "glow-pulse": "glow-pulse 4s ease-in-out infinite",
	// 	  shimmer: "shimmer 2.5s linear infinite",
	// 	  ripple: "ripple 1.5s ease-out infinite",
	// 	  "spin-slow": "spin-slow 20s linear infinite",
	// 	  "bounce-soft": "bounce-soft 2s ease-in-out infinite",
	// 	  "timeline-draw": "timeline-draw 2s ease-out forwards",
	// 	},
	extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  sidebar: {
			DEFAULT: "hsl(var(--sidebar-background))",
			foreground: "hsl(var(--sidebar-foreground))",
			primary: "hsl(var(--sidebar-primary))",
			"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
			accent: "hsl(var(--sidebar-accent))",
			"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
			border: "hsl(var(--sidebar-border))",
			ring: "hsl(var(--sidebar-ring))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		  "fade-up": {
			"0%": { opacity: "0", transform: "translateY(20px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		  },
		  "fade-in": {
			"0%": { opacity: "0" },
			"100%": { opacity: "1" },
		  },
		  "scale-in": {
			"0%": { opacity: "0", transform: "scale(0.9)" },
			"100%": { opacity: "1", transform: "scale(1)" },
		  },
		  "slide-in-left": {
			"0%": { opacity: "0", transform: "translateX(-20px)" },
			"100%": { opacity: "1", transform: "translateX(0)" },
		  },
		  "pulse-glow": {
			"0%, 100%": { boxShadow: "0 0 20px hsl(250 84% 54% / 0.3)" },
			"50%": { boxShadow: "0 0 40px hsl(250 84% 54% / 0.5)" },
		  },
		  "timeline-draw": {
			"0%": { height: "0%" },
			"100%": { height: "100%" },
		  },
		  "float": {
			"0%, 100%": { transform: "translateY(0px)" },
			"50%": { transform: "translateY(-10px)" },
		  },
		  "float-slow": {
			"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
			"50%": { transform: "translateY(-15px) rotate(5deg)" },
		  },
		  "shimmer": {
			"0%": { backgroundPosition: "-200% 0" },
			"100%": { backgroundPosition: "200% 0" },
		  },
		  "glow-pulse": {
			"0%, 100%": { opacity: "0.4", transform: "scale(1)" },
			"50%": { opacity: "0.8", transform: "scale(1.05)" },
		  },
		  "bounce-soft": {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-5px)" },
		  },
		  "spin-slow": {
			"0%": { transform: "rotate(0deg)" },
			"100%": { transform: "rotate(360deg)" },
		  },
		  "ripple": {
			"0%": { transform: "scale(1)", opacity: "1" },
			"100%": { transform: "scale(1.5)", opacity: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		  "fade-up": "fade-up 0.6s ease-out forwards",
		  "fade-in": "fade-in 0.5s ease-out forwards",
		  "scale-in": "scale-in 0.5s ease-out forwards",
		  "slide-in-left": "slide-in-left 0.5s ease-out forwards",
		  "pulse-glow": "pulse-glow 2s ease-in-out infinite",
		  "timeline-draw": "timeline-draw 1s ease-out forwards",
		  "float": "float 3s ease-in-out infinite",
		  "float-slow": "float-slow 4s ease-in-out infinite",
		  "shimmer": "shimmer 2s linear infinite",
		  "glow-pulse": "glow-pulse 2s ease-in-out infinite",
		  "bounce-soft": "bounce-soft 2s ease-in-out infinite",
		  "spin-slow": "spin-slow 8s linear infinite",
		  "ripple": "ripple 1s ease-out infinite",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }