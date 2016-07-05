package test.java.pageobjects;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


/**
 * @author Erwin
 *
 * Abstract class that performs the standard stuff that a Page needs It
 * implements the HoyhoyPage interface
 * All the Menu products and user account links are available here as they are available for all pages
 */
public abstract class AbstractPage implements Page {

	public WebDriver driver = null;
	public WebDriverWait wait = null;
	public Log logger = null;
	private String url_logout = "/Signout";
	// Waiting icon while building the projects on the screen
	private static String waiting_screen_not_showing = "//div[@id='splash-page'][@class='dissolve-animation ng-hide']";
	// Waiting icon while building the projects on the screen
	private static String waiting_screen_showing = "//div[@id='splash-page'][@class='dissolve-animation']";

	/**
	 * Constructor with WebDriver
	 * 
	 * @param driver
	 */
	public AbstractPage(WebDriver driver) {
		this.driver = driver;
		this.wait = new WebDriverWait(driver, 5, 1);
		logger = LogFactory.getLog(this.getClass());
	}
	
	/**
	 * This method can be used to check if something exists on the page If it
	 * exists the WebElement will be returned
	 * 
	 * @param myXPath
	 * @return WebElement
	 */
	public WebElement findElementOnPage(By locator) {
		return driver.findElement(locator);
	}

	/**
	 * This method will handle the splash screen that shows up everywhere in the application
	 * I am not sure yet if this will work in all parts of the application but that will show in time
	 * 
	 */
	public void handleWaitingScreen(){
		// First we wait until the waiting screen is showing
		try{
			waitForElementPresent(By.xpath(waiting_screen_showing));
		} catch (Exception e){
			// The waiting screen doesn't always have to show or it very fast so we ignore this exception
		}
		// First we wait until the waiting screen is not showing anymore
		waitForElementPresent(By.xpath(waiting_screen_not_showing));
	}
	
	/**
	 * This method will be a safe method to get an element because it always
	 * waits for it to be clickable
	 * 
	 * @param myXPath
	 * @return WebElement
	 */
	public WebElement waitForElementIsClickable(By locator) {
		return wait.until(ExpectedConditions.elementToBeClickable((locator)));
	}

	/**
	 * This method will be a safe method to check if an element is present on
	 * the page
	 * 
	 * @param myXPath
	 * @return
	 */
	public WebElement waitForElementPresent(By locator) {
		return wait.until(ExpectedConditions.presenceOfElementLocated((locator)));
	}

	/**
	 * Can be used for debugging problems. This returns the html that is being
	 * used currently
	 */
	public String getPageHtml() {
		return driver.getPageSource();
	}
	
	/**
	 * To logout of the application
	 * @return
	 */
	public void logout(){
		driver.get(driver.getCurrentUrl() + url_logout);
	}
}
