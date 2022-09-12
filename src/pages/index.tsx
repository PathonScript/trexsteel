import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trexsteel</title>
        <meta
          name="description"
          content="T-Rex Steel is one of Thailand's leading manufacturer of steel and grating products. We are a leader in the design and improvements of steel and grating products."
        />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/ef/01/qOBxIgMg_t.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            TR
            <span className={styles.fade}>USTED </span>
            EX
            <span className={styles.fade}>PERIENCE</span>
          </h1>
          <p className={styles.description}>
            World-Class Steel, Building, and Manufacturing
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
