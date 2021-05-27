package CucumberFramework3.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactUsSteps {
	WebDriver driver;

	@Before()
	public void setup() throws IOException {
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() +  "\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
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

	@When("^I click on the contact us button$")
	public void i_click_on_the_contact_us_button() throws Throwable {
		driver.findElement(By.id("contact-us")).click();
	}

	@And("^I enter a valid first name$")
	public void i_enter_a_valid_first_name() throws Throwable {
		// Store the current window handle
		@SuppressWarnings("unused")
		String winHandleBefore = driver.getWindowHandle();
		// Perform the click operation that opens new window
		// Switch to new window opened
		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}

		driver.findElement(By.cssSelector("input[name='first_name']")).sendKeys("Tom");
	}

	@And("^I enter a valid last name$")
	public void i_enter_a_valid_last_name(DataTable table) throws Throwable { 
		List<List<String>> data = table.raw();
		driver.findElement(By.cssSelector("input[name='last_name']")).sendKeys(data.get(0).get(1));
	}

	@And("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() throws Throwable {
		driver.findElement(By.cssSelector("input[name='email']")).sendKeys("webdriverunivesity@outlook.com");
	}

	@And("^I enter comments$")
	public void i_enter_comments(DataTable arg1) throws Throwable {
		List<List<String>> data = arg1.raw();
		driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(0) + "\n"); //comment one
		driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(1)); //comment two
	}

	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() throws Throwable {
		driver.findElement(By.cssSelector("input[value='SUBMIT']")).click();
	}

	@Then("^the information should successfully be submitted via the contact us form$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
		//driver.findElement(By.cssSelector("input[value=\"SUBMIT\"]")).click();
	}
}
