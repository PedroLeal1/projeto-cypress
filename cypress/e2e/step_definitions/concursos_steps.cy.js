import ConcursosPage from "../pages/ConcursosPage.cy";

const concursosPage = new ConcursosPage();

Given("eu acesso a página de editais", () => {
  concursosPage.acessarPagina();
});

And("seleciono o checkbox para buscar por período", () => {
  concursosPage.selecionarCheckboxPorPeriodo();
});

And("seleciono a data {string}", (dia) => {
  concursosPage.selecionarData(dia);
});

When("clico no botão pesquisar", () => {
  concursosPage.clicarPesquisar();
});

Then("devo ver o texto {string} na tabela", (resultadoEsperado) => {
  concursosPage.validarResultado(resultadoEsperado);
});
