import Link from "next/link";
import styles from "../styles/Browser.module.scss";

function BrowserNav() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Certificates</a>
        </Link>
        <Link href="/">
          <a>Contacts</a>
        </Link>
      </div>
    </>
  );
}

export default BrowserNav;
