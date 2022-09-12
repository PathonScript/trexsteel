import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
