import styles from './CardLivro.module.css';


function CardLivro({ imagem, titulo, autor, categoria, descricao, temas }) {
  return (
    <div className={styles.card}>
      <img className={styles.imagem} src={imagem} alt={`Capa do livro ${titulo}`} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.autor}>Autor: {autor}</p>
      <p className={styles.categoria}>{categoria}</p>
      <p>{descricao}</p>
      <ul className={styles.temas}>
        {temas.map((tema) => (
          <li key={tema}>{tema}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardLivro;
