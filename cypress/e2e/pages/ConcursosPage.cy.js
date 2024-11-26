class ConcursosPage {
  acessarPagina() {
    // Acessa a página de editais
    cy.visit("https://transparencia.joaopessoa.pb.gov.br/#/editais");
  }

  selecionarCheckboxPorPeriodo() {
    // Certifica de que apenas um elemento é encontrado
    cy.get('p-radiobutton[value="periodo"] .ui-radiobutton-icon')
      .should("have.length", 1) // Valida que apenas um elemento é encontrado
      .click();
  }

  selecionarData(dia) {
    // Abre o calendário
    cy.get('input[placeholder="Data Inicial"]').click();

    // Seleciona o dia no calendário
    cy.contains("a.ui-state-default", dia).click();
  }

  clicarPesquisar() {
    // Clica no botão de pesquisa
    cy.get("button").contains("Pesquisar").click();
  }

  validarResultado(resultadoEsperado) {
    // Valida o resultado esperado na tabela
    cy.contains("td", resultadoEsperado).should("be.visible");
  }
}

export default ConcursosPage;
