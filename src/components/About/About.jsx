import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Front-end Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full-stack developer</h3><br/>
              <p>
                Entry-level MERN stack developer proficient in MongoDB, Express.js, React.js, and Node.js.Passionate about creating user-friendly interfaces and mastering back-end systems. Eager to collaborate and grow in the field, committed to delivering impactful digital solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};