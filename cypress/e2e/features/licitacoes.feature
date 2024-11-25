Feature: Licitações e Contratos
  Como usuário do portal de transparência
  Quero buscar licitações
  Para verificar informações específicas

  Scenario: Buscar licitações usando palavra-chave "sejer" no ano de 2023
    Given que o usuário acessa a página de licitações "https://transparencia.joaopessoa.pb.gov.br/#/licitacoes"
    When o usuário seleciona o ano de publicação "2023"
    And o usuário preenche o campo palavra-chave com "sejer"
    And o usuário realiza a pesquisa
    Then o valor total das licitações deve ser "122.770,00"
