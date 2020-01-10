package PretPres.DataManagementServices;

import PretPres.Models.Role;
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

    @Override
    public User addUser(String firstname, String name, String mail, String password, Role r){
        var user = new User(firstname,name,mail,password,r);
        return userRepo.save(user);
    }

    @Override
    public User updateUser(User user){
        var isReal =  userRepo.findById(user.getId());
        if(isReal.isEmpty()){
           return null;
        }

        var dbUser = isReal.get();
        dbUser.setFirstName(user.getFirstName());
        dbUser.setMail(user.getMail());
        dbUser.setName(user.getName());
        dbUser.setAddress(user.getAddress());
        dbUser.setDate(user.getDate());
        dbUser.setPhoneNumber(user.getPhoneNumber());

        return userRepo.save(user);
    }

    @Override
    public User updatePassword(User user,String password){
        var isReal =  userRepo.findById(user.getId());
        if(isReal.isEmpty()){
            return null;
        }

        var dbUser = isReal.get();
        dbUser.setPassword(user.getPassword());

        return userRepo.save(user);
    }

    @Override
    public void deleteUser(String mail){
        var user = userRepo.findByMail(mail);
        userRepo.delete(user);
    }
}
