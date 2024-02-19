# :construction: Projeto TrybeSmith :construction:
O projeto é uma aplicação que utiliza Node.js com o framework Express para criar uma API RESTful. Ele possui endpoints para lidar com a criação e recuperação de produtos, pedidos e autenticação de usuários. A autenticação é feita utilizando JWT (JSON Web Tokens) e senhas criptografadas usando bcryptjs. O banco de dados utilizado é o MySQL, e a integração com ele é feita através do Sequelize, um ORM para Node.js.

## Tecnologias Principais:

### bcryptjs: 
Versão 2.4.3 - Utilizado para criptografar senhas de usuário.
### express: 
Versão 4.17.1 - Framework web para Node.js utilizado para criar a API RESTful.
### express-async-errors: 
Versão 3.1.1 - Pacote utilizado para lidar com erros assíncronos no Express.
### joi: 
Versão 17.6.0 - Biblioteca de validação de dados utilizada para validar os dados recebidos pela API.
### jsonwebtoken: 
Versão 9.0.0 - Utilizado para gerar e verificar tokens JWT para autenticação de usuário.
### mysql2: 
Versão 2.3.0 - Cliente MySQL para Node.js.
### sequelize: 
Versão 6.25.5 - ORM (Object-Relational Mapping) utilizado para interagir com o banco de dados MySQL de forma assíncrona.
## Principais Funcionalidades:

##### Autenticação de usuários através de JWT.
##### Criação, listagem de produtos e pedidos.
##### Validação de dados utilizando Joi.
##### Criptografia de senhas de usuário utilizando bcryptjs.
##### Utilização do padrão MVC (Model-View-Controller) para organização do código.
## Estrutura do Projeto:

src/: Pasta principal do código-fonte.
Routes/: Contém os arquivos de roteamento da aplicação.
Controller/: Contém os controladores da aplicação.
Middlewares/: Contém os middlewares utilizados na aplicação.
Services/: Contém os serviços que realizam operações de negócio.
Utils/: Contém utilitários utilizados na aplicação.
tests/: Contém os testes automatizados da aplicação.
Integration/: Contém os testes de integração.
Mocks/: Contém os mocks utilizados nos testes.
Unit/: Contém os testes unitários.
## Observações:

Os testes automatizados estão separados em testes de integração e testes unitários.
Os testes cobrem principalmente os controladores e serviços da aplicação, garantindo que suas funcionalidades estejam corretas.
Utilização de mocks para simular comportamentos de objetos e requisições HTTP durante os testes.
Os arquivos de roteamento, controladores e middlewares são responsáveis por lidar com as requisições HTTP e chamar os serviços necessários para executar as operações de negócio.