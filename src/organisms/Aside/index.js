import { Grid } from '@mui/material'
import * as Styled from './style'

const Aside = ({ img, title, text }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Styled.Aside>
          <Styled.AsideSection>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Text>{text}</Styled.Text>
          </Styled.AsideSection>
        </Styled.Aside>
      </Grid>
    </Grid>
  )
}

export default Aside
