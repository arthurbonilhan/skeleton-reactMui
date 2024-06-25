import { ArrowForward } from '@mui/icons-material'
import { Grid } from '@mui/material'
import DynamicDualCard from '../../organisms/DynamicDualCard'
import DynamicImgCard from '../../organisms/DynamicImgCard'
import Carousel from '../../organisms/Carousel'
import DynamicCard from '../../organisms/DynamicCard'
import { cardData, images } from './utils'
import * as Styled from './style'

const Home = () => {
  return (
    <div>
      <Carousel images={images} width="100%" height="500px" autoPlayInterval={5000} />
      <Styled.Container>
        <Styled.BoxText>
          <Styled.Text variant="body1">Lorem ipsum</Styled.Text>
          <Styled.Title variant="h1">Lorem ipsum</Styled.Title>
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
            imageUrl="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-german-sheperd-clipart-german-shepherd-dog-sitting-cartoon-vector-png-image_6866562.png"
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <DynamicImgCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
            imageUrl="https://images.vexels.com/content/200107/preview/side-doberman-dog-illustration-b6e83b.png"
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
