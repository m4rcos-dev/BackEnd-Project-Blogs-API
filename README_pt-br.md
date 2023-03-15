<h1 align="center">🎉 Boas-vindas ao meu repositório do proejto blogs API </h1>

![swagger documetation blogs api](https://user-images.githubusercontent.com/104791582/225178878-0b5ef381-f88b-4098-8043-a6ec66ea7d32.gif)

![flag tools](https://img.shields.io/badge/Tools-%20Docker%20|%20Node.js-9cf) ![flag tools](https://img.shields.io/badge/Languages-JavaScript-yellow) ![flag tools](https://img.shields.io/badge/Frameworks-Express%20|%20JWT%20|%20Swagger-yelow) ![flag database](https://img.shields.io/badge/Database-MySql-green) ![flag orm](https://img.shields.io/badge/ORM-Sequelize-blue)

### [DEPLOY](https://blogsapi.up.railway.app/swagger)

<p>Projeto desenvolvido durante o módulo de back-end do curso de desenvolvimento web full-stack Trybe.</p>
<p>Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog.</p>
<p>Uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts. Criando endpoints que estão conectados ao banco de dados seguindo os princípios do REST</p>


## 🔨 Recursos do projeto

<ul>
<li>✅EndPoint para login de pessoa usuária, utilizando o método POST.</li>
<li>✅EndPoint para cadastro de pessoas usuárias, utilizando o método POST.</li>
<li>✅EndPoint para listas todos os usuários cadastrados, utilizando o método GET</li>
<li>✅EndPoint para listas pelo id apenas um usuário cadastrado, utilizando o método GET</li>
<li>✅EndPoint para deletar usuário logado, utilizando o método DELETE</li>
<li>✅EndPoint para cadastro de categoria de post, utilizando o método POST.</li>
<li>✅EndPoint para listas todos as categorias de posts cadastradas, utilizando o método GET</li>
<li>✅EndPoint para listas todos os posts cadastradas, utilizando o método GET</li>
<li>✅EndPoint para listas pelo id apenas um post cadastrado, utilizando o método GET</li>
<li>✅EndPoint para listas pela query informado apenas um post cadastrado que corresponda ao title ou content do post, utilizando o método GET</li>
<li>✅EndPoint para cadastro de um novo post, utilizando o método POST.</li>
<li>✅EndPoint para atualizar um post existente, utilizando o método PUT.</li>
<li>✅EndPoint para deletar um post existente, utilizando o método DELETE</li>
<li>✅Para fazer um post é necessário usuário e login, portanto é trabalhada a relação entre as tabelas user e post</li>
<li>✅É necessário a utilização de categorias para os posts, trabalhando, assim, a relação das tabelas posts para categories e de categories para posts</li>
</ul>

## ▶️ Executando aplicação
<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

**⚠️ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


> ℹ️ Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > ℹ️ Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > ℹ️ Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)

  - **⚠️ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima.

  - **⚠️ Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **⚠️ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - ✨ **Dica:** A extensão `Remote - Containers` é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="https://user-images.githubusercontent.com/104791582/213542711-a092f145-a6e3-4172-89f4-417379cfefae.png" width="800px" >

  <br />

  ## 👉 Sem Docker

  > ℹ️ Instale as dependências [**Caso existam**] com `npm install`

  - **⚠️ Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  <br/>
</details>
<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  ![der](https://user-images.githubusercontent.com/104791582/225185857-9875236d-8b62-49fc-a774-ebbae9cf45e4.png)

  ---

  #### Formato das entidades

  - Uma tabela chamada **users**, contendo dados com a seguinte estrutura:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - Uma tabela chamada **categories**, contendo dados com a seguinte estrutura:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - Uma tabela chamada **blog_posts**, contendo dados com a seguinte estrutura:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14  // Chave estrangeira, referenciando o id de `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Chave primária e estrangeira, referenciando o id de `BlogPosts`     | 20  // Chave primária e estrangeira, referenciando o id de `Categories`     |


    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

    ---
<br />
</details>
<details>
  <summary><strong>👀 Dicas de scripts prontos</strong></summary>

  ---

  - Deleta o banco de dados:
    ```json
    "drop": "npx sequelize-cli db:drop"
    ```

  - Cria o banco e gera as tabelas:
    ```json
    "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate"
    ```

  - Insere dados/Popula a tabela:
    ```json
    "seed": "npx sequelize-cli db:seed:all"
    ```
<br />
</details>
</br>

## 🧔 Autor

<div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="dev-marcospaulo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/dev-marcospaulo?trk=profile-badge">Marcos Paulo Pereira</a></div>
