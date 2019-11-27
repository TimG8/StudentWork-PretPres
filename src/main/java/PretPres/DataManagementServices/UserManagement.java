package PretPres.DataManagementServices;

import PretPres.Models.User;
import PretPres.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManagement implements IUserManagement {
    @Autowired
    UserRepository userRepo;

    public UserManagement() {}

    public Iterable<User> getAllUsers()
    {
        return userRepo.findAll();
    }
    public User addUser(String firstname, String name){
        var user = new User();
        user.setFirstName(firstname);
        user.setName(name);
        return userRepo.save(user);
    }
}
