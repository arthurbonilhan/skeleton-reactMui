import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import theme from './designTokens'

export default function ThemeProvider({ children }) {
  return (
    <>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
