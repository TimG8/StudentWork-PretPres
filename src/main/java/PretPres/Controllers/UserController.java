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
    public Iterable<User> index(@RequestParam(value="name", defaultValue="World") String name, Model model) {
        return userManager.getAllUsers();
    }

    @PostMapping
    @RequestMapping("login")
    public User login(@RequestParam("mail") String mail,@RequestParam("password") String password){
        return userManager.getUser(mail, password);
    }

    @PostMapping
    public User create(@RequestBody User user) {
        if(userManager.getUser(user.getMail()) != null){
            return null;
        }
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
    @RequestMapping("updatePassword")
    public User updatePassword(@RequestBody User user,@RequestBody String password){
        return userManager.updatePassword(user,password);
    }

    @RequestMapping("feed")
    public User addUsers(){
        var role = roleManager.addRole("Admin");
        userManager.addUser("Romain","boisson","romain.boisson@gmail.com","Roro92!",role);
        userManager.addUser("Reynald","Barbal","reyno.barbal@gmail.com","Reyrey92!",role);
        userManager.addUser("test","Test","test@t.t","Test92!",role );
        return userManager.addUser("tomothée","Guy","timtim@guy.com","Gaygay92",role);
    }

    @DeleteMapping
    @RequestMapping("delete")
    public void deleteUser(@RequestParam("mail") String mail){
        userManager.deleteUser(mail);
    }
}