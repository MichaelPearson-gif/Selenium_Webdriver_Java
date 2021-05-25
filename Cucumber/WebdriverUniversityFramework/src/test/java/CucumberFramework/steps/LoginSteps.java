package CucumberFramework.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;
	
	@Before()
	public void setup() throws IOException{
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath() + "\\\\src\\\\test\\\\java\\\\CucumberFramework\\\\resources\\\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
	}
	
	
	@Given("^I access webdriveruniversity$")
	public void i_access_webdriveruniversity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.get("http://www.webdriveruniversity.com");
	}

	@When("^I click on the login portal button$")
	public void i_click_on_the_login_portal_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("login-portal")).click();
	}

	@When("^I enter a username$")
	public void i_enter_a_username() throws Throwable {
	    // Store the current window handle
		@SuppressWarnings("unused")
		String winHandleBefore = driver.getWindowHandle();
		// Perform the click operation that opens new window
		// Switch to new window opened
		for(String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}
		driver.findElement(By.id("text")).sendKeys("Tom");
	}

	@When("^I enter a \"([^\"]*)\" password$")
	public void i_enter_a_password(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("password")).sendKeys("password");
	}

	@When("^I click on the login button$")
	public void i_click_on_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("login-button")).click();
	}

	@Then("^I should be presented with a successful validation alert$")
	public void i_should_be_presented_with_a_successful_validation_alert() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Alert alert = driver.switchTo().alert();
	    System.out.println(alert.getText());
	    Assert.assertEquals(alert.getText(), "validation failed");
	}

	@Then("^I should be presented with a unsuccessful validation alert$")
	public void i_should_be_presented_with_a_unsuccessful_validation_alert() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    Alert alert = driver.switchTo().alert();
	    System.out.println(alert.getText());
	    
	    // actual expects
	    Assert.assertEquals(alert.getText(), "validation failed");
	}
}
