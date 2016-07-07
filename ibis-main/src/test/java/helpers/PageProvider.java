package test.java.helpers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import test.java.pageobjects.Ibis4RiskPage;
import test.java.pageobjects.IbisMainPage;
import test.java.pageobjects.LoginPage;
import test.java.pageobjects.OverviewPage;

/**
 * This class makes it easier to get pages
 * So any page that is added should also get a method here
 * 
 * @author ebooij
 *
 */
public class PageProvider {

	private static WebDriver driver = null;
	private static boolean browser = false;

	public static LoginPage getLoginPage() {
		return new LoginPage(driver);
	}

	public static IbisMainPage getIbisMainPage() {
		return new IbisMainPage (driver);
	}

	public static OverviewPage getOverviewPage() {
		return new OverviewPage(driver);
	}

	public static Ibis4RiskPage getIbis4RiskPage() {
		return new Ibis4RiskPage(driver);
	}

	/**
	 * Init the driver and maximize the window
	 * Also set the browser to true for the general hook
	 */
	public static void init() {
		driver = new FirefoxDriver();
		System.out.println("FireFox run");
		driver.manage().window().maximize();
		browser = true;
	}

	public static void tearDown() {
		driver.quit();
		browser = false;
	}
	
	/**
	 * See if the browser is already running
	 * @return
	 */
	public boolean isBrowserRunning(){
		return browser;
	}
}
