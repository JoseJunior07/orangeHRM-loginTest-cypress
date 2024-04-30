# Testes Orange HRM

Este repositório contém testes automatizados para a aplicação Orange HRM usando Cypress.

## Descrição do Teste

### Login - Sucesso
- Este teste verifica se é possível fazer login com credenciais válidas.
- URL de acesso: [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- Credenciais:
  - Usuário: Admin
  - Senha: admin123
- Passos do teste:
  1. Acessa a página de login.
  2. Insere o nome de usuário e senha.
  3. Clica no botão de login.
  4. Verifica se o redirecionamento ocorreu para a página de dashboard.
  5. Verifica se o breadcrumb na página de dashboard contém o texto "Dashboard".

### Login - Falha
- Este teste verifica o comportamento de login com credenciais inválidas.
- URL de acesso: [https://opensource-demo.orangehrmlive.com/web/index.php/auth/login](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)
- Credenciais:
  - Usuário: Test
  - Senha: test123
- Passos do teste:
  1. Acessa a página de login.
  2. Insere um nome de usuário e senha inválidos.
  3. Clica no botão de login.
  4. Verifica se um alerta de falha de login é exibido.

## Como Executar os Testes

1. Clone este repositório para sua máquina local.
2. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
3. Instale as dependências usando o comando `npm install`.
4. Execute os testes com o comando `npx cypress run`.

## Requisitos

- Node.js
- Cypress

## Autor

Este projeto foi desenvolvido por José Júnior | [Linkedin](https://www.linkedin.com/in/jose-junior07/).