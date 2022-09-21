import React from "react";
import Head from "next/head";

import styles from "../styles/About.module.scss";

function About() {
  return (
    <>
      <Head>
        <title>Trexsteel | About</title>
      </Head>

      <main className="fullflex">
        <div className={styles.container}>
          <p className={styles.description}>
            &quot;One of Thailand&apos;s top producers of steel and grating
            goods is T-Rex Steel. In terms of steel and grating product design
            and advancement, we are a leader. We are created to stringent
            specifications using the most recent methods for fabricating and
            designing high tensile structures. with more than 20 years of
            expertise producing a variety of items &quot;
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.description}>
            We offer internations class for
          </div>
          <div>
            <ul className={styles.dolist}>
              <li>
                Building Structure (Building for manufacturing plant , office ,
                factory)
              </li>
              <li>Build Up, Weld beam (Fabrication Beam)</li>
              <li>
                Machine part Structure (Machine Part , Conveyors and Bulk
                material Handling Equipments)
              </li>
              <li>Automotive Structure (Chassis , Trailer , Spare part)</li>
              <li>Grating (Standard , Handmade)</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
