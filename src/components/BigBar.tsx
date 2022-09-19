import React from "react";
import Link from "next/link";

import styles from "../styles/Nav.module.scss";

function BigBar() {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About us</a>
      </Link>
      <Link href="/clients">
        <a>Clients</a>
      </Link>
      <Link href="/certificates">
        <a>Certificates</a>
      </Link>
    </nav>
  );
}

export default BigBar;
