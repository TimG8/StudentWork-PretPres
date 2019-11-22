package PretPres.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@Controller
@RequestMapping("/greeting")
public class GreetingController {

    @RequestMapping("")
    public String greeting(@RequestParam(value="name", defaultValue="World") String name,Model model) {
        model.addAttribute("name", name);
        System.out.println("here");
        return "greetingView";
    }
}