import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
const appTheme = {
  color: {
    white: '#FFF',
    bigStone: '#323C46',
    solitude: '#DAE1E7',
    zumthor: '#f0f1f2',
    wildStrawberry: '#FF4081',
    mountainMeadow: '#22D486',
    linkWater: '#D9DCE1',
    mischka: '#A9AEB4',
    greyChateau: '#949ea8',
    appBg: '#F9F9FB',
    author: '#7D7878',
    download: '#98BEE7',
  },
  radius: {
    basic: '0.4rem',
  },
  shadow: {
    basic: '0 0.3rem 1rem 0.2rem rgba(0, 0, 0, 0.15)',
    card: '0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.11)',
  },
  fontSize: {
    xSmall: '0.6rem',
    small: '1rem',
    normal: '1.2rem',
    medium: '1.4rem',
    large: '1.8rem',
    xLarge: '2rem',
    xxLarge: '2.4rem',
  },
  font: {
    light: '"Roboto Condensed Light", sans-serif',
    regular: '"Roboto Condensed", sans-serif',
    medium: '"Roboto Condensed SemiBold", sans-serif',
    bold: '"Roboto Condensed Bold", sans-serif',
  },
  lineHeight: {
    basic: '2rem',
    large: '4.4rem',
  },
}

export const muiTheme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
})

responsiveFontSizes(muiTheme)

export default appTheme
