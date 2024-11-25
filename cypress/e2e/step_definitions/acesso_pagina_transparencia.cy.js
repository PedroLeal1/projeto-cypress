import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import despesasPage from "../pages/DespesasPage.cy";

Given("que o usuário acessa a página de despesas {string}", (url) => {
  despesasPage.acessarPagina(url);
});

When("o usuário seleciona o ano {string}", (ano) => {
  despesasPage.selecionarAno(ano);
});

When("agrupa as despesas por {string}", (grupo) => {
  despesasPage.agruparPor(grupo);
});

When("realiza a pesquisa", () => {
  despesasPage.realizarPesquisa();
});

Then("o resultado esperado deve conter {string}", (resultadoEsperado) => {
  despesasPage.validarResultado(resultadoEsperado);
});