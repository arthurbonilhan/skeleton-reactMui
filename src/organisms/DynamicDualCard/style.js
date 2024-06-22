import styled from 'styled-components'

const DualCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #18181b;
`

const DualCardItem = styled.div`
  padding: 3rem;
  width: 50%;
`
const DualCardItemImage = styled.div`
  padding: 3rem;
`

const DualCardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 15px;
  color: #d8d8d8;
`

const DualCardSubTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 25px;
  color: #d8d8d8;
`

const DualCardText = styled.p`
  margin-bottom: 15px;
  color: #fff;
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
