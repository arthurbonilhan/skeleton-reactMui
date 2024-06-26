import { Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import * as Styled from './style'

const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Styled.AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          {/* <img src="https://dedetizadoradetect.com.br/img/logo.png" alt="Logo" style={{ height: '50px' }} /> */}
          SKELETON
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile ? (
            <>
              <Button variant="text" color="inherit" sx={{ marginRight: 1 }} component={Link} to="/">
                Home
              </Button>
              <Button variant="text" color="inherit" sx={{ marginRight: 1 }} component={Link} to="/sobre">
                Sobre
              </Button>
              <Button variant="contained" color="success">
                Contato
              </Button>
            </>
          ) : (
            <Button variant="outlined" color="inherit">
              Menu
            </Button>
          )}
        </div>
      </Toolbar>
    </Styled.AppBar>
  )
}

export default Header
