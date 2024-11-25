Feature: Validar Quadro Geral de Despesas

  Scenario: Selecionar ano, agrupar por órgão e validar retorno esperado
    Given que o usuário acessa a página de despesas "https://transparencia.joaopessoa.pb.gov.br/#/despesas/despesas-quadro-geral"
    When o usuário seleciona o ano "2024"
    And agrupa as despesas por "ORGÃO"
    And realiza a pesquisa
    Then o resultado esperado deve conter "CONTROLADORIA GERAL DO MUNICIPIO - ACOES DE GOVERNO"