import { createTheme } from '@mui/material/styles'
import { getRgba } from '../services/polished'

// import { textColors } from './textColors'
// import { backgroundColors } from './backgroundColors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#3E2466',
      light: '#E0E0E0',
      white: '#ffffff',
      warningText: '#FFB547',
      grayLight: '#f3f5f9',
      balckLight: '#18181b',
      grayText: '#d8d8d8',
    },
    secondary: {
      main: '#ff7f00',
      light: '#FFD2B3',
    },
    third: {
      bgLight: '#eaeaea',
    },
    success: {
      main: '#4CAF50',
      light: '#D7F0EF',
    },
    gray: {
      main: '#757575',
      dark: '#9E9E9E',
      medium: getRgba('#000000', 0.26),
      light: '#E0E0E0',
      borderLight: '#E5E5E5',
      bgLight: '#bdbdbd',
      primaryLight: '#e8e8e8',
      secondaryLight: '#f5f5f5',
      grayLight: '#EEEEEE',
      disabled: getRgba('#000000', 0.12),
    },
    dark: {
      main: '#000000',
      medium: getRgba('#000000', 0.54),
      light: getRgba('#000000', 0.6),
    },
    yellow: {
      main: '#FFF1C0',
      warning: '#ED6C02',
      yellow: '#fedb15',
    },
    purple: {
      light: getRgba('#3f51b5', 0.08),
      medium: '#593493',
    },
    red: {
      main: '#E31B0C',
      light: '#F44336',
      lightRgb: getRgba('#F44336', 0.6),
    },
    blue: {
      main: '#2196F3',
    },
    green: {
      main: '#4CAF50',
      greenLight: '#86b15b',
    },
    // ...textColors,
    // ...backgroundColors,
  },
})

export default theme
