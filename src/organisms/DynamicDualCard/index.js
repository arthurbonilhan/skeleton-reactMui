import * as Styled from './style'

const DynamicDualCard = ({ title, subTitle, text, imageUrl }) => {
  return (
    <Styled.DualCardContainer>
      <Styled.DualCardItem>
        <Styled.DualCardTitle>{title}</Styled.DualCardTitle>
        <Styled.DualCardSubTitle>{subTitle}</Styled.DualCardSubTitle>
        <Styled.DualCardText>{text}</Styled.DualCardText>
      </Styled.DualCardItem>
      <Styled.DualCardItemImage>
        {imageUrl && <Styled.DualCardImage src={imageUrl} alt="Image" />}
      </Styled.DualCardItemImage>
    </Styled.DualCardContainer>
  )
}

export default DynamicDualCard
