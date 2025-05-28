# 🚀 Teste Automatizado com Cypress - Fluxo de Compra no SauceDemo

Este repositório contém testes automatizados para validar o **fluxo completo de compra** no site [SauceDemo](https://www.saucedemo.com/) utilizando **Cypress** e a abordagem **BDD (Behavior-Driven Development)**.

## 📌 **Funcionalidades Testadas**
✔️ Login no sistema  
✔️ Adição de produtos ao carrinho  
✔️ Remoção de item do carrinho  
✔️ Preenchimento de informações de pagamento  
✔️ Finalização do pedido  

## 🛠 **Tecnologias Utilizadas**
- [Cypress](https://www.cypress.io/) - Framework de testes automatizados
- Gherkin (BDD) - Descrição dos testes
- Node.js - Ambiente de execução

## 📂 **Estrutura do Projeto**

── 📁 cypress/
    ── 📁 e2e/ │ 
        ├── 📝 login.cy.js # Teste automatizado em Cypress │ 
        ├── 📁 bdd
         ├── 📝 fluxo_swag.feature 
    ├── 📁 screenshots/ 
    ├── 📁 videos/ 
    ├── 📁 fixtures/ 
    ├── 📁 support/ 
📄 cypress.config.js 
📄 package.json
📄 README.md 


## 🎥 **Captura de Evidências**
Os testes geram automaticamente: 📸 Screenshots em caso de falha (cypress/screenshots/) 🎥 Vídeos das execuções (cypress/videos/)

## 👥 **Contribuição**
Caso queira melhorar os testes, fique à vontade para fazer um Pull Request ou abrir uma Issue!

## 📄 **Licença**
Este projeto está sob a licença MIT.