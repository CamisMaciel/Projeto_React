import styles from './footer.module.css';
import '@fortawesome/fontawesome-free/css/all.css';
function Footer() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.containerRodape}>
        <p className={styles.textoRodape}>
          Feito por Camis Maciel
        </p>
        <ul className={styles.listaRodape}>
          <li className={styles.itemRodape}>
            <i className="fa-solid fa-envelope" style={{ color: '#f41515', marginRight: '5px' }}></i>
            <a href="mailto:camismaciel.ux@gmail.com" target="_blank">camismaciel.ux@gmail.com</a>
          </li>
          <li className={styles.itemRodape}>
            <i className="fa-brands fa-linkedin" style={{ color: '#2283bf', marginRight: '5px' }}></i>
            <a href="/https://www.linkedin.com/in/camilamaciel1507//" target="_blank">Linkedin</a>
          </li>
          <li className={styles.itemRodape}>
            <i className="fa-brands fa-github" style={{ color: '#030303', marginRight: '5px' }}></i>
            <a href="https://github.com/CamisMaciel" target="_blank">CamisMaciel</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;