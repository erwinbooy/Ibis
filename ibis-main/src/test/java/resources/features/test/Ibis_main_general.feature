@web
Feature: Ibis Main - open the demo project

# 1:
  Scenario: Als Ibis Main gebruiker kan ik een demo project openenen
    Given Gegeven dat ik ingelogged ben
    When Wanneer ik naar Ibis Main ga
    And En ik het IbisMain demo project open
    Then Dan zie ik het IbisMain demo project
    
# 2:
# Scenario: Als in in Ibis Main de instellingen aanzet dan zie ik het instellingen scherm
# 	Given Gegeven dat ik in het IbisMain demo project zit
# 	When Wanneer ik de instellingen inschakel
# 	Then Dan zie ik het instellingen scherm