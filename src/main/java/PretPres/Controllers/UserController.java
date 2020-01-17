package PretPres.Controllers;

import PretPres.DataManagementServices.IRoleManagement;
import PretPres.Models.Role;
import PretPres.Models.User;
import PretPres.DataManagementServices.IUserManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    IRoleManagement roleManager;
    @Autowired
    IUserManagement userManager;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public Iterable<User> index() {
        return userManager.getAllUsers();
    }

    @PostMapping
    @RequestMapping("login")
    public User login(@RequestParam("mail") String mail,@RequestParam("password") String password){
        return userManager.getUser(mail, password);
    }

    @PostMapping
    @RequestMapping("register")
    public User create(@RequestBody User user) {
        if(userManager.getUser(user.getMail()) != null){
            return null;
        }
        Role role = roleManager.getRoleUser();
        user.setRole(role);
        userManager.add(user);
        return user;
    }

    @PutMapping
    @RequestMapping("update")
    public User updateUser(@RequestBody User user){
        return userManager.updateUser(user);
    }

    @PutMapping
    @RequestMapping("updateName")
    public User updateName(@RequestParam("id") Long id,@RequestParam("name") String name){
        return userManager.updateName(id,name);
    }

    @PutMapping
    @RequestMapping("updateFirstName")
    public User updateFirstName(@RequestParam("id") Long id,@RequestParam("firstName") String firstName){
        return userManager.updateFirstName(id,firstName);
    }

    @PutMapping
    @RequestMapping("updatePassword")
    public User updatePassword(@RequestParam("id") Long id,@RequestParam("password") String password){
        return userManager.updatePassword(id,password);
    }

    @PutMapping
    @RequestMapping("updateMail")
    public User updateMail(@RequestParam("id") Long id,@RequestParam("mail") String mail){
        return userManager.updateMail(id,mail);
    }

    @RequestMapping("feed")
    public User addUsers(){
        var role = roleManager.addRole("Admin");
        var role2 = roleManager.addRole("User");
        userManager.addUser("Rominou","boisson","rominou.boisson@gmail.com","Roro92!",role);
        userManager.addUser("Reynald","Barbal","reyno.barbal@gmail.com","Reyrey92!",role);
        userManager.addUser("test","Test","test@t.t","Test92!",role2 );
        return userManager.addUser("tomothée","Guy","timtim@guy.com","Gaygay92",role);
    }

    @PostMapping
    @RequestMapping("delete")
    public Iterable<User> deleteUser(@RequestParam("id") Long id){
        userManager.deleteUser(id);
        return userManager.getAllUsers();
    }
}