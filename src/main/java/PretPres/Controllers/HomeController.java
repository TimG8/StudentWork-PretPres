package PretPres.Controllers;

import PretPres.DataManagementServices.IUserManagement;
import PretPres.Models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
public class HomeController {


    @RequestMapping("")
    public User home(@RequestParam(value="name", defaultValue="World") String name, Model model) {
        var user = new User();
        user.setFirstName("Faut faire des trucs avec ca ");
        return user;
    }
}