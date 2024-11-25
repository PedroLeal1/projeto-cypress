import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LicitacoesPage from "../pages/LicitacoesPage.cy";

Given("que o usuário acessa a página de licitações {string}", (url) => {
  LicitacoesPage.visitarPagina(url);
});

When("o usuário seleciona o ano de publicação {string}", (ano) => {
  LicitacoesPage.selecionarAno(ano);
});

When("o usuário preenche o campo palavra-chave com {string}", (chave) => {
  LicitacoesPage.preencherPalavraChave(chave);
});

When("o usuário realiza a pesquisa", () => {
  LicitacoesPage.realizarPesquisa();
});

Then("o valor total das licitações deve ser {string}", (valorEsperado) => {
  LicitacoesPage.validarValorTotal(valorEsperado);
});