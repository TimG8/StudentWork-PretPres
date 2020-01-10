package PretPres.DataManagementServices;

import PretPres.Models.Role;
import PretPres.Models.User;

public interface IUserManagement {
    public Iterable<User> getAllUsers();
    public User getUser(String mail, String password);
    public User getUser(String mail);
    public User add(User user);
    public User addUser(String firstname, String name, String mail, String password, Role r);
    public User updateUser(User user);
    public User updatePassword(User user, String password);
    public User updateName(Long id, String name);
    public void deleteUser(String mail);
}
