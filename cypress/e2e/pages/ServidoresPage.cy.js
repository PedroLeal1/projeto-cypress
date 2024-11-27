class ServidoresPage {
  selecionarAno(ano) {
    // Seleciona o ano
    cy.get("p-dropdown#filtroAno").click();
    cy.get(`li[aria-label="${ano}"]`).click();
  }

  selecionarMes(mes) {
    // Seleciona o mês
    cy.get("p-dropdown#Mes").click(); // Seleciona o dropdown de mês
    cy.get(`li[aria-label="${mes}"]`).click(); // Seleciona o mês pelo rótulo
  }

  preencherNome(nome) {
    // Insere o nome no campo de busca
    cy.get('input[placeholder="Nome"]').type(nome);
  }

  clicarPesquisar() {
    // Adiciona um delay de 10 segundos antes de clicar em "Pesquisar"
    cy.wait(5000); // Delay de 10 segundos
    cy.get("button").contains("Pesquisar").click();
  }

  validarResultado(nomeEsperado) {
    // Adiciona um delay maior para aguardar o carregamento do resultado
    cy.wait(8000); // Delay de 8 segundos para garantir o carregamento dos resultados
    cy.contains("td", nomeEsperado).should("be.visible");
  }
}

export default ServidoresPage;
