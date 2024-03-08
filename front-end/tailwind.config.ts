import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'shark': {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#d0d0d1',
          '300': '#aeaeb2',
          '400': '#86878a',
          '500': '#6b6c6f',
          '600': '#5b5b5f',
          '700': '#4e4f50',
          '800': '#444546',
          '900': '#3c3c3d',
          '950': '#1e1e1f',
        },
        'forest-green': {
          '50': '#f4faf3',
          '100': '#e4f5e3',
          '200': '#c7ebc7',
          '300': '#9cd99c',
          '400': '#6abf69',
          '500': '#44a344',
          '600': '#338533',
          '700': '#2b6a2c',
          '800': '#265527',
          '900': '#214622',
          '950': '#0e250f',
        },  
      },
    },
  },
  plugins: [nextui()]

};
export default config;
