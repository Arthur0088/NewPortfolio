import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Programador frontend</h3>
              <p>
                Olá, meu nome é Arthur Andrade e sou estudante de sistema de informação no 8° período. Tenho interesse em trabalhar como desenvolvedor front-end, pois gosto de criar interfaces web funcionais.
                <strong>Tenho conhecimento em Node.js, JavaScript, CSS, HTML, SQL, MySQL e React</strong>.Estou sempre buscando me atualizar sobre as melhores práticas e aprender novas tecnologias na área de desenvolvimento web.<strong> Sou dedicado, proativo e tenho facilidade em trabalhar em equipe, buscando sempre contribuir para o sucesso do projeto.
                </strong>Gostaria de ter a oportunidade de fazer parte de uma equipe,e acredito que eu possa somar com as minhas habilidades e aprender com os profissionais experientes da empresa.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};