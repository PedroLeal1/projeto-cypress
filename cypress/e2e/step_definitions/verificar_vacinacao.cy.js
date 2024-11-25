import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import vacinacaoPage from "../pages/VacinacaoPage.cy";

Given("que o usuário acessa a página de vacinação {string}", (url) => {
  vacinacaoPage.acessarPagina(url);
});

When("o usuário busca pelo nome {string}", (nome) => {
  vacinacaoPage.buscarPorNome(nome);
});

Then("o resultado deve mostrar que ele tomou a vacina", () => {
  vacinacaoPage.validarVacinaTomada();
});