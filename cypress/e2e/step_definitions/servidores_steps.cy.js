import ServidoresPage from "../pages/ServidoresPage.cy";

const servidoresPage = new ServidoresPage();

Given("eu acesso a página de servidores", () => {
  cy.visit("https://transparencia.joaopessoa.pb.gov.br/#/servidores/listagem");
});

When("seleciono o ano de {string}", (ano) => {
  servidoresPage.selecionarAno(ano);
});

And("seleciono o mês de {string}", (mes) => {
  servidoresPage.selecionarMes(mes);
});

And("preencho o nome {string}", (nome) => {
  servidoresPage.preencherNome(nome);
});

And("clico no botão pesquisar", () => {
  servidoresPage.clicarPesquisar();
});

Then("devo ver o nome {string} nos resultados", (nomeEsperado) => {
  servidoresPage.validarResultado(nomeEsperado);
});
