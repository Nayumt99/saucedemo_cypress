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


├── 📂 cypress/
│   ├── 📂 e2e/                              # Testes End-to-End
│   │   ├── 📝 login.cy.js                   # Teste de login automatizado
│   │   ├── 📂 bdd/                          # Testes baseados em BDD (Gherkin)
│   │   │   ├── 📝 fluxo_swag.feature        # Cenário de teste BDD
│   ├── 📂 screenshots/                      # Capturas de tela das execuções
│   ├── 📂 videos/                           # Gravação dos testes
│   ├── 📂 fixtures/                         # Arquivos JSON para massa de dados
│   ├── 📂 support/                          # Suporte para funções auxiliares
│   │   ├── 📝 commands.js                   # Customização de comandos do Cypress
│   │   ├── 📝 e2e.js                        # Configurações globais do Cypress
│
├── 📄 cypress.config.js                     # Configuração do Cypress
├── 📄 package.json                          # Dependências do projeto
├── 📄 README.md                             # Documentação do projeto



## 🎥 **Captura de Evidências**
Os testes geram automaticamente: 📸 Screenshots em caso de falha (cypress/screenshots/) 🎥 Vídeos das execuções (cypress/videos/)

## 👥 **Contribuição**
Caso queira melhorar os testes, fique à vontade para fazer um Pull Request ou abrir uma Issue!

## 📄 **Licença**
Este projeto está sob a licença MIT.