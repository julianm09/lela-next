import { useEffect, useState } from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import { Instagram, Facebook, Mail } from "react-feather";
import Menu from "../components/Menu";
import { infoQuery } from "../lib/sanity/infoQuery";
import { client } from "../lib/sanity/client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

/* export async function getStaticProps({ params }) {
  const info = await client.fetch(infoQuery);

  return {
    props: {
      info,
    },
  };
} */

export default function Home({ info, scrollPosition }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <ContainerOne style={{ justifyContent: "flex-start" }}>
        <ColumnUI
          style={{
            alignItems: "flex-start",
            minHeight: "100vh",
            flexDirection: "column",
          }}
        >
          <TitleContainerUI>
            <TitleUI>Lê La</TitleUI>

            <SocialContainerUI>
              <SocialLinkUI
                target="_blank"
                href="https://www.instagram.com/pholelavietnamese/?hl=en"
                style={{ margin: "0 0 25px 0" }}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </SocialLinkUI>

{/*               <SocialLinkUI
                target="_blank"
                href="https://www.facebook.com/lelavietnamesee/"
                style={{ margin: "0 0 25px 0" }}
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </SocialLinkUI> */}

              <SocialLinkUI
                target="_blank"
                href="mailto:lelavietnamese@gmail.com"
                style={{ margin: "0 0 25px 0" }}
                aria-label="Mail"
              >
                <Mail size={24} />
              </SocialLinkUI>
            </SocialContainerUI>
          </TitleContainerUI>

          <SubTitleUI>Authentic Vietnamese Cuisine</SubTitleUI>

          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://lelavietnamese.gpr.globalpaymentsinc.ca/menu"
          >
            <ButtonUI>Order Pickup</ButtonUI>
          </a>
        </ColumnUI>

        <BackgroundOne
          style={{ bottom: -scrollPosition / 10 }}
          src="/phohero.jpg"
          alt="Bowl of pho noodles"
        ></BackgroundOne>
      </ContainerOne>

      <ContainerTwo>
        <BackgroundTwo
          style={{ top: scrollPosition / 10 }}
          src="/logo.svg"
          alt="Le La Logo"
        ></BackgroundTwo>

        <img
          style={{
            transition: "1s ease",
            position: "absolute",
            bottom: "5px",
            left: -1000 + scrollPosition / 5,
          }}
          height="25px"
          src="/pattern.svg"
          alt="Traditional Vietnamese pattern"
        />

        <ColumnUI
          style={{ margin: "100px 0 0 0", flexDirection: "column" }}
          data-aos="fade-right"
        >
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

        <ColumnReverseUI
          style={{
            margin: "100px 0 100px 0",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LeftUI data-aos="fade-right">
            <HeaderUI>We're Open</HeaderUI>
            <TextUI>
              Monday - Thursday | 11:00 - 20:00
              <br />
              Friday - Saturday | 11:00 - 20:00
              <br />
              Sunday | 11:30 - 19:00
            </TextUI>
            {/* <TextUI>
              Monday - Thursday | {info && info[0].weekdayopen} -{" "}
              {info && info[0].weekdayclose}
              <br />
              Friday - Saturday | {info && info[0].weekendopen} -{" "}
              {info && info[0].weekendclose}
              <br />
              Sunday | {info && info[0].sundayopen} -{" "}
              {info && info[0].sundayclose}
            </TextUI> */}
          </LeftUI>

          <ImageOne style={{ top: scrollPosition / 35 }}>
            <img
              width="100%"
              src="/pho1.jpg"
              alt="Bowl of pho noodles and other Vietnamese food"
            />
            <CornerUI
              style={{
                position: "absolute",
                width: "100px",
                top: "-15px",
                right: "-15px",
              }}
              src="/corner-r.svg"
              alt="Traditional Vietnamese pattern"
            />
          </ImageOne>
        </ColumnReverseUI>

        <ColumnUI
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            margin: "0px 0 200px 0",
          }}
        >
          <ImageOne style={{ top: scrollPosition / 30 }}>
            <img
              width="100%"
              src="/pho2.jpg"
              alt="Bowl of pho noodles and other Vietnamese food"
            />

            <CornerUI
              style={{
                position: "absolute",
                width: "100px",
                bottom: "-15px",
                left: "-15px",
              }}
              src="/corner-l.svg"
              alt="Traditional Vietnamese pattern"
            />
          </ImageOne>

          <RightUI data-aos="fade-left">
            <HeaderUI>Find Us At</HeaderUI>
            <TextUI>
              Bay #4,
              <br />
              6624 Centre Street S.E. Calgary, <br />
              Alberta T2H 0C3
              <br />
              <br />
              <LinkUI href="tel:403-255-5665">(403) 255 - 5665</LinkUI>
            </TextUI>
          </RightUI>
        </ColumnUI>

        <ColumnUI style={{ margin: "0 0 200px 0" }}>
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.1371786870677!2d-114.06467528408905!3d50.99513715584795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170f980369ca1%3A0xdcadd8804feeb8ed!2sLe%20La%20Vietnamese%20Restaurant!5e0!3m2!1sen!2sca!4v1627243766700!5m2!1sen!2sca"
            width="99%"
            id="myId"
            className="iframe-map"
            height="500px"
            title="Google Map Location"
          />
        </ColumnUI>
      </ContainerTwo>
    </>
  );
}

