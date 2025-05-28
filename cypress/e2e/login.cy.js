describe('Fluxo Completo de Compra no SauceDemo', () => {
  it('Deve fazer login, adicionar itens ao carrinho, remover um item e concluir a compra', () => {
    // Acessa o site
    cy.visit('https://www.saucedemo.com/');
    
    // Login no sistema
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
    // Captura de evidência após login
    cy.screenshot('login-sucesso', { capture: 'fullPage' });

    // Adiciona itens ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    
    // Captura de evidência dos itens adicionados
    cy.screenshot('itens-adicionados' , { capture: 'fullPage' });

    // Acessa o carrinho
    cy.get('[data-test="shopping-cart-link"]').click();
    
    // Remove um item do carrinho
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    
    // Verifica que restam 3 itens no carrinho
    cy.get('.cart_item').should('have.length', 3);

    // Captura de evidência após remoção de item
    cy.screenshot('item-removido' , { capture: 'fullPage' });

    // Clica em "Checkout"
    cy.get('[data-test="checkout"]').click();

    // Preenche os dados do cliente
    cy.get('[data-test="firstName"]').type('Peter');
    cy.get('[data-test="lastName"]').type('Parker');
    cy.get('[data-test="postalCode"]').type('24410450');

    // Captura de evidência após preenchimento dos dados
    cy.screenshot('dados-checkout' , { capture: 'fullPage' });

    // Prossegue para o próximo passo
    cy.get('[data-test="continue"]').click();

    // Finaliza a compra
    cy.get('[data-test="finish"]').click();

    // Verifica se a compra foi concluída com sucesso
    cy.get('.complete-header').should('contain', 'Thank you for your order!');

    // Captura de evidência após finalização do pedido
    cy.screenshot('pedido-finalizado' , { capture: 'fullPage' });
  });
});
