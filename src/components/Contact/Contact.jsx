import React from "react";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <br/><h2>Contact</h2><br/>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail size={40}/>
          <a href="mailto:tskeerthikumar0504@gmail.com">tskeerthikumar0504@gmail.com</a>
        </li>
        <li className={styles.link}>
          <MdPhone size={40}/>
          <a href="tel:+919360256033">+91 9360256033</a>
        </li>
      </ul>
    </footer>
  );
};