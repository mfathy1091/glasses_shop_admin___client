import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: #cabdbd;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`
  
const Announcement = () => {
  return (
    <Container>
      Free delivery on orders above 500 LE
    </Container>
  )
}

export default Announcement