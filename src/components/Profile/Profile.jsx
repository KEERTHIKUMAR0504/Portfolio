import React from "react";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keerthikumar</h1>
        <p className={styles.description}>
        Passionate and Innovative Full-stack developer.
        </p>
        <div>
        <a href="https://www.linkedin.com/in/keerthikumar-ts" className={styles.contactBtn}>
          <AiOutlineLinkedin/>
        </a>
        <a href="https://github.com/KeerthikumarTS" className={styles.contactBtn}>
          <AiOutlineGithub/>
        </a>
        </div>
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