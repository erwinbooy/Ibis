package test.java.step_definitions;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import test.java.helpers.PageProvider;
import test.java.helpers.TestUser;
import test.java.pageobjects.LoginPage;
import test.java.pageobjects.OverviewPage;
import test.java.users.User;

/**
 * This class contains the steps that are needed for login in and out
 * @author Erwin
 */
public class LoginSteps{
	
	private User myUser = new User();
	
	@Given("^Gegeven dat ik ingelogged ben$") 
	public void Gegeven_in_ingelogged_ben() throws Throwable {
		LoginPage loginPage = PageProvider.getLoginPage();
		loginPage.OpenPage();
		User myUser = TestUser.getTestUser();
		loginPage.signIn(myUser);
	}

	@Given("^Gegeven ik op de login pagina ben$")
	public void Wanneer_ik_de_login_pagina_open() throws Throwable {
		LoginPage loginPage = PageProvider.getLoginPage();
		loginPage.OpenPage();
		// If you are already in the application you won't get the login screen but the overview screen
		// So for this step we must first logout in that situation before we can see the login page
		OverviewPage overviewPage = PageProvider.getOverviewPage();
		if(overviewPage.isLoggedIn(myUser)){
			overviewPage.logout();
			// Now the login page should show again
		}
		assertTrue(loginPage.isShowing());
	}

	@And("^En ik log in$")
	public void En_ik_log_in() throws Throwable {
		// For the poc we just create a user here
		myUser.setUserid("e.booij@ibis.nl");
		myUser.setUserpwd("S@ndr@12345");
		myUser.setUsername("Erwin Booij");
		LoginPage loginPage = PageProvider.getLoginPage();
		loginPage.signIn(myUser);
	}

	@And("^En ik log uit$")
	public void En_ik_log_uit() throws Throwable {
		OverviewPage overviewPage = PageProvider.getOverviewPage();
		overviewPage.logout();
	}
	
	@Then("^Dan zie ik de welkoms pagina$")
	public void Dan_zie_ik_de_welkom_pagina() throws Throwable{
		OverviewPage overviewPage = PageProvider.getOverviewPage();
		assertTrue(overviewPage.isLoggedIn(myUser));
	}
	
	@Then("^Dan zie ik de login pagina$")
	public void Dan_zie_ik_de_login_pagina() throws Throwable{
		LoginPage loginPage = PageProvider.getLoginPage();				
		assertTrue(loginPage.isShowing());
	}
}
