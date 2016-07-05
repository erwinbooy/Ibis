package test.java.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import test.java.users.User;

/**
 * This Page is for the overview screen that you get after you login
 * On this page you can pick the applications you want to use
 * @author Erwin
 *
 */
public class OverviewPage extends AbstractPage{

	private static String text_welkom = "//h1[@class='ibis-sso-welkom']";
//	private static String text_welkom_text = "ibis-sso-welkom-text";
	private static String link_IBIS_MAIN = "id('side-menu')/li/a[contains(@href,'IBIS-MAIN')]";
	private static String link_IBIS4RISK = "id('side-menu')/li/a[contains(@href,'IBIS4Risk')]";

	/**
	 * Constructor from the Abstract Class
	 * 
	 * @param driver
	 */
	public OverviewPage(WebDriver driver) {
		super(driver);
	}

	/**
	 * Method to verify that the user is logged in To do this we also need to
	 * have the page
	 * 
	 * This method could also be moved to the user because it doesn't really
	 * need the profile But lets leave it here for now
	 * 
	 * @param myUser
	 * @return
	 */
	public boolean isLoggedIn(User myUser) {
		try{
			// Verify that the name is mentioned on the page
			waitForElementPresent(By.xpath(text_welkom)).getText().equals(myUser.getUsername());
			// Check if the correct user is mentioned
			findElementOnPage(By.xpath(text_welkom)).getText().equals(myUser.getUsername());
			return true;
		} catch (Exception e){
			return false;
		}
	}
	
	/**
	 * We click on the menu item IBIS-MAIN
	 * Since the user might not have access we are not sure if the item is there
	 */
	public void clickIbisMain(){
		findElementOnPage(By.xpath(link_IBIS_MAIN)).click();
	}
	
	/**
	 * We click on the menu item IBIS4RISK
	 * Since the user might not have access we are not sure if the item is there
	 */
	public void clickIbis4Risk(){
		findElementOnPage(By.xpath(link_IBIS4RISK)).click();
	}
}