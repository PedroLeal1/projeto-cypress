class CargosPage {
  selecionarAno(ano) {
    // Seleciona o ano no dropdown
    cy.get("p-dropdown#filtroAno").click(); // Use o ID correto se necessário
    cy.get(`li[aria-label="${ano}"]`).click(); // Seleciona o ano desejado
  }

  selecionarMes(mes) {
    // Seleciona o dropdown de mês
    cy.get("p-dropdown#Mes") // Utiliza o seletor com ID específico
      .should("exist") // Verifica que o elemento existe no DOM
      .should("be.visible") // Verifica que o elemento está visível
      .click(); // Clica no dropdown para abrir o menu

    // Aguarda o item do mês estar visível e clica nele
    cy.contains("li", mes, { timeout: 10000 }) // Localiza o mês pelo texto
      .should("be.visible") // Verifica que o mês está visível
      .click(); // Seleciona o mês clicando
  }

  clicarPesquisar() {
    // Clica no botão pesquisar
    cy.get("span.ui-button-text").contains("Pesquisar").click();
  }

  filtrarCargo(cargo) {
    // Filtra o cargo
    cy.get('input[placeholder="Filtrar cargo"]').type(cargo, { delay: 200 }); // Adiciona um delay para evitar problemas de digitação rápida
  }

  validarResultadoCargo(cargoEsperado) {
    // Valida que o cargo aparece no resultado
    cy.contains("td", cargoEsperado).should("be.visible");
  }
}

export default CargosPage;
