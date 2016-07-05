package test.java;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * This class contains the tests for a user with Profile 1
 * The CucumberOptions are needed for the Jenkins build to create nice reporting
 * 
 * @author Erwin
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/resources/features", format = {"pretty","html:target/cucumber","json:target/cucumber.json"})
public class TestAll {
	// No code needed here
	// This tests executes all the features in the profiles directory
}