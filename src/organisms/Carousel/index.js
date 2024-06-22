import React, { useEffect, useState } from 'react'
import * as Styled from './style'

const Carousel = ({ images, isFullScreen, autoPlayInterval = 1000, width = '100%', height = '400px', ...props }) => {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(intervalId)
  }, [images.length, autoPlayInterval])

  return (
    <Styled.CarouselContainer width={width} height={height} {...props}>
      <Styled.CarouselInner activeImage={activeImage}>
        {images.map((image, index) => (
          <Styled.CarouselItem key={image.src} className={index === activeImage ? 'active' : ''}>
            <Styled.CarouselItemImage src={image.src} alt={image.alt} />
          </Styled.CarouselItem>
        ))}
      </Styled.CarouselInner>
      <Styled.DotsContainer>
        {images.map((_, index) => (
          <Styled.Dot
            key={index}
            onClick={() => setActiveImage(index)}
            className={index === activeImage ? 'active' : ''}
          />
        ))}
      </Styled.DotsContainer>
    </Styled.CarouselContainer>
  )
}

export default Carousel
