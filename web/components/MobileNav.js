import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import styled from "styled-components";

import Iframe from "react-iframe";

import { Nav } from "./Nav";
import {Instagram, Facebook, Mail, X, Menu} from 'react-feather'



const BackdropUI = styled.div`
  min-height: calc(100vh - 100px);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center

  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
background: white;

cursor: pointer;

  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const ContainerUI = styled.div`



    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    height: auto;
  
    width: 80%;
`;

const LinkUI = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 1vh 0px;
  display: flex;
  position: relative;
  color: #484349;


  font-size: 48px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;
  &:hover {
    color: #ed2224;
  }

  @media(max-width: 600px){
    font-size: 10vw;
  }
`;



export default function MobileNav({ mobileNavActive, setMobileNavActive, setMenuActive, menuActive, handleMobileMenu }) {



  return (
  
      <BackdropUI style={{display: mobileNavActive ? 'flex' : 'none'}}>

        <ContainerUI>


<LinkUI onClick={() => setMenuActive(true)}>menu</LinkUI>

<LinkUI
  target="_blank"
  href="https://www.skipthedishes.com/le-la-vietnamese-restaurant-centre-st"
  onClick={handleMobileMenu}
 
>
  takeout
</LinkUI>


<Link href="/order"

>
  <LinkUI onClick={handleMobileMenu}>made to order</LinkUI>
</Link>

<Link href="/merch"
>
  <LinkUI onClick={handleMobileMenu}I>merch</LinkUI>
</Link>







        


               
</ContainerUI>






      </BackdropUI>
  
  );
}

