import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CargosPage from "../pages/CargosPage.cy.js";

const cargosPage = new CargosPage();

Given("eu acesso a página de cargos", () => {
  cy.visit(
    "https://transparencia.joaopessoa.pb.gov.br/#/servidores/cargos/listagem"
  );
});

When("seleciono o ano de {string}", (ano) => {
  cargosPage.selecionarAno(ano);
});

And("seleciono o mês de {string}", (mes) => {
  cargosPage.selecionarMes(mes);
});

And("clico no botão pesquisar", () => {
  cargosPage.clicarPesquisar();
});

And("filtro o cargo por {string}", (cargo) => {
  cargosPage.filtrarCargo(cargo);
});

Then("devo ver {string} no resultado", (cargoEsperado) => {
  cargosPage.validarResultadoCargo(cargoEsperado);
});
