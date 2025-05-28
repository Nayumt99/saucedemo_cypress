Funcionalidade: Processo de compra no SauceDemo

  Cenário: Usuário realiza compra com sucesso
    Dado que o usuário acessa o site "https://www.saucedemo.com/"
    Quando ele faz login com o usuário "standard_user" e senha "secret_sauce"
    Então ele deve ser redirecionado para a página de produtos

    Quando ele adiciona os seguintes itens ao carrinho:
      | Produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Fleece Jacket       |
      | Sauce Labs Bolt T-Shirt        |
    Então ele deve visualizar os itens no carrinho

    Quando ele acessa o carrinho e remove o item "Sauce Labs Bolt T-Shirt"
    Então o carrinho deve conter os seguintes produtos:
      | Produto                        |
      | Sauce Labs Backpack            |
      | Sauce Labs Bike Light          |
      | Sauce Labs Fleece Jacket       |

    Quando ele clica em "Checkout"
    E preenche os dados "Peter" "Parker" "24410450"
    E clica em "Continue"
    Então ele deve ser redirecionado para a página de confirmação do pedido

    Quando ele finaliza a compra clicando em "Finish"
    Então ele deve ver a mensagem "Thank you for your order!"
