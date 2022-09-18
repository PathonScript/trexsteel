import React, { ReactNode } from "react";
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

function DropDownMenu() {
  function DropDownItem(props: DropDown) {
    return (
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    );
  }

  return <DropDownItem link="/">Home</DropDownItem>;
}

export default Layout;
