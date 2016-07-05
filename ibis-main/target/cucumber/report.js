$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ibis_main_general.feature");
formatter.feature({
  "line": 2,
  "name": "Ibis Main - open the demo project",
  "description": "",
  "id": "ibis-main---open-the-demo-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 2737468594,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# 1:"
    }
  ],
  "line": 5,
  "name": "Als Ibis Main gebruiker kan ik een demo project openenen",
  "description": "",
  "id": "ibis-main---open-the-demo-project;als-ibis-main-gebruiker-kan-ik-een-demo-project-openenen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Gegeven dat ik ingelogged ben",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Wanneer ik naar Ibis Main ga",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "En ik het IbisMain demo project open",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Dan zie ik het IbisMain demo project",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Gegeven_in_ingelogged_ben()"
});
formatter.result({
  "duration": 23685125591,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 11637807509,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.En_ik_het_IbisMain_demo_project_open()"
});
formatter.result({
  "duration": 12819141316,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Dan_zie_ik_het_IbisMain_demo_project()"
});
formatter.result({
  "duration": 17334910,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat test.java.step_definitions.IbisMainSteps.Dan_zie_ik_het_IbisMain_demo_project(IbisMainSteps.java:34)\r\n\tat ✽.Then Dan zie ik het IbisMain demo project(Ibis_main_general.feature:9)\r\n",
  "status": "failed"
});
});