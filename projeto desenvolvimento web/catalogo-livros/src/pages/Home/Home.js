import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.pagina}>
      <h2 className={styles.titulo}>Bem-vindo ao Catálogo de Livros</h2>
      <p>
        
      </p>
      <Link className={styles.botao} to="/catalogo">Ver catálogo</Link>
    </main>
  );
}

export default Home;
