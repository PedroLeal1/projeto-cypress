class DespesasPage {
  acessarPagina(url) {
    cy.visit(url);
  }

  selecionarAno(ano) {
    // Abre o dropdown do ano
    cy.get("p-dropdown#selectYear div.ui-dropdown-trigger", { timeout: 10000 })
      .should("be.visible")
      .click();

    // Seleciona o ano no dropdown
    cy.get(`li[aria-label="${ano}"]`, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  agruparPor(grupo) {
    // Abre o dropdown de agrupamento
    cy.get("p-dropdown#filtroAgrupamento div.ui-dropdown-trigger", {
      timeout: 10000,
    })
      .should("be.visible")
      .click();

    // Seleciona o grupo no dropdown
    cy.get(`li[aria-label="${grupo}"]`, { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  realizarPesquisa() {
    // Clica no botão "Pesquisar"
    cy.get('button[label="Pesquisar"]').click();
  }

  validarResultado(resultadoEsperado) {
    // Verifica se o texto esperado está visível na tabela de resultados
    cy.contains("td", resultadoEsperado).should("be.visible");
  }
}

// Exporta uma instância da classe para ser usada nos testes
const despesasPage = new DespesasPage();
export default despesasPage;