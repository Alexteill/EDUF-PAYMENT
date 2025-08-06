"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";
import { Navbar } from "@/devlink/Navbar"; // Import the Navbar component
import { Footer } from "@/devlink/Footer"; // Import the Footer component
import { Gallery } from "@/devlink/Gallery"; // Import the Footer component
import { HeroTcf } from "@/devlink/HeroTcf"; // Import the Footer component
import { TcfFaq } from "@/devlink/TcfFaq"; // Import the Footer component
import { TcfImg } from "@/devlink/TcfImg"; // Import the Footer component

export default function Home() {
  return (

      <Block tag="div" className="page-wrapper">
      {/* Add Nav Bar with props*/}
        <Navbar/> 
        <Block tag="div" className="main-wrapper">
          <HeroTcf />
          <TcfImg />
          <TcfFaq />
          <Gallery />
        </Block>
        <Footer /> {/* Add Footer */}
      </Block>
  );
}

