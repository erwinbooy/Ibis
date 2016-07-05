package test.java.users;

/**
 * Simple DTO to store user information
 * 
 * @author Erwin
 */
public class User {

	private String username = null;
	private String userpwd = null;
	private String userid = null; // email address

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserpwd() {
		return userpwd;
	}

	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}
}
