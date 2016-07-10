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
  "duration": 3428800749,
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
  "duration": 22540091635,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 9938131,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"id(\u0027side-menu\u0027)/li/a[contains(@href,\u0027IBIS4Risk\u0027)]\"}\nCommand duration or timeout: 9 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Erwin-Laptop\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 822800da-72f6-41aa-bdb3-3bb458e47eff\n*** Element info: {Using\u003dxpath, value\u003did(\u0027side-menu\u0027)/li/a[contains(@href,\u0027IBIS4Risk\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat test.java.pageobjects.AbstractPage.findElementOnPage(AbstractPage.java:49)\r\n\tat test.java.pageobjects.OverviewPage.clickIbis4Risk(OverviewPage.java:65)\r\n\tat test.java.step_definitions.Ibis4RiskSteps.Wanneer_ik_naar_ibis_main_ga(Ibis4RiskSteps.java:21)\r\n\tat ✽.When Wanneer ik naar Ibis4Risk ga(Ibis4risk.feature:7)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"id(\u0027side-menu\u0027)/li/a[contains(@href,\u0027IBIS4Risk\u0027)]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Erwin-Laptop\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/Erwin/AppData/Local/Temp/anonymous7210097486423798325webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/Erwin/AppData/Local/Temp/anonymous7210097486423798325webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/Erwin/AppData/Local/Temp/anonymous7210097486423798325webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/Erwin/AppData/Local/Temp/anonymous7210097486423798325webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/Erwin/AppData/Local/Temp/anonymous7210097486423798325webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Ibis4RiskSteps.En_ik_het_Ibis4Risk_demo_project_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Ibis4RiskSteps.Dan_zie_ik_het_demo_project()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 63224,
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
  "duration": 14578851041,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 15558627046,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.En_ik_het_IbisMain_demo_project_open()"
});
formatter.result({
  "duration": 5129851752,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Dan_zie_ik_het_IbisMain_demo_project()"
});
formatter.result({
  "duration": 3182665852,
  "status": "passed"
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
  "duration": 50908,
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
  "duration": 3680650061,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_in()"
});
formatter.result({
  "duration": 10195942146,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_welkom_pagina()"
});
formatter.result({
  "duration": 30430213,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_uit()"
});
formatter.result({
  "duration": 1045273568,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_login_pagina()"
});
formatter.result({
  "duration": 9993555,
  "status": "passed"
});
});