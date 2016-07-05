package test.java.step_definitions;

import static org.junit.Assert.assertTrue;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import test.java.helpers.PageProvider;
import test.java.pageobjects.Ibis4RiskPage;
import test.java.pageobjects.OverviewPage;

/**
 * This class contains the steps that are needed for loggin in and out
 * @author Erwin
 */
public class Ibis4RiskSteps{

	@Given("^Wanneer ik naar Ibis4Risk ga$")
	public void Wanneer_ik_naar_ibis_main_ga() throws Throwable {
		OverviewPage overviewPage = PageProvider.getOverviewPage();
		overviewPage.clickIbis4Risk();
		assertTrue(overviewPage.driver.getCurrentUrl().equals("https://ibis-4risk-staging.azurewebsites.net/"));
	}

	@And("^En ik het Ibis4Risk demo project open$")
	public void En_ik_het_Ibis4Risk_demo_project_open() throws Throwable {
		Ibis4RiskPage myPage = PageProvider.getIbis4RiskPage();
		myPage.openDemoProject();
	}

	@Then("^Dan zie ik het Ibis4Risk demo project$")
	public void Dan_zie_ik_het_demo_project() throws Throwable {
		Ibis4RiskPage myPage = PageProvider.getIbis4RiskPage();
		assertTrue(myPage.demoProjectIsShowing());
	}
}
