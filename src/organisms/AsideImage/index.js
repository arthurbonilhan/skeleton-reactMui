import * as Styled from './style'

const AsideImage = ({ imageUrl, alt }) => (
  <Styled.Aside>
    <Styled.AsideSection>{imageUrl && <Styled.AsideCardImage src={imageUrl} alt={alt} />}</Styled.AsideSection>
  </Styled.Aside>
)

export default AsideImage
