import React from 'react'
import { Grid } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import * as Styled from './style'

const HalfTextHalfImageSection = ({ title, text, textButton, imageUrl }) => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: 'center', p: 2 }}
      >
        <Styled.Section>
          <h4>SUA LOGO</h4>
          {/* <img src="/imgs/bonilhaLogo.png" alt="Logo" style={{ height: '100px' }} /> */}
          <Styled.CardTitle>{title}</Styled.CardTitle>
          <Styled.CardText>{text}</Styled.CardText>
          <Styled.Button variant="contained" endIcon={<ArrowForward />}>
            {textButton}
          </Styled.Button>
        </Styled.Section>
      </Grid>
      <Grid item xs={12} md={6}>
        <Styled.Box
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
    </Grid>
  )
}

export default HalfTextHalfImageSection
