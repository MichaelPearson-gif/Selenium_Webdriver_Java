package WebdriverUniversityFramework1.steps1;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ContactUsSteps {
	WebDriver driver;
	
	@Before()
	public void setup() throws IOException {
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\\\src\\\\test\\\\java\\\\WebdriverUniversityFramework1\\\\resources1\\\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	
	@Given("^I access webdriveruniversity$")
	public void i_access_webdriveruniversity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.get("http://www.webdriveruniversity.com");
	}
	
	@When("^I click on the contact us button$")
	public void i_click_on_the_contact_us_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("contact-us")).click();
	}

	@When("^I enter a valid first name$")
	public void i_enter_a_valid_first_name() throws Throwable {
	    // Store the current window handle
		@SuppressWarnings("unused")
		String winHandleBefore = driver.getWindowHandle();
		// Perform the click operation that opens new window
		// Switch to new window opened
		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}
		driver.findElement(By.id("input[name='first_name']")).sendKeys("Tom");
	}

	@When("^I enter a valid last name$")
	public void i_enter_a_valid_last_name(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> data = arg1.raw();
	    driver.findElement(By.cssSelector("input[name='last_name']")).sendKeys(data.get(0).get(2));
	}

	@When("^I enter a valid email address$")
	public void i_enter_a_valid_email_address() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.cssSelector("input[name='email']")).sendKeys("webdriveruniversity@outlook.com");
	}

	@When("^I enter comments$")
	public void i_enter_comments(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	    List<List<String>> data = arg1.raw();
	    driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(0)); // Comment one
	    driver.findElement(By.cssSelector("textarea[name='message']")).sendKeys(data.get(1).get(1)); // Comment two
	}

	@When("^I click on the submit button$")
	public void i_click_on_the_submit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.cssSelector("input[value='SUBMIT'")).click();
	}

	@Then("^the information should successfully be submitted via the contact us form$")
	public void the_information_should_successfully_be_submitted_via_the_contact_us_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.cssSelector("input[value=\"SUBMIT\"]")).click();
	}
}
