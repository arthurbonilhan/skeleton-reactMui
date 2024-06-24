import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'
import theme from '../../theme/designTokens'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.primary.balckLight,
        color: theme.palette.primary.light,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1">Lorem Ipsum is simply</Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {/* {'© '} */}
          <Link color="#fff" href="https://meusite.com/">
            Site desenvolvido por Arthur Bonilha
          </Link>{' '}
          {/* {new Date().getFullYear()}
          {'.'} */}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
