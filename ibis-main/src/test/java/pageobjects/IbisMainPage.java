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
	private static String link_demo_project_create = "//div[contains(@class,'tile')]//h3[contains(.,'IBIS-MAIN demo project')]";
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
		// We first try to open the demo project. This can fail it is is not there yet (after DB refresh or so)
		try{
			// Try to open de Demo project
			waitForElementPresent(By.xpath(link_demo_project)).click();
		} catch (Exception e){
			// Create the demo project if it is not there
			waitForElementPresent(By.xpath(link_demo_project_create)).click();
		}
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