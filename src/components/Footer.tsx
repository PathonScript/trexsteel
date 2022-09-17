import React from "react";

import styles from "../styles/Home.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h4>449/183 Soi Suwinthawong 11, Suwinthawong Rd.</h4>
          <h4>Sansab, Minburi , Bangkok 10510 Thailand</h4>
        </div>
      </div>
      <div>
        <div>
          <p>Tel. : +66(0)2989-4663-4 </p>
          <p>Mobile : +66(0)95254-9720 (Mr.Nutthawut)</p>
          <p>Fax : +66(0)2989-4665</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
