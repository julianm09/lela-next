import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import styled from "styled-components";

import Iframe from "react-iframe";

import { Nav } from "../components/Nav";

const ContainerOne = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
`;

const RowUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  width: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  width: 50%;

  @media (max-width: 1500px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;

const BackgroundOne = styled.img`
  position: absolute;
  width: 50%;

  z-index: -100;
  transition: 0.5s ease;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BackgroundTwo = styled.img`
  position: absolute;
  width: 49%;

  transform: translateY(-23vw) translateX(-5px);
  z-index: -100;
  transition: 0.5s ease;
  opacity: 5%;

  @media (max-width: 900px) {
    width: 98%;
    
    transform: translateY(-45vw) translateX(-5px);
  }
`;

const ImageAbout = styled.img`
  position: absolute;
  width: 18%;
  transform: translateY(75vh) translateX(-35vw);
  z-index: -50;
  transition: 0.5s ease;
  display: none;
  @media (max-width: 700px) {

    font-size: 18px;

    width: 80%;
    opacity: 50%;
    transform: translateY(800px) translateX(30vw);
    display: none;
  }

`;

const ImageOne = styled.img`
  position: absolute;
  width: 28%;
  transform: translateY(130vh) translateX(25vw);
  z-index: -50;
  transition: 0.5s ease;

  @media (max-width: 700px) {
    width: 100%;
    opacity: 50%;
    transform: translateY(800px) translateX(15vw);
  
  }

`;

const ImageTwo = styled.img`
  position: absolute;
  width: 28%;
  transform: translateY(145vh) translateX(-25vw);
  z-index: -100;
  transition: 0.5s ease;
  opacity: 100%;

  @media (max-width: 700px) {
    width: 100%;
    transform: translateY(1300px) translateX(25vw);
    opacity: 50%;
  
  }


`;

const TitleUI = styled.h1`
  font-size: 156px;
  font-weight: 900;
margin: 0;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;

  
  @media (max-width: 900px) {
    font-size: 30vw;
  
  }

`;

const SubTitleUI = styled.h2`
  font-size: 28px;
  font-weight: 900;


    width: 90%;
    font-size: 36px;
  

    @media (max-width: 900px) {
      font-size: 5vw;
    
    }
`;

const HeaderUI = styled.h3`
  font-size: 56px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;


`;

const AboutHeaderUI = styled.h3`
  font-size: 56px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;
  @media (max-width: 1500px) {
    width: 60%;

  }

  @media (max-width: 900px) {
    width: 100%;
  
  }
`;

const AboutTextUI = styled.p`
  width: 100%;

  font-size: 18px;
  font-weight: 500;
  line-height: 40px;

  @media (max-width: 1500px) {
    width: 60%;
    font-size: 18px;
  }
  @media (max-width: 900px) {
    width: 100%;
    font-size: 18px;
  }
`;

const TextUI = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  width: 100%;

`;

const LinkUI = styled.div`
  text-decoration: none;
  cursor: pointer;

  display: flex;
  position: relative;

  &:hover{
    color: #ed2224;
  }
 

`;


const HeaderRightUI = styled.h3`
  font-size: 56px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  
  }
`;

const TextRightUI = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  width: 50%;


  @media (max-width: 900px) {
    width: 100%;
  
  }
`;

export default function Home({ posts }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
      <ContainerOne>
        <ColumnUI style={{alignItems: 'flex-start'}}>
        <TitleUI>Lê La</TitleUI>
        <SubTitleUI>Authentic Vietnamese Cuisine</SubTitleUI>
        </ColumnUI>

     

        {/*         <ul>
          {posts.map((p) => (
            <li key={p._id}>
              <Link href={`/posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}

        <BackgroundOne
          style={{ bottom: -scrollPosition / 10 }}
          src="/phohero.jpg"
        ></BackgroundOne>
      </ContainerOne>

      <ContainerOne>
        <BackgroundTwo
          style={{ top: scrollPosition / 10 }}
          src="/logo.svg"
        ></BackgroundTwo>

        <ImageAbout
          style={{ top: scrollPosition / 20 }}
          src="/about.png"
        ></ImageAbout>

        <ImageOne
          style={{ top: scrollPosition / 15 }}
          src="/pho1.jpg"
        ></ImageOne>

        <ImageTwo
          style={{ top: scrollPosition / 5 }}
          src="/pho2.jpg"
        ></ImageTwo>

        <ColumnUI>
          <AboutHeaderUI>Our Story</AboutHeaderUI>
          <AboutTextUI>
            Van Le grew up in the south of Vietnam, in the city of Ho Chi Min.
            Coming from humble beginnings and living through the Vietnam War,
            there was always a constant reminder that he wanted a better life,
            for his family and himself. Moving to Montreal with his wife, he
            tirelessly worked three different jobs to support his growing
            family. However, it was his time in a restaurant that unlocked his
            real passion for cooking. Soon after, his family relocated from
            Montreal to Calgary. Van's dream came true as he opened a restaurant
            with his wife, creating a legacy of love for food by combining their
            last names to form Lê La. Lê La is proud to be apart of the
            community, serving Calgarians authentic and wholesome Vietnamese
            cuisine.
          </AboutTextUI>
        </ColumnUI>

        <ColumnUI>
          <HeaderUI>We're Open</HeaderUI>
          <TextUI>
            Monday - Thursday | 11:00 - 19:00
            <br /> 
            Friday - Saturday  |  11:00 - 19:00
            <br /> 
            Sunday  |  11:30 - 19:00
          </TextUI>
        </ColumnUI>

        <ColumnUI style={{alignItems: 'flex-end'}} >
          <HeaderRightUI>Find Us At</HeaderRightUI>
          <TextRightUI>
            Bay #4,
            <br />
            6624 Centre Street S.E. Calgary, <br />
            Alberta T2H 0C3
            <br />
            <br />
            
            <LinkUI href="tel:4032555665">(403)255-5665</LinkUI>
          </TextRightUI>

        </ColumnUI>

        <ColumnUI>
   
        <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.1371786870677!2d-114.06467528408905!3d50.99513715584795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170f980369ca1%3A0xdcadd8804feeb8ed!2sLe%20La%20Vietnamese%20Restaurant!5e0!3m2!1sen!2sca!4v1627243766700!5m2!1sen!2sca"
            width="100%"
            id="myId"
            className="myClassname"
            height="500px"
            
          />

</ColumnUI>
      </ContainerOne>
    </>
  );
}

export async function getStaticProps({ params }) {
  const posts = await client.fetch(homeQuery);

  return {
    props: {
      posts,
    },
  };
}
