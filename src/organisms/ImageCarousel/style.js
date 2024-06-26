import styled from 'styled-components'
import theme from '../../theme/designTokens'
import Slider from 'react-slick'

const Aside = styled.div`
  background-color: ${theme.palette.primary.balckLight};
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`

const AsideSection = styled.div`
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem;
  }
`
const AsideCardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
`

const SliderContainer = styled(Slider)`
  background-color: ${theme.palette.primary.balckLight};
  padding: 20px; /* Adicione padding se necessário */
`

export { Aside, AsideCardImage, AsideSection, SliderContainer }
