Projeto criado com template padrão do React.<br>

Para rodar o projeto localmente basta clonar, entrar na pasta do projeto, executar <code>npm install</code> e após isso <code>npm start</code>

## Scripts

### `npm start`

Roda a aplicação em modo de desenvolvimento, mas ainda é necessário um 'npm install' antes de ser executada pela primeira vez.<br />
Abra [http://localhost:3000](http://localhost:3000) no browser.

### `npm run build`

Builda o app para deploy.<br />

## Rotas

### Home ( host/ )

Tela inicial com um text field para busca de algum user no GitHub.

### Search ( host/search/:username )

Tela mostrada após digitado um nome de usuário correto ou incorreto, com um card se o user for acahado ou uma mensagem de erro caso não seja achado, ao clicar no card é redirecionado para a próxima rota


### User ( host/user/:username )

Tela mostrada após clicado no card do usuário, contendo algumas infos sobre(seguidores, seguindo, data de entrada, gists, repos mais famosos) e um botão para visualizar todos os repositórios.

### User Repositories ( host/user/:username/repos )

Tela mostrada após clicado no botão de "Ver todos os repositorios do usuario" contendo algumas informações sobre o usuário e a listagem de todos os repositórios ordenados de forma decrescente pela quantidade de estrelas.

## Estrutura do projeto
*   api 
    *   index - cria arquivo que cria a instancia do axios
    *   services - chamadas a api do GitHub que são utilizadas nos components e pages
*   assets - guarda todas imagens, icones, fontes usados no projeto
*   components - guarda todos os componentes reusáveis ou componentes muito complexos e grandes usados pelas pages
*   pages - as páginas principais da aplicação, construída com ajuda dos components
*   routes - arquivo com as rotas da aplicação, redirecionando e renderizando os componentes de acordo com a rota
*   utils - arquivo com utilitários/utilidades muito utilizadas

## Telas e Componentes
<p>Na maioria das telas e alguns componentes customs utilizei dos componentes providos pelo <a href="https://material-ui.com/pt/"> Material UI </a> do Google, como grids para responsividade, botões, cores , dentre outros, pois ela é uma lib muito conceituada no React.
</p>

## Lint
<p>Código padronizado utilizando o <a href="https://prettier.io/docs/en/configuration.html"> Prettier </a> 
</p>
<p>e utilizando o <a href="https://eslint.org/"> ESLint </a>  com as  <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">configs do Airbnb</a> 
</p>

## Créditos dos ícones
<div>
    Icons made by 
    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    <a href="https://www.flaticon.com/authors/vitaly-gorbachev" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
</div>

## To do
Migrar o projeto aos poucos TypeScript para um melhor desenvolvimento, evitando erros de tipagem e compilação
