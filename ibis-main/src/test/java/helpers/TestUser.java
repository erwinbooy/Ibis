package test.java.helpers;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import test.java.users.User;

/**
 * Class to read the file with test data The file itself is excluded from the
 * repository for security reasons
 * 
 * @author Erwin
 *
 */
public class TestUser {

	// The program runs from the /bin/ so that is our user.dir
	private static String running_dir = System.getProperty("user.dir");
	private static String testuser_file = null;

	private static Log logger = LogFactory.getLog("Article Writer");

	/**
	 * This method will get all the articleUrls from the database
	 * 
	 * @return List<String> with articleUrls
	 */
	public static User getTestUser() {
			BufferedReader dbReader = null;
			String line = null;
			String fields[] = null;
			User myUser = null;
			try {
				testuser_file = running_dir + "\\testuser.csv";
				System.out.println("File should be at this location: " + testuser_file);
				dbReader = new BufferedReader(new FileReader(testuser_file));
				while ((line = dbReader.readLine()) != null) {
					fields = line.split(",");
					myUser = new User();
					myUser.setUserid(fields[0]);
					myUser.setUserpwd(fields[1]);
					myUser.setUsername(fields[2]);
				}
			} catch (IOException ioe) {
				logger.error(ioe);
			} finally {
				try {
					dbReader.close();
				} catch (Exception e) {
					logger.warn("Exception while trying to close the file reader");
				}
			}
			return myUser;
	}
}
