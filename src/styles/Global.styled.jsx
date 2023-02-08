import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;

    --green: #33cc95;

    --input-background: #e7e9ee;
    --input-border: #d7d7d7;
    --input-text: #969cb3;

    --input-border-focus: #b3b9ff;
    --input-text-focus: #363f5f;

    --input-border-error: #e52e4d;
    --input-text-error: #e52e4d;

    --input-border-success: #33cc95;
    --input-text-success: #33cc95;

    --input-border-warning: #ff872c;
    --input-text-warning: #ff872c;

    --input-border-info: #5429cc;
    --input-text-info: #5429cc;

    --input-border-dark: #363f5f;
    --input-text-dark: #363f5f;

    --input-border-light: #f0f2f5;
    --input-text-light: #f0f2f5;

    --input-border-white: #ffffff;
    --input-text-white: #ffffff;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .text{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: var(--text-title);
  }
`;
