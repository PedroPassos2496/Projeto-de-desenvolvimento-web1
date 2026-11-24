import styles from './Sobre.module.css';

function Sobre() {
  return (
    <main className={styles.pagina}>
      <h2 className={styles.titulo}>Sobre o projeto</h2>
      <p>
        Projeto desenvolvido para a disciplina de Laboratório de Desenvolvimento Web,
        usando React, React Router e CSS Modules.
      </p>
      <p>
        Aqui você encontra um pequeno catálogo de livros, com navegação entre
        páginas sem recarregar o navegador.
      </p>
    </main>
  );
}

export default Sobre;
