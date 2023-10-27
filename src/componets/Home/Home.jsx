

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, Eu sou Arthur</h1>
        <p className={styles.description}>
          Sou Desenvolverdor Front-end.
        </p>
        <a href="mailto:arthurandradegoncavles97@gmail.com" className={styles.contactBtn}>
          Entre em Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/h.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
};