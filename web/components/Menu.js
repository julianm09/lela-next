import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";
import styled from "styled-components";

import Iframe from "react-iframe";

import { Nav } from "../components/Nav";
import { Instagram, Facebook, Mail, X } from "react-feather";

const ContainerUI = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;

  z-index: 10000;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
`;

const BackdropUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  background: black;
  opacity: 80%;
  cursor: pointer;

  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const CloseMenuUI = styled.div`
  position: absolute;
  top: 5%;
  right: 10%;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;

  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

export default function Menu({ setMenuActive, menuActive }) {
  return (
    <ContainerUI style={{ display: menuActive ? "flex" : "none" }}>
      <BackdropUI onClick={() => setMenuActive(false)}></BackdropUI>

      <CloseMenuUI onClick={() => setMenuActive(false)}>Close Menu</CloseMenuUI>

      <Iframe
        url="https://lelavietnamese.gpr.globalpaymentsinc.ca/menu"
        width="80%"
        id="myId"
        className="iframe"
        height="80%"
      />
    </ContainerUI>
  );
}
