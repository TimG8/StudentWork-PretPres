package PretPres.Controllers;

import PretPres.Models.User;
import PretPres.DataManagementServices.IUserManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    IUserManagement userManager;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public Iterable<User> index(@RequestParam(value="name", defaultValue="World") String name, Model model) {
        Iterable<User> allUser =userManager.getAllUsers();
        return allUser;
    }


    @RequestMapping(path = {"login/{mail}/{password}"} )
    public User login(@PathVariable("mail") String mail, @PathVariable("password") String password){
        return userManager.getUser(mail, password);
    }


    @RequestMapping("todelete")
    public User addUsers(Model model){
        userManager.addUser("Romain","boisson","romain.boisson@gmail.com","roro");
        userManager.addUser("Reynald","Barbal","reyno.barbal@gmail.com","reyrey");
        return userManager.addUser("tomothée","Guy","timtim@guy.com","gaygay");
    }

}