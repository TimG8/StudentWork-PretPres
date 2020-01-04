package PretPres.DataManagementServices;

import PretPres.Models.User;

public interface IUserManagement {
    public Iterable<User> getAllUsers();
    public User getUser(String mail, String password);
    public User getUser(String mail);
    public User add(User user);
    public User addUser(String firstname, String name, String mail, String password);
}
