import { Grid } from '@mui/material'
import DynamicImgCard from '../../organisms/DynamicImgCard'
import DynamicSection from '../../organisms/DynamicSection'
import * as Styled from './style'
import ImageCarousel from '../../organisms/ImageCarousel'
import DynamicDualCard from '../../organisms/DynamicDualCard'

export const images = [
  {
    imageUrl: 'https://cbkc.org/application/views/imagens/layout/img-logo_topo.png',
    alt: 'Image 1',
  },
  {
    imageUrl: 'https://cbkc.org/application/views/imagens/layout/img-logo_topo.png',
    alt: 'Image 2',
  },
  {
    imageUrl: 'https://cbkc.org/application/views/imagens/layout/img-logo_topo.png',
    alt: 'Image 3',
  },
  {
    imageUrl: 'https://cbkc.org/application/views/imagens/layout/img-logo_topo.png',
    alt: 'Image 4',
  },
]

const AboutUs = () => {
  return (
    <Styled.Grid container>
      <Grid item xs={12}>
        <DynamicSection imageUrl="https://www.ifrrottweilers.org/media/image/Beatelke2.jpg" imagePosition="left">
          <Styled.Section>
            <Styled.Title>Lorem Ipsum</Styled.Title>
            <Styled.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Styled.Text>
          </Styled.Section>
        </DynamicSection>
      </Grid>

      <Grid item xs={12}>
        <ImageCarousel images={images} />
      </Grid>

      <Grid item xs={12}>
        <DynamicDualCard
          title="Lorem ipsum"
          subTitle="Lorem ipsum"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"
          imageUrl="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-german-sheperd-clipart-german-shepherd-dog-sitting-cartoon-vector-png-image_6866562.png"
        />
      </Grid>
    </Styled.Grid>
  )
}
export default AboutUs
