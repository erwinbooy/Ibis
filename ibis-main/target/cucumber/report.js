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
  "duration": 3039083198,
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
  "duration": 17637109579,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 4103337190,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.En_ik_het_Ibis4Risk_demo_project_open()"
});
formatter.result({
  "duration": 1680467595,
  "status": "passed"
});
formatter.match({
  "location": "Ibis4RiskSteps.Dan_zie_ik_het_demo_project()"
});
formatter.result({
  "duration": 15706836,
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
  "duration": 32074,
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
  "duration": 1360633268,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.Wanneer_ik_naar_ibis_main_ga()"
});
formatter.result({
  "duration": 3014669349,
  "status": "passed"
});
formatter.match({
  "location": "IbisMainSteps.En_ik_het_IbisMain_demo_project_open()"
});
formatter.result({
  "duration": 4999287958,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.xpath: //div[@id\u003d\u0027splash-page\u0027][@class\u003d\u0027dissolve-animation\u0027]\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NB008038\u0027, ip: \u0027172.20.31.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3f67f21-82d6-4a78-9172-b467d38596cf\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\r\n\tat test.java.pageobjects.AbstractPage.waitForElementPresent(AbstractPage.java:82)\r\n\tat test.java.pageobjects.AbstractPage.handleWaitingScreen(AbstractPage.java:58)\r\n\tat test.java.pageobjects.IbisMainPage.openDemoProject(IbisMainPage.java:32)\r\n\tat test.java.step_definitions.IbisMainSteps.En_ik_het_IbisMain_demo_project_open(IbisMainSteps.java:28)\r\n\tat ✽.And En ik het IbisMain demo project open(Ibis_main_general.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027splash-page\u0027][@class\u003d\u0027dissolve-animation\u0027]\"}\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NB008038\u0027, ip: \u0027172.20.31.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: a3f67f21-82d6-4a78-9172-b467d38596cf\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027splash-page\u0027][@class\u003d\u0027dissolve-animation\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:899)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\r\n\tat test.java.pageobjects.AbstractPage.waitForElementPresent(AbstractPage.java:82)\r\n\tat test.java.pageobjects.AbstractPage.handleWaitingScreen(AbstractPage.java:58)\r\n\tat test.java.pageobjects.IbisMainPage.openDemoProject(IbisMainPage.java:32)\r\n\tat test.java.step_definitions.IbisMainSteps.En_ik_het_IbisMain_demo_project_open(IbisMainSteps.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@id\u003d\u0027splash-page\u0027][@class\u003d\u0027dissolve-animation\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027NB008038\u0027, ip: \u0027172.20.31.71\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/WINDOWS/TEMP/anonymous5399109722571826310webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/WINDOWS/TEMP/anonymous5399109722571826310webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/WINDOWS/TEMP/anonymous5399109722571826310webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/WINDOWS/TEMP/anonymous5399109722571826310webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/WINDOWS/TEMP/anonymous5399109722571826310webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n",
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
  "duration": 37634,
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
  "duration": 2480949133,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_in()"
});
formatter.result({
  "duration": 10198536572,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_welkom_pagina()"
});
formatter.result({
  "duration": 42769994,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.En_ik_log_uit()"
});
formatter.result({
  "duration": 1003080384,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.Dan_zie_ik_de_login_pagina()"
});
formatter.result({
  "duration": 29419098,
  "status": "passed"
});
});