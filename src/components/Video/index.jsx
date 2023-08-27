import React from 'react'
import styled from 'styled-components'

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
`
const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`

export default function Video() {
  return (
    <VideoContainer>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/irZZkLW1Ygk?si=puZhjVADxUH2vy-_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Info>
        <h4>Titulo</h4>
        <p className="text">dnewiodn</p>
        <span>lorem</span>
      </Info>
    </VideoContainer>
  )
}
