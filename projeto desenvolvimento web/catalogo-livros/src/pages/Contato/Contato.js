import styles from './Contato.module.css';

function Contato() {
  return (
    <main className={styles.pagina}>
      <h2 className={styles.titulo}>Contato</h2>
      <p>Fale com a gente:</p>
      <ul className={styles.lista}>
        <li>E-mail: contato@catalogolivros.com</li>
        <li>Telefone: (91) 93245-2324</li>
        <li>Endereço: Belém, Pará</li>
      </ul>
    </main>
  );
}

export default Contato;
