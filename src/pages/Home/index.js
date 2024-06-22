import React from 'react'
import Carousel from '../../organisms/Carousel'
import DynamicCard from '../../organisms/DynamicCard'
import { PestControlOutlined, ArrowForward } from '@mui/icons-material'
import { Grid } from '@mui/material'
import * as Styled from './style'
import DynamicDualCard from '../../organisms/DynamicDualCard'

const Home = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/5499416/pexels-photo-5499416.jpeg',
      alt: 'Image 1',
    },
    {
      src: 'https://images.pexels.com/photos/4099470/pexels-photo-4099470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 2',
    },
    {
      src: 'https://images.pexels.com/photos/4099466/pexels-photo-4099466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image 3',
    },
  ]

  const cardData = [
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 1')
      },
    },
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 2')
      },
    },
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title1: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 3')
      },
    },
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 1')
      },
    },
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 2')
      },
    },
    {
      icon: <PestControlOutlined sx={{ fontSize: 40 }} alt="icon" />,
      title1: 'Lorem ipsum',
      subTitle: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Lorem ipsum',
      onClick: () => {
        // Handle button click event
        console.log('Button clicked for card 3')
      },
    },
  ]

  return (
    <div>
      <Carousel images={images} width="100%" height="500px" autoPlayInterval={2000} />
      <Styled.Container>
        <Styled.BoxText>
          <Styled.Text variant="body1">Conheça nossos serviços</Styled.Text>
          <Styled.Title variant="h1">DEDETIZAÇÃO DE QUALIDADE</Styled.Title>
        </Styled.BoxText>

        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DynamicCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Styled.Container>
      <Grid container>
        <Grid item xs={12}>
          <DynamicDualCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
            imageUrl="https://dedetizadoradetect.com.br/img/imgmarketing.png"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Styled.Aside>
            <Styled.Section>
              <Styled.SectionTitle>Lorem ipsum</Styled.SectionTitle>
            </Styled.Section>
            <Styled.Section>
              <Styled.Button size="large" variant="contained" endIcon={<ArrowForward />} onClick={''}>
                Saiba mais
              </Styled.Button>
            </Styled.Section>
          </Styled.Aside>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
