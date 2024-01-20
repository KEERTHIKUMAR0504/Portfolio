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
          alt="Front-end Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3><br/>
              <p>
              As an entry-level Frontend Developer, I bring a strong foundation in HTML, CSS, and JavaScript. Eager to contribute to dynamic projects, I'm passionate about creating engaging user experiences. Committed to ongoing learning and collaboration, I'm ready to embark on the exciting journey of building innovative and visually appealing web solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};