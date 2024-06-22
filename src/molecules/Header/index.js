import React from 'react'
import { AppBar, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material'

const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          <img src="https://dedetizadoradetect.com.br/img/logo.png" alt="Logo" style={{ height: '50px' }} />
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {!isMobile ? (
            <>
              <Button variant="text" color="inherit" sx={{ marginRight: 1 }}>
                Home
              </Button>
              <Button variant="text" color="inherit" sx={{ marginRight: 1 }}>
                Sobre Nós
              </Button>
              <Button variant="text" color="inherit" sx={{ marginRight: 1 }}>
                Serviços
              </Button>
              <Button variant="text" color="inherit">
                Orçamentos
              </Button>
            </>
          ) : (
            <Button variant="outlined" color="inherit">
              Menu
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
