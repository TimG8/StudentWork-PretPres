package PretPres.Controllers;

import PretPres.Models.User;
import PretPres.DataManagementServices.IUserManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    IUserManagement userManager;

    @RequestMapping("")
    public Iterable<User> index(@RequestParam(value="name", defaultValue="World") String name, Model model) {
        userManager.addUser("Romain","boisson");
        userManager.addUser("Reynamd","Barbal");
        userManager.addUser("tomothée","Guy");
        Iterable<User> allUser =userManager.getAllUsers();
        return allUser;
    }
}