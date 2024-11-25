class LicitacoesPage {
    visitarPagina(url) {
        cy.visit(url, { timeout: 600000 }); // Timeout ajustado para 60 segundos
        cy.url().should("include", "licitacoes");
      }
  
      selecionarAno(ano) {
        cy.get('p-dropdown#selectYear', { timeout: 10000 }).click();
        cy.get(`li[aria-label="${ano}"]`, { timeout: 10000 }).click();
    }
  
    preencherPalavraChave(chave) {
      cy.get(
        'input[placeholder="Pressione ENTER após digitar cada palavra-chave"]',
        { timeout: 10000 }
      )
        .type(chave)
        .type("{enter}");
    }
  
    realizarPesquisa() {
      cy.get("span.ui-button-text.ui-clickable").contains("Pesquisar").click();
    }
  
    validarValorTotal(valorEsperado) {
      cy.get("tfoot").within(() => {
        cy.contains("td", valorEsperado).should("be.visible");
      });
    }
  }
  
  export default new LicitacoesPage();