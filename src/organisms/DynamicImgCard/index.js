import * as Styled from './style'

const DynamicImgCard = ({ title, subTitle, text, imageUrl }) => {
  return (
    <Styled.DualCardContainer>
      <Styled.DualCardItemImage>
        {imageUrl && <Styled.DualCardImage src={imageUrl} alt="Image" />}
      </Styled.DualCardItemImage>
      <Styled.DualCardItem>
        <Styled.DualCardTitle>{title}</Styled.DualCardTitle>
        <Styled.DualCardSubTitle>{subTitle}</Styled.DualCardSubTitle>
        <Styled.DualCardText>{text}</Styled.DualCardText>
      </Styled.DualCardItem>
    </Styled.DualCardContainer>
  )
}

export default DynamicImgCard
