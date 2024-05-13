import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img width={80} height={80} src={getImageUrl("about/location.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Where Do I Live?</h3>
              <p>
                I am a high-school student and I live in Canberra, Australia.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img width={80} height={80} src={getImageUrl("about/football.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Football Experience</h3>
              <p>
I play in the semi-pro (youth) league in Australia (NPL)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img width={80} height={80} src={getImageUrl("about/military.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Army Cadet</h3>
              <p>
I am also an Australian Army Cadet - my current rank is "Cadet Corporal", (I am going on a sergeant promotion course in July)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
