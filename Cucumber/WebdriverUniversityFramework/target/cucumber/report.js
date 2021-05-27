$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login2.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the following prompt alert \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;",
  "rows": [
    {
      "cells": [
        "url",
        "username",
        "password",
        "message"
      ],
      "line": 13,
      "id": "login-into-account;login-to-account-with-credentials;;1"
    },
    {
      "cells": [
        "http://www.webdriveruniversity.com/",
        "webdriver2",
        "webdriver1232",
        "validation succeeded2"
      ],
      "line": 14,
      "id": "login-into-account;login-to-account-with-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1492310200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to account with credentials",
  "description": "",
  "id": "login-into-account;login-to-account-with-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"http://www.webdriveruniversity.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the login portal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters the \"webdriver2\" username",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user enter the \"webdriver1232\" password",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user should be presented with the following prompt alert \"validation succeeded2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.webdriveruniversity.com/",
      "offset": 19
    }
  ],
  "location": "LoginSteps.user_navigates_to(String)"
});
formatter.result({
  "duration": 981158300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_portal_button()"
});
formatter.result({
  "duration": 158685500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver2",
      "offset": 17
    }
  ],
  "location": "LoginSteps.user_enters_the_username(String)"
});
formatter.result({
  "duration": 699196500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "webdriver1232",
      "offset": 16
    }
  ],
  "location": "LoginSteps.user_enter_the_password(String)"
});
formatter.result({
  "duration": 100453500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 62194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "validation succeeded2",
      "offset": 62
    }
  ],
  "location": "LoginSteps.the_user_should_be_presented_with_the_following_prompt_alert(String)"
});
formatter.result({
  "duration": 8500200,
  "error_message": "java.lang.AssertionError: expected [validationsucceeded2] but found [validationfailed]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat CucumberFramework2.steps.LoginSteps.the_user_should_be_presented_with_the_following_prompt_alert(LoginSteps.java:71)\r\n\tat ✽.Then the user should be presented with the following prompt alert \"validation succeeded2\"(Login2.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 25439400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : validation failed}\n  (Session info: chrome\u003d90.0.4430.212): validation failed\nBuild info: version: \u00273.6.0\u0027, revision: \u00276fbf3ec767\u0027, time: \u00272017-09-27T15:28:36.4Z\u0027\nSystem info: host: \u0027DESKTOP-EJSSJPM\u0027, ip: \u002710.5.0.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d90.0.4430.24 (4c6d850f087da467d926e8eddb76550aed655991-refs/branch-heads/4430@{#429}), userDataDir\u003dC:\\Users\\18587\\AppData\\Local\\Temp\\scoped_dir4040_107519915}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dWINDOWS, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:61778}, acceptInsecureCerts\u003dfalse, browserVersion\u003d90.0.4430.212, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dWINDOWS, setWindowRect\u003dtrue, webauthn:extension:largeBlob\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 966a4e5768e69b6c92c84fcea3f1f3e5\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:118)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:586)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:728)\r\n\tat CucumberFramework2.steps.LoginSteps.tearDown(LoginSteps.java:32)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:697)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:1004)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:728)\r\n\tat org.testng.TestRunner.run(TestRunner.java:629)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});