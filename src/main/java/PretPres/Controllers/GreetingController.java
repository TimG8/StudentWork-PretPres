package PretPres.Controllers;

import PretPres.Models.Greeting;
import jdk.security.jarsigner.JarSigner;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeting")
public class GreetingController {

    @RequestMapping("")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name, Model model) {

        return new Greeting(1,"test");
    }
}