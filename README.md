# Projeto-de-desenvolvimento-web1
📚 Catálogo de Livros — SPA com React

Projeto da prova prática de Laboratório de Desenvolvimento Web (Prof.ª M.ª Suzana Sousa).

Aplicação web no modelo SPA (Single Page Application) feita com React, que apresenta um pequeno catálogo de clássicos da literatura brasileira. A navegação entre as páginas acontece sem recarregar o navegador.

Tecnologias
React
React Router DOM (rotas SPA)
CSS Modules (estilos isolados por componente)
Create React App
Como executar

Pré-requisito: ter o Node.js instalado.

bash
# 1. instalar as dependências
npm install

# 2. iniciar o projeto
npm start

A aplicação abre em http://localhost:3000.

Páginas
Rota	Página	Descrição
/	Home	Boas-vindas e link para o catálogo
/sobre	Sobre	Informações sobre o projeto
/catalogo	Catálogo	Lista de livros em cards
/contato	Contato	Dados de contato
Estrutura de pastas
src/
├── assets/            # Imagens locais (capas dos livros)
├── components/
│   ├── Navbar/        # Menu de navegação (fixo em todas as páginas)
│   ├── Rodape/        # Rodapé (fixo em todas as páginas)
│   └── CardLivro/     # Card reutilizável que recebe dados por props
├── pages/
│   ├── Home/
│   ├── Sobre/
│   ├── Catalogo/
│   └── Contato/
├── App.js             # Configuração das rotas
├── index.js           # Ponto de entrada
└── index.css          # Estilos globais
Requisitos da prova atendidos

Estrutura, SPA e React Router

Projeto criado com create-react-app e .gitignore ignorando node_modules.
Pastas components e pages dentro de src/, com export default.
Rotas configuradas com BrowserRouter, Routes e Route.
Página Home + 3 páginas internas (Sobre, Catalogo, Contato).
Navbar e Rodape exibidos em todas as páginas.

Componentização e Props

O componente CardLivro recebe os dados do componente pai (Catalogo) por props, lidas com desestruturação.
Ele é usado 4 vezes, com dados diferentes.
Cada card exibe uma imagem importada localmente (import capa from '...'), além de título, autor, categoria, descrição e lista de temas.

CSS Modules

index.css contém apenas regras globais (reset, fonte e cor de fundo).
Cada componente e página tem seu arquivo .module.css, aplicado com className={styles.nome}.
Autor

Nome do(a) aluno(a): Pedro Passos Ferreira
