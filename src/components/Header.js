import React, { useState } from 'react';
import styled from 'styled-components'


export default function Header(){

  const [navOpen , setNavOpen] = useState(false);

  return(
    <Container>
      <a href="#">
        <img src='images/logo.svg'></img>
      </a>

      <Menu>
        <a href='#model-s'>Model S</a>
        <a href='#model-y'>Model Y</a>
        <a href='#model-3'>Model 3</a>
        <a href='#model-x'>Model X</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <i onClick={() => setNavOpen(true)} className="bi bi-list" id="burger"></i>
      </RightMenu>

      <Nav show={navOpen}>
        <i onClick={() => setNavOpen(false)} class="bi bi-x-lg" id="x"></i>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadaster</a></li>
      </Nav>
    </Container>
  )
}

const Container = styled.div`
  min-height:60px;
  display:flex;
  position:fixed;
  width:100%;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  flex:1;
  justify-content:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    white-space:nowrap;
  }
  @media (max-width:768px){
    display : none;
  }
`

const RightMenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
    white-space:nowrap;
  }
`

const Nav = styled.div`
  transition:0.2s;
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  @media (max-width: 768px){
    width:100%;
    height:100%;
  }
  background-color:rgba(255,255,255,0.7);
  width:300px;
  z-index:9;
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
  transform : ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  li{
    padding : 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    a{
      font-weight:600;
    }
  }
`