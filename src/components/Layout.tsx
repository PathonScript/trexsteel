import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
