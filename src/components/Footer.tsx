import Link from "next/link";
import React from "react";

import styles from "../styles/Home.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>Location</h3>
        <div>
          <p>
            <span>Head Office</span> - 449/183 Soi Suwinthawong 11, Suwinthawong
            Rd. Sansab, Minburi , Bangkok 10510 Thailand
          </p>
        </div>
        <div>
          <p>
            <span>Factory</span> - 149/2 Moo 7 Tambol Nong Nae, Panomsarakam.
            Chachoengsao 24120 Thailand
          </p>
        </div>
      </div>
      <div>
        <h3>Email</h3>
        <Link href="mailto:nutthawut.c@trexsteel.com">
          <a>nutthawut.c@trexsteel.com</a>
        </Link>
        <Link href="mailto:bandhit@trexsteel.com">
          <a>bandhit@trexsteel.com</a>
        </Link>
      </div>
      <div>
        <h3>Phone</h3>
        <p>Tel. : +66(0)2989-4663-4 </p>
        <p>Mobile : +66(0)95254-9720 (Mr.Nutthawut)</p>
        <p>Fax : +66(0)2989-4665</p>
      </div>
    </footer>
  );
}

export default Footer;
