import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

// const Video = styled.video`
//   object-fit: cover;
//   width: 100%;
//   height: 100vh;

//   z-index: -1;
// `

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -2;
  // position: absolute;
  // top: 30px;
  left: 0;
`

const ImageOverlay = styled.div`
  object-fit: cover;
  width: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  // position: absolute;
  // top: 30px;
  left: 0;
`

const Details = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
`
const Title = styled.span`
  color: #000;
  font-size: 30px;
  padding: 15px;
`

const Paragraph = styled.span`
  color: #000;
  font-size: 20px;
  padding: 15px;

`



const HeroSection = () => {
  return (
    <Container>
      {/* <Video src="/videos/video-2.mp4" autoPlay loop muted /> */}
      <Image src="/images/hero-2.jpg" />

      <ImageOverlay>
        <Details>
          <Title>LED SYSTEMS</Title>
          <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error modi sed saepe consequuntur earum, iste ut aperiam ullam nisi quos quod ad quis laudantium quae voluptatem velit aliquid quia.</Paragraph>
        </Details>
      </ImageOverlay>

    </Container>
  )
}

export default HeroSection