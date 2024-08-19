<h1>Buscar repositórios</h1>
<p>Essa é um aplicação web que utiliza a API pública do github, para buscar repositórios de um usuário
específico.</p>
<h1>Projeto</h1>
<p>Link para o projeto final: <a href='https://rogerio-lacerda.github.io/buscarRepositorios/' target='_blank'>https://rogerio-lacerda.github.io/buscarRepositorios/</a></p>
<h1>Ferrametas</h1>
<p>React | Vite | JavaScript | Material UI</p>
<h1>Rodando localmente</h1>
<p>Clonar o projeto</p>

```bash
git clone https://github.com/Rogerio-Lacerda/buscarRepositorios.git
```
<p>Mude para pasta do projeto</p>
  
```bash
cd buscarRepositorios
```

<p>Instale as dependências</p>

```bash
npm i
```
<p>Inicie o servidor</p>

```bash
npm run dev
```
<h1>Estrutura do projeto</h1>

```markdown
## Arquivos Principais
```

`App.jsx`

- **Componente Principal**: O `App.js` serve como ponto de entrada da aplicação.
- **Providers**: O `GlobalContextProvider` gerencia estados globais, enquanto o `ThemeProvider` aplica um tema consistente usando `theme`.
- **Componentes**: `BuscaRepositorios` permite buscar repositórios, e `Repositorios` exibe os resultados.
- **Estilo Base**: `CssBaseline` garante uma base de estilo consistente.

`BuscaRepositorios.jsx`

- **Componente de Busca**: Permite ao usuário buscar repositórios no GitHub digitando um nome de usuário.
- **Estado e Contexto**: Utiliza `useState` para gerenciar o nome do usuário e `useContext` para fazer solicitações à API do GitHub via `GlobalContext`.
- **Responsividade**: Adapta o layout usando `useMediaQuery` para ajustar o espaçamento e o tamanho da tipografia conforme o tamanho da tela.
- **Formulário e Submissão**: Inclui um formulário com um input (`InputForm`) e um botão para buscar os repositórios, enviando a solicitação ao GitHub.

`Repositorios.jsx`

- **Componente de Exibição**: Mostra a lista de repositórios do GitHub com base nos dados recebidos do `GlobalContext`.
- **Estado e Contexto**: Utiliza o contexto global para acessar os dados dos repositórios, estado de carregamento (`loading`) e erros (`error`).
- **Responsividade**: Adapta a largura da lista de repositórios e a tipografia conforme o tamanho da tela, usando `useMediaQuery`.
- **Barra de Rolagem Personalizada**: Estiliza a barra de rolagem com cores e tamanhos específicos para uma experiência visual consistente.
- **Componentes de Estado**: Exibe `Loading` enquanto carrega dados e `Error` em caso de erro ou se nenhum repositório for encontrado.

`Repositorio.jsx`

- **Componente de Repositório**: Exibe as informações de um repositório GitHub, incluindo nome, descrição, quantidade de estrelas e um link para acessá-lo.
- **Layout Responsivo**: Ajusta a disposição dos elementos e tamanhos de fonte conforme o tamanho da tela usando `useMediaQuery`.
- **Estilização Personalizada**: Inclui estilos como cor de fundo, espaçamento e bordas arredondadas, usando o tema (`theme`) para garantir consistência visual.
- **Botão de Acesso**: Contém um botão que redireciona o usuário para o repositório no GitHub.
