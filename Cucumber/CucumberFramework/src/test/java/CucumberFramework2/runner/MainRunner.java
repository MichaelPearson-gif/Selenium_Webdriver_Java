package CucumberFramework2.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions (
		//features location
		features = {"src/test/java/CucumberFramework2/featureFiles/"},
		
		//step files
		glue = {"CucumberFramework2.steps"},
		
		monochrome = true,
		
		dryRun = false,
		
		tags = {}, 
		
		plugin = {"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json",
				"com.cucumber.listener.ExtentCucumberFormatter:target/report.html"}
		)

public class MainRunner {
}
