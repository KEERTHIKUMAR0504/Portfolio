import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keerthikumar</h1>
        <p className={styles.description}>
        Passionate and Innovative Frontend Developer | Crafting Engaging User Experiences | Entry-Level Developer with a Strong Foundation in HTML, CSS, and JavaScript.
        </p>
        <a href="mailto:tskeerthikumar0504@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("profile/profileImage.png")}
        alt="Profile image of me"
        className={styles.profileImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};