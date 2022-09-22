import React, { ReactNode } from "react";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import BigBar from "./BigBar";
import DropDown from "./DropDown";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <BigBar />
      <DropDown>
        <DropDownMenu />
      </DropDown>
      <main>{children}</main>
    </>
  );
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
