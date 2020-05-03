import 'sanitize.css'
import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import 'react-tabs/style/react-tabs.css'
import 'typeface-roboto'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: ${theme.fontSize.normal};
    font-family: ${theme.font.regular};
    font-weight: 100;
    background-color: ${theme.color.white};
    color: ${theme.color.greyChateau};
    line-height: ${theme.lineHeight.basic};
  }

  #root {
    width: 100vw;
    min-width: 32rem;
  }

`

export { GlobalStyle }
