package CucumberFramework2.runners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions (
		features = {"src/test/java/CucumberFramework2/featureFiles2/"},
		glue = {"CucumberFramework2.steps"},
		monochrome = true,
		tags = {},
		plugin = {"pretty", "html:target/cucumber","json:target/cucumber.json", "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)

public class MainRunner2 extends AbstractTestNGCucumberTests {
}
