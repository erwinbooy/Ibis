@web
Feature: Test login en logout in mijn Ibis

# 1:
  Scenario: Als gebruiker kan ik in en uit loggen
    Given Gegeven ik op de login pagina ben
    When En ik log in
    Then Dan zie ik de welkoms pagina
    When En ik log uit
    Then Dan zie ik de login pagina