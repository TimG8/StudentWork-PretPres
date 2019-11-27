package PretPres;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication(scanBasePackages= {"PretPres.Models","PretPres.Controllers"})
@EnableAutoConfiguration

@ImportResource(value = "classpath:spring/application-config.xml")
public class Application {

    public static void main(String[] args)
    {
        SpringApplication.run(Application.class, args);
    }
}