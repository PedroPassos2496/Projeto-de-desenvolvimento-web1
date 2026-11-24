import CardLivro from '../../components/CardLivro/CardLivro';
import capa1 from '../../assets/livro1.svg';
import capa2 from '../../assets/livro2.svg';
import capa3 from '../../assets/livro3.svg';
import capa4 from '../../assets/livro4.svg';
import styles from './Catalogo.module.css';

function Catalogo() {
  return (
    <main className={styles.pagina}>
      <h2 className={styles.titulo}>Nosso Catálogo</h2>
      <div className={styles.lista}>
        
        <CardLivro
          imagem={capa1}
          titulo="Dom Casmurro"
          autor="Machado de Assis"
          categoria="Romance"
          descricao="Bentinho conta sua história e a dúvida sobre Capitu."
          temas={['Ciúme', 'Memória', 'Sociedade']}
        />
        <CardLivro
          imagem={capa2}
          titulo="O Cortiço"
          autor="Aluísio Azevedo"
          categoria="Naturalismo"
          descricao="A vida em um cortiço no Rio de Janeiro do século XIX."
          temas={['Moradia', 'Ambição', 'Desigualdade']}
        />
        <CardLivro
          imagem={capa3}
          titulo="Capitães da Areia"
          autor="Jorge Amado"
          categoria="Romance"
          descricao="A trajetória de meninos de rua em Salvador."
          temas={['Infância', 'Amizade', 'Justiça social']}
        />
        <CardLivro
          imagem={capa4}
          titulo="Memórias Póstumas de Brás Cubas"
          autor="Machado de Assis"
          categoria="Realismo"
          descricao="Um defunto autor narra sua vida com ironia."
          temas={['Ironia', 'Morte', 'Vaidade']}
        />
      </div>
    </main>
  );
}

export default Catalogo;
