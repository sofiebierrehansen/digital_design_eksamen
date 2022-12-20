/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx,xml}"],
  theme: {
    colors: {
      "pink-100": "#FDE6F1",
      "pink-200": "#F9BEDA",
      "pink-300": "#F59AC5",
      "pink-400": "#F279B2",
      "pink-500": "#EF589F",
      "pink-600": "#EC3A8E",
      "pink-700": "#E91F7F",
      "pink-800": "#D81572",
      "green-100": "#B3E9E7",
      "green-200": "#10FBE4",
      "green-300": "#04EFD8",
      "green-400": "#04D9C4",
      "green-500": "#04C3B0",
      "green-600": "#04B09E",
      "green-700": "#049E8E",
      "green-800": "#048E80",
      "yellow-100": "#FFDC85",
      "yellow-200": "#FFD262",
      "yellow-300": "#FFC942",
      "yellow-400": "#FFC125",
      "yellow-500": "#FFB90A",
      "orange-100": "#FEE3D8",
      "orange-200": "#FCC6AF",
      "orange-300": "#FBAC89",
      "orange-400": "#FA9467",
      "orange-500": "#F97C45",
      "orange-600": "#F86626",
      "orange-700": "#F7520A",
      "orange-800": "#E04907",
      "stone-100": "#FAFAFA",
      "stone-200": "#E4E3E3",
      "stone-300": "#D0CECE",
      "stone-400": "#BEBBBB",
      "stone-500": "#ADAAAA",
      "stone-600": "#9C9999",
      "stone-700": "#8D8989",
      "stone-800": "#726F6F",
      "stone-900": "#353535",
      "blue-500":"#419CDA",
      "blue-600":"#1B79B9",
      "grey-300":"#CCCCCC",

    },
    fontFamily: {
      luckiestguy: "'Luckiest Guy', cursive",
      montserrat: "'Montserrat', sans-serif",
      praise: "'Praise', cursive"
    },
    fontSize:{ 
      display:"6.25rem",
      text5xl: "4rem",
      text4xl:"3.063rem",
      text3xl:"2.438rem",
      text2xl:"1.938rem",
      textxl:"1.563rem",
      textlg:"1.25rem",
      textmd:"1.125rem",
      textsm:"1rem",
      textxs:"0.75rem"
    },
    extend: {
      padding:{
        lgPrimaryBtnpy:"10px",
        lgPrimaryBtnpx:"20px",
        mdPrimaryBtnpy:"5px",
        mdPrimaryBtnpx:"15px",
        woltBtnpy:"5px",
        woltBtnpx:"15px",

      },
      margin:{
        spacing2xl:"150px",
        spacingxl:"100px",
        spacinglg:"40px",
        spacingmd:"20px",
        spacingsm:"10px",

      },
      borderRadius:{
        lgPrimaryBtnRadius:"15px",
        mdPrimaryBtnRadius:"10px",
        mdSecondaryBtnRadius:"10px",
        woltBtnRadius: "15px",
        scoopCardRadius:"15px",
        },
        
        cursor:{
          'iscursor':"url(https://api.iconify.design/material-symbols:icecream-outline.svg?color=%23888888) 25 25, pointer",
        },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
