import React, { ReactNode } from "react";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import BigBar from "./BigBar";
import DropDown from "./DropDown";
import useWindowDimensions from "./hooks/useWindowDimensions";

import mobile from "../styles/Mobile.module.scss";

function Layout({ children }: React.PropsWithChildren) {
  const { height, width } = useWindowDimensions();
  if (width! > 768) {
    return (
      <>
        <Head>
          <meta
            name="description"
            content="One of Thailand's top producers of steel and grating
            goods is T-Rex Steel. In terms of steel and grating product design
            and advancement, we are a leader. We are created to stringent
            specifications using the most recent methods for fabricating and
            designing high tensile structures. with more than 20 years of
            expertise producing a variety of items"
          />
          <meta
            property="og:image"
            content="https://thumbs2.imgbox.com/ef/01/qOBxIgMg_t.jpg"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BigBar />
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <DropDown>
          <DropDownMenu />
        </DropDown>
        <main>{children}</main>
      </>
    );
  }
}

interface DropDown {
  link: string;
  children: ReactNode;
}

// https://www.youtube.com/watch?v=IF6k0uZuypA
function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  function DropDownItem(props: DropDown) {
    return (
      <div className="menu-item">
        <Link href={props.link}>
          <a className=".link-text">{props.children}</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <DropDownItem link="/">Home</DropDownItem>
      <DropDownItem link="/about">About</DropDownItem>
      <DropDownItem link="/clients">Clients</DropDownItem>
      <DropDownItem link="/certificates">Certificates</DropDownItem>
    </div>
  );
}

export default Layout;
