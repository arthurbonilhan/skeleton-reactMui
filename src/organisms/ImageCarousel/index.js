import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as Styled from './style'
import AsideImage from '../AsideImage'

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Styled.SliderContainer {...settings}>
      {images.map((img, index) => (
        <Styled.Aside key={index}>
          <AsideImage imageUrl={img.imageUrl} alt={img.alt} />
        </Styled.Aside>
      ))}
    </Styled.SliderContainer>
  )
}

export default ImageCarousel
