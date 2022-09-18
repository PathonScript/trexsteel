import React from "react";
import BigBar from "./BigBar";
import SmallBar from "./SmallBar";

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
        <SmallBar />
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
