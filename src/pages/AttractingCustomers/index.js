import { Grid } from '@mui/material'
import DynamicImgCard from '../../organisms/DynamicImgCard'
import * as Styled from './style'
import HalfTextHalfImageSection from '../../organisms/HalfTextHalfImageSection'
import DynamicSection from '../../organisms/DynamicSection'
import Form from './Form'

const AttractingCustomers = () => {
  return (
    <Styled.Grid container>
      <Grid item xs={12}>
        <HalfTextHalfImageSection
          title="Lorem Ipsum,"
          text="Lorem Ipsum is simply dummy."
          textButton="Saiba mais"
          imageUrl="https://static.wixstatic.com/media/7d91f9_4583c19063f54571b2e5c6f8dbd085ae~mv2.jpg/v1/fill/w_560,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IDC2.jpg"
        />
      </Grid>
      <Grid item xs={12}>
        <Styled.Aside>
          <Styled.AsideSection>
            <Styled.AsideText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Styled.AsideText>
          </Styled.AsideSection>
        </Styled.Aside>
      </Grid>
      <Grid item xs={12}>
        <DynamicImgCard
          title="Lorem ipsum"
          subTitle="Lorem ipsum"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          imageUrl="https://images.vexels.com/content/200107/preview/side-doberman-dog-illustration-b6e83b.png"
        />
      </Grid>
      <Grid item xs={12}>
        <DynamicSection
          imageUrl="https://leouve.com.br/wp-content/uploads/2023/06/63d309c6-0410-4d74-af2f-51b5d6bc5769.jpg"
          imagePosition="right"
        >
          <Form />
        </DynamicSection>
      </Grid>
    </Styled.Grid>
  )
}
export default AttractingCustomers