const ContainerOne = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0vh 0 0 0;
  @media (max-height: 800px) {
    margin: 10vh 0 0 0;
  }
`;

const ContainerTwo = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  margin: 0vh 0 0 0;
  @media (max-height: 800px) {
    margin: 00vh 0 0 0;
  }
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #484349;
  width: 50%;

  @media (max-width: 1500px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
    text-align: center;
  }
`;

const ColumnReverseUI = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #484349;
  width: 50%;

  @media (max-width: 1500px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    width: 90%;
    text-align: center;
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

const ImageOne = styled.div`
  position: relative;
  width: 50%;
  z-index: -50;
  transition: 0.5s ease;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
  display: flex;
  min-width: 400px;

  @media (max-width: 700px) {
    width: 100%;
    margin: 100px 0;
  }
`;

const ImageTwo = styled.div`
  position: absolute;
  width: 28%;
  transform: translateY(115vh) translateX(-25vw);
  z-index: -100;
  display: flex;
  transition: 0.5s ease;
  opacity: 100%;
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
  min-width: 400px;
  @media (max-width: 700px) {
    width: 100%;
    transform: translateY(125vh) translateX(0vw);
    opacity: 25%;
    box-shadow: none;
  }

  @media (max-height: 500px) {
    transform: translateY(180vh) translateX(0vw);
  }

  @media (max-height: 700px) and (max-width: 400px) {
    transform: translateY(180vh) translateX(0vw);
  }
`;

const TitleUI = styled.h1`
  font-size: 156px;
  font-weight: 900;
  margin: 0;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;

  @media (max-width: 600px) {
    font-size: 30vw;
  }
`;

const SubTitleUI = styled.h2`
  font-size: 28px;
  font-weight: 900;

  width: 90%;
  font-size: 36px;
  color: #484349;
  margin: 0;

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
`;

const AboutTextUI = styled.p`
  width: 100%;

  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  text-align: left;

  @media (max-width: 1500px) {
    width: 100%;
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

const LinkUI = styled.a`
  text-decoration: none;
  cursor: pointer;

  position: relative;
  color: #484349;

  &:hover {
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

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const TextRightUI = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ButtonUI = styled.div`
  padding: 0 50px 0;
  height: 50px;

  border: none;
  border-radius: 50px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 18px;

  cursor: pointer;

  transition: all 150ms linear;
  box-shadow: inset 0 0 0 2em #ed2224;

  border: 2px solid white;
  margin: 10vh 0 0 0;

  &:hover {
    box-shadow: none;
    background: white;
    border: 2px solid #ed2224;

    color: #ed2024;
  }
`;

const TitleContainerUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialContainerUI = styled.div`
  position: relative;
  top: 30px;
  color: #ed2224;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SocialLinkUI = styled.a`
  cursor: pointer;
  color: #ed2024;

  &:hover {
    text-shadow: 4px 4px grey;
  }
`;

const CornerUI = styled.img`
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

const RightUI = styled.div`
  display: flex;

  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const LeftUI = styled.div`
  display: flex;

  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
