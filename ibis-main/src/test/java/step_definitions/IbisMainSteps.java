package test.java.step_definitions;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.java.helpers.PageProvider;
import test.java.pageobjects.IbisMainPage;
import test.java.pageobjects.OverviewPage;

/**
 * This class contains the steps that are needed for loggin in and out
 * @author Erwin
 */
public class IbisMainSteps{

	@When("^Wanneer ik naar Ibis Main ga$")
	public void Wanneer_ik_naar_ibis_main_ga() throws Throwable {
		OverviewPage overviewPage = PageProvider.getOverviewPage();
		overviewPage.clickIbisMain();
		assertTrue(overviewPage.driver.getCurrentUrl().equals("https://main-test.ibis.nl/"));
	}

	@And("^En ik het IbisMain demo project open$")
	public void En_ik_het_IbisMain_demo_project_open() throws Throwable {
		IbisMainPage myPage = PageProvider.getIbisMainPage();
		myPage.openDemoProject();
	}

	@Then("^Dan zie ik het IbisMain demo project$")
	public void Dan_zie_ik_het_IbisMain_demo_project() throws Throwable {
		IbisMainPage myPage = PageProvider.getIbisMainPage();
		assertTrue(myPage.demoProjectIsShowing());
	}
}
