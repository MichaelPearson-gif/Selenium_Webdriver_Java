package CucumberFramework1.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class ContactUsSteps {
	WebDriver driver;

	@Before("@live")
	public void setupChrome() throws IOException {
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() +  "\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	
	@Before("@staging")
	public void setupFirefox() throws IOException {
		System.setProperty("webdriver.gecko.driver", Paths.get(System.getProperty("user.dir")).toRealPath() +  "\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
		this.driver = new FirefoxDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	@After()
	public void tearDown() {
		driver.manage().deleteAllCookies();
		driver.quit();
	}

	@Given("^I access webdriveruniversity$")
	public void i_access_webdriveruniversity() throws Throwable {
		driver.get("http://www.webdriveruniversity.com");
	}
}
