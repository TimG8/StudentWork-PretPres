package PretPres.DataManagementServices;

import PretPres.Models.Role;
import PretPres.Models.User;

public interface IUserManagement {
    Iterable<User> getAllUsers();
    Iterable<User> findUsers(String mail);
    User getUser(String mail, String password);
    User getUser(String mail);
    User getUser(Long id);
    User add(User user);
    User addUser(String firstname, String name, String mail, String password, Role r);
    User updateUser(User user);
    User updatePassword(User user, String password);
    User updatePassword(Long id, String password);
    User updateName(Long id, String name);
    User updateMail(Long id, String mail);
    User updateFirstName(Long id, String firstName);
    void deleteUser(Long id);
}
