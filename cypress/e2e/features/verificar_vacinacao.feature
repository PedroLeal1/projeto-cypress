Feature: Verificar Vacinação contra COVID-19

  Scenario: Verificar se JOAO AZEVEDO LINS FILHO tomou a vacina
    Given que o usuário acessa a página de vacinação "https://transparencia.joaopessoa.pb.gov.br/#/covid-vacinacao/lista"
    When o usuário busca pelo nome "JOAO AZEVEDO LINS FILHO"
    Then o resultado deve mostrar que ele tomou a vacina