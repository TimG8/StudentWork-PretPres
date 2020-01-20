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
    public Iterable<User> findUsers(String mail) {
        return null;
    }

    @Override
    public User getUser(String mail, String password) {
        return userRepo.findByMailAndPassword(mail, password);
    }

    @Override
    public User getUser(String mail) {
        if(userRepo.findByMail(mail).iterator().hasNext()){
            return userRepo.findByMail(mail).iterator().next();
        }
        return null;
    }

    @Override
    public User getUser(Long id) {
        return userRepo.findById(id).orElse(null);
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

        return userRepo.save(dbUser);
    }

    @Override
    public User updatePassword(User user,String password){
        var isReal =  userRepo.findById(user.getId());
        if(isReal.isEmpty()){
            return null;
        }

        var dbUser = isReal.get();
        dbUser.setPassword(user.getPassword());

        return userRepo.save(dbUser);
    }

    @Override
    public User updatePassword(Long id, String password) {
        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }
        var dbUser = isReal.get();
        dbUser.setPassword(password);
        return userRepo.save(dbUser);
    }

    @Override
    public User updateAddress(Long id, String address) {
        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }
        var dbUser = isReal.get();
        dbUser.setAddress(address);
        return userRepo.save(dbUser);
    }

    @Override
    public User updatePhone(Long id, String phone) {
        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }
        var dbUser = isReal.get();
        dbUser.setPhoneNumber(phone);
        return userRepo.save(dbUser);
    }

    @Override
    public User updateName(Long id, String name) {
        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }

        var dbUser = isReal.get();
        dbUser.setName(name);

        return userRepo.save(dbUser);
    }

    @Override
    public User updateMail(Long id, String mail) {
        boolean singleMail = true;

        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }

        for(User user : userRepo.findByMail(mail)){
            if(user.getMail().equals(mail) && user.getId() != id){
                singleMail = false;
                break;
            }
        }
        if(!singleMail){
            return null;
        }

        var dbUser = isReal.get();
        dbUser.setMail(mail);

        return userRepo.save(dbUser);


    }

    @Override
    public User updateFirstName(Long id, String firstName) {
        var isReal =  userRepo.findById(id);
        if(isReal.isEmpty()){
            return null;
        }

        var dbUser = isReal.get();
        dbUser.setFirstName(firstName);

        return userRepo.save(dbUser);
    }

    @Override
    public void deleteUser(Long id){
        var user = userRepo.findById(id).orElse(null);
        userRepo.delete(user);
    }
}
