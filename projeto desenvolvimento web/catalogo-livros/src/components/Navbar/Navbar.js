import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>📚 Catálogo de Livros</h1>
      <ul className={styles.menu}>
        <li><Link className={styles.link} to="/">Home</Link></li>
        <li><Link className={styles.link} to="/sobre">Sobre</Link></li>
        <li><Link className={styles.link} to="/catalogo">Catálogo</Link></li>
        <li><Link className={styles.link} to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
