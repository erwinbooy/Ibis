$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Ibis4risk.feature");
formatter.feature({
  "line": 2,
  "name": "Ibis4Risk - open the demo project",
  "description": "",
  "id": "ibis4risk---open-the-demo-project",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 33784,
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
  "name": "Als Ibis4Risk gebruiker kan ik het demo project openenen",
  "description": "",
  "id": "ibis4risk---open-the-demo-project;als-ibis4risk-gebruiker-kan-ik-het-demo-project-openenen",
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
  "name": "Wanneer ik naar Ibis4Risk ga",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "En ik het Ibis4Risk demo project open",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Dan zie ik het Ibis4Risk demo project",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Gegeven_in_ingelogged_ben()"
});
formatter.result({
  "duration": 1424759820,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 10763616147,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.En_ik_het_Ibis4Risk_demo_project_open()"
});
formatter.result({
  "duration": 2101400777,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.Dan_zie_ik_het_demo_project()"
});
formatter.result({
  "duration": 14011192,
  "status": "passed"
});
formatter.uri("Ibis_main_general.feature");
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
  "duration": 35496,
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
  "duration": 1375976599,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 2390419293,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.En_ik_het_IbisMain_demo_project_open()"
});
formatter.result({
  "duration": 921877653,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not clickable at point (195, 240). Other element would receive the click: \u003cdiv class\u003d\"page-splash-message\"\u003e\u003c/div\u003e\nCommand duration or timeout: 67 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NB008038\u0027, ip: \u0027172.20.31.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 089a3216-e324-494e-9a0a-7696ef5327e4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat test.java.pageobjects.IbisMainPage.openDemoProject(IbisMainPage.java:39)\r\n\tat test.java.step_definitions.IbisMainSteps.En_ik_het_IbisMain_demo_project_open(IbisMainSteps.java:28)\r\n\tat ✽.And En ik het IbisMain demo project open(Ibis_main_general.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IbisMainSteps.Dan_zie_ik_het_IbisMain_demo_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("test/Ibis_main_general.feature");
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
  "duration": 47470,
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
  "duration": 1358681033,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 1998268006,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.En_ik_het_IbisMain_demo_project_open()"
});
formatter.result({
  "duration": 786370275,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not clickable at point (195, 240). Other element would receive the click: \u003cdiv class\u003d\"page-splash-message\"\u003e\u003c/div\u003e\nCommand duration or timeout: 66 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NB008038\u0027, ip: \u0027172.20.31.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 089a3216-e324-494e-9a0a-7696ef5327e4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat test.java.pageobjects.IbisMainPage.openDemoProject(IbisMainPage.java:39)\r\n\tat test.java.step_definitions.IbisMainSteps.En_ik_het_IbisMain_demo_project_open(IbisMainSteps.java:28)\r\n\tat ✽.And En ik het IbisMain demo project open(test/Ibis_main_general.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "IbisMainSteps.Dan_zie_ik_het_IbisMain_demo_project()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("test_login_en_logout.feature");
formatter.feature({
  "line": 2,
  "name": "Test login en logout in mijn Ibis",
  "description": "",
  "id": "test-login-en-logout-in-mijn-ibis",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 96650,
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
  "name": "Als gebruiker kan ik in en uit loggen",
  "description": "",
  "id": "test-login-en-logout-in-mijn-ibis;als-gebruiker-kan-ik-in-en-uit-loggen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Gegeven ik op de login pagina ben",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "En ik log in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Dan zie ik de welkoms pagina",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "En ik log uit",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Dan zie ik de login pagina",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.Wanneer_ik_de_login_pagina_open()"
});
formatter.result({
  "duration": 2568854040,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_in()"
});
formatter.result({
  "duration": 10202003981,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_welkom_pagina()"
});
formatter.result({
  "duration": 60119871,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_uit()"
});
formatter.result({
  "duration": 1061810810,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_login_pagina()"
});
formatter.result({
  "duration": 24295389,
  "status": "passed"
});
});