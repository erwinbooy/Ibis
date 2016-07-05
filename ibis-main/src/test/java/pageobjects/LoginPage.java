package test.java.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import test.java.helpers.PageProvider;
import test.java.users.User;

/**
 * This Page is for the login details screen that you get after you click the Sign in link
 * 
 * @author Erwin
 *
 */
public class LoginPage extends AbstractPage{

	private static String myPageUrl = "https://mijn-test.ibis.nl";

	private static String field_email = "UserName";
	private static String field_userpwd = "Password";

	private static String button_login = "id_logon";
	private static String button_doorgaan = "i-btn-okannulerenwindow-ok";
	
	private static String link_forgot_password = "wachtwoord_vergeten";
	
	private static String text_welkom = "ibis-logon-logo-text";
	private static String text_already_logged_in = "i-klant_verwijderen_window_wnd_title";

	/**
	 * Constructor from the Abstract Class
	 * 
	 * @param driver
	 */
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	/**
	 * Enter user credentials and click SignIn
	 * 
	 * Note: 
	 * - If you already have a session you will get a message which you can accept
	 * - If you are already in the application you don't get this message but the screen just shows the Overview Page
	 * 
	 */
	public void signIn(User myUser) throws Exception{
		// First check if we are on the Overview page. If so we don't have to login
		OverviewPage myPage = PageProvider.getOverviewPage();
		if (!myPage.isLoggedIn(myUser)){
			// Lets see if we can login
			trySignIn(myUser);
			try{
				// It is possible that there is already a session so lets check this
				waitForElementPresent(By.id(text_already_logged_in));
				// If we find it we click on the Doorgaan button
				findElementOnPage(By.id(button_doorgaan)).click();
			} catch (Exception nologin){
				// We didn't find it so everything is fine
			}
		}
	}
	
	private void trySignIn(User user) throws Exception{
		waitForElementPresent(By.id(field_email));
		WebElement userName = findElementOnPage(By.id(field_email));
		userName.sendKeys(user.getUserid());
		WebElement userPwd = findElementOnPage(By.id(field_userpwd));
		userPwd.sendKeys(user.getUserpwd());
		// Now press the Login button
		WebElement signInButton = findElementOnPage(By.id(button_login));
		signInButton.click();
	}
	
	// Checks if the Login page is showing
	public boolean isShowing(){
		try{
			waitForElementPresent(By.id(text_welkom));
			return true;
		} catch (Exception ex){
			// It takes too long or the element is just not present
			return false;
		}
	}
	
	public void clickForgotMyPasswordLink() throws Exception{
		waitForElementPresent(By.id(link_forgot_password));
	}

	/**
	 * Open our page
	 */
	public void OpenPage() {
		driver.get(myPageUrl);
	}
}