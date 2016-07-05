package test.java.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * This Page is for the Ibis4Risk application
 * @author Erwin
 *
 */
public class IbisMainPage extends AbstractPage{

	// Link to the Demo Project when you are on the IbisMain start page
	private static String link_demo_project = "//div[contains(@class,'tile')][contains(@ng-click,'vm.openProject')]";
	// Text of the Demo project once you opened it
	private static String text_demo_project = "//nav[contains(@class,'navbar')]//li[contains(@class,'active')]/a[contains(.,'Demo project woningbouw')]";

	/**
	 * Constructor from the Abstract Class
	 * 
	 * @param driver
	 */
	public IbisMainPage(WebDriver driver) {
		super(driver);
	}
	
	/**
	 * We will open the Demo project
	 * The first time we also have to import the project but after that it will just be there
	 */
	public void openDemoProject(){
		handleWaitingScreen();
		// The Demo project will always be there so this click always works
		waitForElementIsClickable(By.xpath(link_demo_project)).click();
	}

	/**
	 * Demo project is showing now
	 * We validate this by checking the name in the navigation bar
	 */
	public boolean demoProjectIsShowing(){
		handleWaitingScreen();
		try{
			findElementOnPage(By.xpath(text_demo_project));
			return true;
		} catch (Exception e){
			return false;	
		}
	}
}