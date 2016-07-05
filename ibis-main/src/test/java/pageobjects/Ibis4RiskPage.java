package test.java.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

/**
 * This Page is for the Ibis4Risk application
 * @author Erwin
 *
 */
public class Ibis4RiskPage extends AbstractPage{

	private static String link_demo_project = "//div[@class='projectTile']";
	private static String link_open_demo_project = "//div[@class='projectTileVeil']";
	private static String button_import_yes = "acceptButton";
	private static String text_demo_project = "//body/div[2]/div//a[contains(text(),'Sportpaleis Ahoy Rotterdam')]";

	/**
	 * Constructor from the Abstract Class
	 * 
	 * @param driver
	 */
	public Ibis4RiskPage(WebDriver driver) {
		super(driver);
	}
	
	/**
	 * We will open the Demo project
	 * The first time we also have to import the project but after that it will just be there
	 */
	public void openDemoProject(){
		// The Demo project will always be there so this click always works
		findElementOnPage(By.xpath(link_demo_project)).click();
		// The import will only be needed the first time so we try it but we don't care if it fails!
		try{
			findElementOnPage(By.id(button_import_yes)).click();
			waitForElementPresent(By.xpath(link_open_demo_project)).click();
		} catch (Exception e){
			// Do nothing.
		}
	}

	/**
	 * Demo project is showing now
	 */
	public boolean demoProjectIsShowing(){
		try{
			findElementOnPage(By.xpath(text_demo_project));
			return true;
		} catch (Exception e){
			return false;	
		}
	}
}