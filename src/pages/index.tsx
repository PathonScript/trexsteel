import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Footer from "../components/Footer";

import styles from "../styles/Home.module.scss";
import contents from "../styles/Contents.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trexsteel</title>

        <meta
          name="description"
          content="One of Thailand's top producers of steel and grating
            goods is T-Rex Steel. In terms of steel and grating product design
            and advancement, we are a leader. We are created to stringent
            specifications using the most recent methods for fabricating and
            designing high tensile structures. with more than 20 years of
            expertise producing a variety of items"
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

      <article className="fullflex">
        <div className={contents.container}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sint
            quia aliquid nisi quos voluptatibus! Ea mollitia quam exercitationem
            obcaecati at magni cumque doloremque, fuga tempora harum deserunt
            vero ducimus.
          </p>
          <div>
            <Image
              src="https://thumbs2.imgbox.com/9d/8c/NSS0axbh_t.jpg"
              alt="Trexsteel's Example Work"
              width={800}
              height={800}
            />
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
};

export default Home;
