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

    @Override
    public User getUser(String mail, String password) {
        return userRepo.findByMailAndPassword(mail, password);
    }

    @Override
    public User getUser(String mail) {
        return userRepo.findByMail(mail);
    }

    @Override
    public User add(User user) {
        return userRepo.save(user);
    }

    public User addUser(String firstname, String name, String mail, String password){
        var user = new User();
        user.setFirstName(firstname);
        user.setName(name);
        user.setMail(mail);
        user.setPassword(password);
        return userRepo.save(user);
    }
}
