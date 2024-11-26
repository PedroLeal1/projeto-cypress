Feature: Teste de busca em concursos

  Scenario: Buscar editais pela data e validar resultado
    Given eu acesso a página de editais
    And seleciono o checkbox para buscar por período
    And seleciono a data "17"
    When clico no botão pesquisar
    Then devo ver o texto "Secretaria de Desenvolvimento Econômico e Trabalho" na tabela
