import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.scss";
import contents from "../styles/Contents.module.scss";

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

      <main className="fullflex">
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

      <article className="fullflex">
        <div className={contents.container}>
          <div>
            <Image
              src="https://thumbs2.imgbox.com/df/63/MX4FYZnw_t.jpg"
              alt="Trexsteel's Factory"
              width={800}
              height={800}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sint
            quia aliquid nisi quos voluptatibus! Ea mollitia quam exercitationem
            obcaecati at magni cumque doloremque, fuga tempora harum deserunt
            vero ducimus.
          </p>
        </div>
      </article>
    </>
  );
};

export default Home;
