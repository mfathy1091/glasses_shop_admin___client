import React from 'react'
import styled from 'styled-components'
import { Facebook, EmailOutlined, Phone, Room } from '@material-ui/icons'
import { mobile } from "../responsive"
import logo from "../../assets/logo/logo-gray.png"

const Container = styled.div`
  background-color: #222222;
  color: #999;
`

const Top = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${mobile({
  flexDirection: 'column'
})}
`
const Bottom = styled.div`
  
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.div`
  display: flex;
  height: 40px;
  color: inherit;
  text-decoration: none;
  img {
    display: block;
    height: 100%;
    object-fit: contain;
  }
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
  display: 'none'
})}
`

const Title = styled.h3`
  display: inline-block;
  margin-bottom: 30px;
  color: #fff;
  font-weight: 700;
  transition: all ease 0.3s;

  :hover {
    color: #ffd200;
    cursor: pointer;
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const ListItem = styled.li`
  p {
    display: inline-block;
    margin-bottom: 10px;
    transition: all ease 0.3s;
    :hover {
      color: #ffd200;
      cursor: pointer;
    }
  }

`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Payment = styled.img`
  height: 30px;

`
const CopyRgihts = styled.div`
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  border-top: 1px solid #000;
  
`

const Footer = (props, ref) => {
  return (
    <Container ref={ref}>


      <Top>
        <Left>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Products</Title>
          <List>
            <ListItem><p>Home</p></ListItem>
            <ListItem><p>Processors</p></ListItem>
            <ListItem><p>Rental LED Display</p></ListItem>
            <ListItem><p>HD LED Display</p></ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room /> Miami, Alexandria, Egypt
          </ContactItem>
          <ContactItem>
            <Phone /> (+2) 012 2222 2222
          </ContactItem>
          <ContactItem>
            <EmailOutlined /> led.systems@gmail.com
          </ContactItem>
          <Payment src="https://www.pngitem.com/pimgs/m/5-55223_visa-mastercard-logo-png-transparent-png.png" />
        </Right>
      </Top>
      <Bottom>
        <CopyRgihts>
          ?? Copyright Led systems - All Rights Reserved
        </CopyRgihts>
      </Bottom>
    </Container>

  )
}

export default React.forwardRef(Footer);