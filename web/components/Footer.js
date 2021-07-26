import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "../utils/apiHelpers";
import {Instagram, Facebook} from "react-feather"

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

export const Footer = ({ width }) => {

  return (

      <HeaderUI

      >
        <ContainerUI>

        <ColumnUI>
          <FooterTextUI>
          Lê La <br/> Authentic Vietnamese Cuisine
          </FooterTextUI>
    

                
          <FooterTextUI>
          Bay #4,<br/>
          6624 Centre Street S.E. Calgary,<br/>
          Alberta T2H 0C3<br/>
          </FooterTextUI>

          <FooterTextUI>
          (403)255-5665
          </FooterTextUI>
      
   
          <LineUI/>
          </ColumnUI>

       


          <ColumnUI>
          <FooterTextUI>
          Hours
          </FooterTextUI>
    

                
          <FooterTextUI>
          Monday - Thursday | 11:00 - 19:00<br/>
          Friday - Saturday | 11:00 - 19:00<br/>
          Sunday | 11:30 - 19:00<br/>
          </FooterTextUI>


      
   
          <LineUI/>
          </ColumnUI>

          <ColumnUI>

          <FooterTextUI>
          Follow Us
          </FooterTextUI>
          <FooterTextUI>
          <Instagram style={{margin:'0 25px 0 0'}}/>
          <Facebook/>
          </FooterTextUI>


      
          <FooterTextUI>
          &copy; Lê La Vietnamese
          </FooterTextUI>
      
          <FooterTextUI>
          website by Julian Mayes
          </FooterTextUI>
          </ColumnUI>

        </ContainerUI>
      </HeaderUI>


  );
};
