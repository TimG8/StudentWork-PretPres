package PretPres.Controllers;

import PretPres.Models.User;
import PretPres.DataManagementServices.IUserManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

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

    @RequestMapping("feed")
    public User addUsers(){
        userManager.addUser("Romain","boisson","romain.boisson@gmail.com","roro");
        userManager.addUser("Reynald","Barbal","reyno.barbal@gmail.com","reyrey");
        userManager.addUser("test","Test","test","test");
        return userManager.addUser("tomothée","Guy","timtim@guy.com","gaygay");
    }

    @DeleteMapping
    @RequestMapping("delete")
    public void deleteUser(@RequestParam("mail") String mail){
        userManager.deleteUser(mail);
    }
}