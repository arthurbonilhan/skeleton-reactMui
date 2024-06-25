import styled from 'styled-components'
import theme from '../../theme/designTokens'

const DualCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.primary.grayLight};
`

const DualCardItem = styled.div`
  padding: 3rem;
  width: 50%;

  @media only screen and (max-width: 600px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`
const DualCardItemImage = styled.div`
  padding: 3rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const DualCardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 0.8rem;
  color: ${theme.palette.primary.main};
  font-weight: 400;
`

const DualCardSubTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 2.2rem;
  color: ${theme.palette.primary.main};
  font-weight: bold;
`

const DualCardText = styled.p`
  margin-bottom: 15px;
  color: ${theme.palette.primary.main};
`

const DualCardImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 15px;
`

export {
  DualCardContainer,
  DualCardImage,
  DualCardSubTitle,
  DualCardText,
  DualCardTitle,
  DualCardItem,
  DualCardItemImage,
}
