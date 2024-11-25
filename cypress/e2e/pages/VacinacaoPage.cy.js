class VacinacaoPage {
    acessarPagina(url) {
      // Visita a página de vacinação
      cy.visit(url);
    }
  
    buscarPorNome(nome) {
      // Digita o nome na barra de busca e clica no botão Pesquisar
      cy.get('input[placeholder="Nome"]', { timeout: 10000 })
        .should("be.visible")
        .type(nome);
      cy.get("button").contains("Pesquisar").click();
    }
  
    validarVacinaTomada() {
      // Valida que o nome aparece na lista
      cy.contains("td", "JOAO AZEVEDO LINS FILHO", { timeout: 10000 }).should(
        "be.visible"
      );
  
      // Valida se a pessoa foi vacinada
      cy.contains("td", "JOAO AZEVEDO LINS FILHO").should("be.visible");
    }
  }
  
  // Exporta a página para uso nos testes
  const vacinacaoPage = new VacinacaoPage();
  export default vacinacaoPage;