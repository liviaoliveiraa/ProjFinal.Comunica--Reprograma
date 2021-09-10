### {reprograma} week 17 - **Comunica** - Projetode finalização do bootcamp :rocket: 
---
<p align = "center">
<a align href = "#Sobre">Sobre</a> │
<a align href = "#Contexto">Contexto</a> │
<a align href = "#Regras">Regras</a> │
<a align href = "#Arquitetuta">Arquitetuta</a> │
<a align href = "#Rotas">Rotas</a> │
<a align href = "#Tecnologias">Tecnologias</a> │
<a align href = "#Pacotes">Pacotes</a> │
<a align href = "#Pré-requisitos">Pré-requisitos</a> │
<a align href = "#Contribuição">Contribuição</a> │
<a align href = "#Autora">Autora</a>
</p>

---

## Sobre
Projeto de conclusão desenvolvido pelo bootcamp de Back-end da [{reprograma}]((https://reprograma.com.br/)) em parceria com a [Accenture](https://www.accenture.com/br-pt). O projeto **Comunica** tem por finalidade tornar a comunicação entre professor e aluno mais assertiva e implementar a tecnologia nas escolas, seja particular ou pública.  

## Contexto
<img src="img/img-aula.png" alt="criança negra escrevendo no caderno e olhando para o notebook com um professor escrevendo em uma lousa" width ="250" align="right" padding="250"/>

Com base no artigo 5º da constituição de 1988, a educação é um direito de todos e dever do Estado e da família, será promovida e incentivada com a colaboração da sociedade, visando ao pleno desenvolvimento da pessoa, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.<br>
Em contrapartida, em 2019 , aproximadamente 1,1 milhão de crianças e adolescentes, com idade entre 4 e 17 anos, estavam fora da escola, o que representava 2,7%.<br>
Com a pandemia esse número cresceu e passou a 5,1 milhões de crianças sem acesso a educação. Um aumento de 3,7 milhões de crianças e adolescentes que estavam matriculados, mas não tiveram acesso a nenhuma atividade escolar, seja impressa ou digital e não conseguiram se manter aprendendo em casa, e os motivos são os mais diversos como a falta de internet, de equipamentos tanto por parte da escola como os alunos e inexperiência com a tecnologia.</br>
Em uma entrevista concedida para a Globo, a historiadora Letícia Batista relata suas dificuldades e o ensinamento que a pandemia nos trouxe como a urgência do uso de tecnologias digitais no processo de aprendizagem.</br>
Portando o APP Comunica veio para sanar esse GAP da tecnologia nas escolas e aproximar o aluno e professor. Seus objetivos como APP é uma comunicação mais objetiva, pois no caso, o professor dará todas as instruções referente as matérias que irá lecionar para o aluno. Para a instituição, o benefício do Comunica é acompanhar o plano de ensino do professor e se o material didático está sendo instruindo para os alunos. O professor já antecipa o que será ensinado em aula para que os alunos já venham preparado dando uma breve explicação e com isso, o aluno assiste a aula já tendo conhecimento do que lhe será ensinado.

## Regras
<p>As demandas do negócio são:

- [x] Somente pessoas com login e senha - que são os professores, podem excluir e postar as matérias;
- [x] Somente pessoas com login e senha - que são os professores, podem excluir e postar as informações das matérias;
- [x] Somente pessoas com login e senha - que são os professores, podem excluir e postar as informações dos professores;

## Arquitetuta
```
 📁 Comunica
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 infoMateriasController.js
   |         |- 📄 materiasControllers.js
   |         |- 📄 professoresController.js
   |         |- 📄 usuariasController.js
   |
   |    |- 📁 models
   |         |- 📄 infoMaterias.js
   |         |- 📄 materias.js
   |         |- 📄 professores.js
   |         |- 📄 usuarias.js
   |
   |    |- 📁 routes
   |         |- 📄 index.js 
   |         |- 📄 infoMaterias.router.js
   |         |- 📄 materias.router.js  
   |         |- 📄 professores.router.js 
   |         |- 📄 usuariasRouter.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 procfile
   |- 📄 server.js

```

## Rotas
<br>

* ### Início 
| Feature | Autenticação | Método | Rota |
|---------|--------|------|------|
| Introdução | :x: | GET | `/` |
| Introdução do APP | :x: | GET | `/inicio` |

<br>

* ### Matérias
| Feature | Autenticação | Método | Rota |
|---------|--------|------|------|
| Lista de todas as matérias | :x: | GET | `/inicio/materias` |
| Lista de todas as matérias por ano | :x: | GET | `/inicio/ano/{ano}` |
| Lista de todas as matérias por matéria | :x: | GET | `/inicio/materia/{materia}` |
| Lista de todas as matérias por ID | :x: | GET | `/inicio/id/{:id}` |
| Criar matéria | :heavy_check_mark: | POST | `/inicio/create` |
| Deletar matéria | :heavy_check_mark: | DELETE | `/inicio/{:id}` |

<br>

* ### Professores
| Feature | Autenticação | Método | Rota |
|---------|--------|------|------|
| Lista  todos os professores | :x: | GET | `/professores` |
| Criar professor | :heavy_check_mark: | POST | `/professores` |
| Deleta professor | :heavy_check_mark: | DELETE | `/professores/{:id}` |

<br>

* ### Informação sobre as matérias
| Feature | Autenticação | Método | Rota |
|---------|--------|------|------|
| Introdução | :x: | GET | `/informacoes` |
| Lista  todas as informações das matérias | :x: | GET | `/informacoes/todas` |
| Criar informações da matéria | :heavy_check_mark: | POST | `/informacoes/create` |
| Deleta informações da matéria | :heavy_check_mark: | DELETE | `/informacoes/{:id}` |

<br>

* ### Usuária
| Feature | Autenticação | Método | Rota |
|---------|--------|------|------|
| Cria usuária | :x: | POST | `/usuarias/create` |
| Fazer login | :x: | POST | `/usuarias/login` |


## Tecnologias
- [VsCode](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Pacotes

<a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow"><a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow"><a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow"><a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow"><a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.0-yellow"><a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-yellow"><a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow"></a> 

## Pré-requisitos

    npm i nodemoon
    

## Contribuição

- Faça um `fork` do projeto;

- Copie a url do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina;

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.

## Autora
Made with :purple_heart: by [Lívia Oliveira](https://www.linkedin.com/in/lívia-de-oliveira-almeida/)