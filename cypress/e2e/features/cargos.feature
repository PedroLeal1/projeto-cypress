Feature: Filtrar cargos por ano e mês

  Scenario: Filtrar cargos por ano e mês
    Given eu acesso a página de cargos
    When seleciono o ano de "2020"
    And seleciono o mês de "Março"
    And clico no botão pesquisar
    And filtro o cargo por "PROFESSOR"
    Then devo ver "PROFESSOR" no resultado
