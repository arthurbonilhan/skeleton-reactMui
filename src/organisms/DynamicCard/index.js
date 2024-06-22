import { ArrowForward } from '@mui/icons-material'
import * as Styled from './style'

const DynamicCard = ({ icon, title, subTitle, text, buttonText, onClick }) => {
  return (
    <Styled.CardContainer>
      <Styled.CardIcon>{icon}</Styled.CardIcon>
      <Styled.Section>
        <Styled.CardTitle>
          <small>{title}</small> <br />
          {subTitle}
        </Styled.CardTitle>
        <Styled.CardText>{text}</Styled.CardText>
        <Styled.Button variant="contained" endIcon={<ArrowForward />} onClick={onClick}>
          {buttonText}
        </Styled.Button>
      </Styled.Section>
    </Styled.CardContainer>
  )
}

export default DynamicCard
