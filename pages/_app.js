import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    * {
  margin: 0;
}
  body {
    margin: 0;
    padding: 0;
    //New Styles 
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    //deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText}
  }
  html, body {
    min-height: 100vh;
  }
  #__next{
    flex: 1;
    display: flex;
    flex-direction: column
  }
  a {
  color: inherit;
  text-decoration: none;
}
`;

const theme = db.theme;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
