import React from 'react'
import { Grid, Box } from '@mui/material'

const DynamicSection = ({ imageUrl, imagePosition, children }) => {
  return (
    <Grid container>
      {imagePosition === 'left' && (
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imageUrl}
            alt="Descrição da imagem"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Grid>
      )}
      <Grid item xs={12} md={6} container justifyContent="center" alignItems="center" sx={{ p: 4 }}>
        {children}
      </Grid>
      {imagePosition === 'right' && (
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imageUrl}
            alt="Descrição da imagem"
            sx={{
              width: '100%',
              height: '600px',
              objectFit: 'cover',
            }}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default DynamicSection
