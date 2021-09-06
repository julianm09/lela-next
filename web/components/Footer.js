import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";
import {Instagram, Facebook, Mail} from "react-feather"
import { infoQuery } from "../lib/sanity/infoQuery";

const HeaderUI = styled.div`
  display: flex;

  width: 100%;

  position: relative;


  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: #484349;
  transition: 0.2s ease;
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  margin: 0;
  z-index: 0;
padding: 100px 0;
`;




const ContainerUI = styled.div`
display: flex;


width: 50%;
min-height: 50%;

justify-content: space-between;
align-items:  flex-start;
@media (max-width: 1500px){
  width: 80%;
}

@media (max-width: 1000px){
  flex-direction: column
}

`;
const ColumnUI = styled.div`
display: flex;


flex-direction: column;

height: 50%;

justify-content: center;
align-items:  space-between;

`;

const HeadingUI = styled.div`
font-size: 16px;
display: flex;
margin: 0 0 25px 0;
font-weight: 700;
`;

const FooterTextUI = styled.div`
font-size: 16px;
display: flex;
margin: 0 0 25px 0;
font-weight: 400;
`;


const LineUI = styled.div`
border-bottom: 1px solid white;
display: flex;
margin: 0 0 25px 0;
font-weight: 400;
width: 10%;
`;



const LinkUI = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 0 0 0 50px;
  display: flex;
  position: relative;
  color: #484349;

  &:hover {
    color: #ed2224;
  }
`;

const SocialLinkUI = styled.a`

cursor: pointer;
color: white;


&:hover{
  color: #ED2024;
}
`

export async function getStaticProps({ params }) {
  const info = await client.fetch(infoQuery);


  return {
    props: {
      info,

    },
  };
}

export const Footer = ({ info }) => {

  return (

      <HeaderUI

      >
        <ContainerUI>

        <ColumnUI>
          <HeadingUI>
          Lê La 
          </HeadingUI>

          <FooterTextUI>
          Authentic Vietnamese Cuisine
          </FooterTextUI>
    

                
          <FooterTextUI>
          Bay #4,<br/>
          6624 Centre Street S.E. Calgary,<br/>
          Alberta T2H 0C3<br/>
          </FooterTextUI>

          <a style={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '400', margin: '0 0 25px 0'}} href="tel:403-255-5665">
          (403) 255 - 5665
          </a>
      
   
          <LineUI/>
          </ColumnUI>

       


          <ColumnUI>
          <HeadingUI>
          Hours
          </HeadingUI>
    

                
          <FooterTextUI>
          Monday - Thursday | {info && info[0].weekdayopen} - {info && info[0].weekdayclose}<br/>
          Friday - Saturday | {info && info[0].weekendopen} - {info && info[0].weekendclose}<br/>
          Sunday | {info && info[0].sundayopen} - {info && info[0].sundayclose}<br/>
          </FooterTextUI>


      
   
          <LineUI/>
          </ColumnUI>

          <ColumnUI>

          <FooterTextUI>
          Follow Us
          </FooterTextUI>
          <FooterTextUI>


          <SocialLinkUI target="_blank" href="https://www.instagram.com/pholelavietnamese/?hl=en" style={{ margin: "0 25px 0 0" }}>
  <Instagram size={24}/ >
  </SocialLinkUI>
 
 <SocialLinkUI target="_blank" href="https://www.facebook.com/lelavietnamesee/" style={{ margin: "0 25px 0 0" }}>
 <Facebook size={24}/>
 </SocialLinkUI>

 <SocialLinkUI href="mailto:lelavietnamese@gmail.com" style={{ margin: "0 25px 0 0" }}>
 <Mail size={24}/>
 </SocialLinkUI>
          </FooterTextUI>


      
          <FooterTextUI>
          &copy; Lê La Vietnamese
          </FooterTextUI>
      
          <a style={{textDecoration: 'none', color: 'white', fontSize: '16px', fontWeight: '400'}}target="_blank" href="https://julianmayes.dev/">
          Website by Julian Mayes
          </a>
          </ColumnUI>

        </ContainerUI>
      </HeaderUI>


  );
};
