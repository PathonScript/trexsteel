import React from "react";
import BigBar from "./BigBar";
import DropDown from "./DropDown";

import useWindowDimensions from "./hooks/useWindowDimensions";

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
        <DropDown>Hello World</DropDown>
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
