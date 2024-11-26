Feature: Busca por servidores

  Scenario: Buscar servidor por ano, mês e nome
    Given eu acesso a página de servidores
    When seleciono o ano de "2024"
    And seleciono o mês de "Janeiro"
    And preencho o nome "CICERO DE LUCENA"
    And clico no botão pesquisar
    Then devo ver o nome "Cicero De Lucena Filho" nos resultados
