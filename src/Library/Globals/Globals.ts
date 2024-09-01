"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-style: normal;
        vertical-align: middle;
        line-height: 1.5;
        font-weight: 400;
        font-family: var(--sans-serif-font), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
        scroll-behavior: smooth;
    }

    body {
        min-width: 320px;
    }

    main, article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }


    a {
        text-decoration: none;
        display: inline-block;
    }


    body {
        height: 100%;
        min-width: 320px
    }
    main{
      width:100% ;
      margin: auto;
    }
@media only screen and (max-width: 768px) {
    main{
      width:97%;
      margin: auto;
    }
}
    ol, ul, li {
        list-style: none;
    }


    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    [hidden] {
        display: none;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    ::-webkit-scrollbar {
        width: 8px;
    }


    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 4px grey;
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb {
        background: lightgray;
        border-radius: 10px;
    }


    ::-webkit-scrollbar-thumb:hover {
        background: gray;
    }


    input[type=number] {
        -moz-appearance: textfield;
    }


    svg {
        transition: all 0.3s ease-in-out;
    }


    .displayNone {
        display: none;
        transition: all 0.3s ease-in-out;
    }


    .rotate {
        transform: rotate(180deg);
        transition: all 0.3s ease-in-out;
    }

    .positionRelative {
        position: relative;
    }


    :root {


        //Secondary colors

        --secondary--color-1: #ffa794;
        --secondary--color-2: #fff2e6;
        --secondary--color-3: #f3eefb;


        //Neutral colors

        --neutral--600: #626270;
        --neutral--800: #090717;
        --neutral--300: #ececec;
        --neutral--200: #f8f8f9;
        --neutral--100: white;
        --neutral--700: #191a2f;
        --neutral--500: #8d8d9b;
        --neutral--400: #d0d0db;


        //system color 

        //blue
        --system--blue-400: #086cd9;
        --system--blue-300: #1d88fe;
        --system--blue-200: #8fc3ff;
        --system--blue-100: #eaf4ff;

        //green
        --system--green-400: #11845b;
        --system--green-300: #05c168;
        --system--green-200: #7fdca4;
        --system--green-100: #def2e6;

        //red
        --system--red-400: #dc2b2b;
        --system--300: #ff5a65;
        --system--red-200: #ffbec2;
        --system--red-100: #ffeff0;

        //orange
        --system--orange-400: #d5691b;
        --system--orange-300: #ff9e2c;
        --system--orange-200: #ffd19b;
        --system--orange-100: #fff3e4;


        //shadow 

        --general--shadow-01: rgba(63, 63, 63, .06);
        --general--shadow-02: rgba(63, 63, 63, .04);
        --general--shadow-03: rgba(63, 63, 63, .1);
        --general--shadow-04: rgba(63, 63, 63, .14);
        --general--shadow-05: rgba(63, 63, 63, .16);
        --general--shadow-06: rgba(63, 63, 63, .24);


        --accent--primary-1: #B89C6C;


        --transparent: transparent;


        --button-shadow--color-01: rgba(143, 92, 219, .06);
        --button-shadow--color-2: rgba(143, 92, 219, .08);
        --button-shadow--color-03: rgba(143, 92, 219, .12);
        --button-shadow--white-01: rgba(20, 20, 43, .04);
        --button-shadow--white-02: rgba(20, 20, 43, .06);
        --button-shadow--white-03: rgba(20, 20, 43, .1);

        --brix: #523df3;
        --secondary--color-4: #2d68ff;
        --secondary--color-5: #fdb52a;
    }
`;

export const lightTheme = {};
export const darkTheme = {};
