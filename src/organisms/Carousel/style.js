import styled from 'styled-components'

const CarouselContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    height: 100%;
  }
`

const CarouselInner = styled.div`
  display: flex;
  transform: translateX(${(props) => `-${props.activeImage * 100}%`});
  transition: transform 0.5s ease-in-out;
`

const CarouselItem = styled.div`
  flex: 0 0 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const CarouselItemImage = styled.img`
  width: 100%;
  height: auto;
`

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #007bff;
  }
`

export { CarouselContainer, CarouselInner, CarouselItem, CarouselItemImage, DotsContainer, Dot }
