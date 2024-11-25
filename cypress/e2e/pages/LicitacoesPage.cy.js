class LicitacoesPage {
    visitarPagina(url) {
        cy.visit(url, { timeout: 10000 }); // Timeout ajustado para 60 segundos
        cy.url().should("include", "licitacoes");
      }
  
      selecionarAno(ano) {
        cy.get("p-dropdown#selectYear", { timeout: 10000 }).click();
        cy.get(`li[aria-label="${ano}"]`, { timeout: 10000 }).click();
      }
    
      preencherPalavraChave(chave) {
        cy.get('li.ui-chips-input-token input[type="text"]', { timeout: 10000 })
          .type(chave)
          .type("{enter}");
      }
    
      realizarPesquisa() {
        cy.get("span.ui-button-text.ui-clickable").contains("Pesquisar").click();
      }
    
      validarValorTotal(valorEsperado) {
        cy.get("tfoot").within(() => {
          cy.contains("td", valorEsperado, { timeout: 10000 })
            .scrollIntoView() // Garante que o elemento está visível na viewport
            .should("be.visible");
        });
      }
    }
    
    export default new LicitacoesPage();