package PretPres.Controllers;

import PretPres.DataManagementServices.IAdvertisementManagement;
import PretPres.DataManagementServices.IUserManagement;
import PretPres.Models.Advertisement;
import PretPres.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Blob;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/advertisement")
public class AdvertisementController {

    @Autowired
    IAdvertisementManagement adManager;

    @Autowired
    IUserManagement userManager;


    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public Iterable<Advertisement> index(Model model) {
        return adManager.getAllAdvertisements();
    }

    @PostMapping
    @RequestMapping("create")
    public Advertisement create(@RequestParam("title") String title,
                                @RequestParam("address") String address,
                                @RequestParam("description") String description,
                                @RequestParam("price") float price,
                                @RequestParam("user_id") long user_id
                                ) {
        return adManager.add(title, address, description, price, user_id, null);
    }

    @PutMapping
    @RequestMapping("update")
    public Advertisement updateAdvertisement(@RequestBody Advertisement ad) {
        return adManager.updateAdvertisement(ad);
    }

    @PutMapping
    @RequestMapping("validate")
    public Iterable<Advertisement> validateAdvertisement(@RequestParam String uuid) {
        adManager.validateAdvertisement(uuid);
        return adManager.getAllAdvertisements();
    }

    @PostMapping
    @RequestMapping("delete")
    public Iterable<Advertisement> deleteAdvertisement(@RequestParam("uuid") String uuid) {
        adManager.deleteAdvertisement(uuid);
        return adManager.getAllAdvertisements();
    }

    @PostMapping
    @RequestMapping("searchByTitle")
    public Collection<Advertisement> searchByTitle(@RequestParam("title") String title) {
        return adManager.getAdvertisementsByTitle(title);
    }

    @PostMapping
    @RequestMapping("searchByUuid")
    public Advertisement searchByUuid(@RequestParam("uuid") String uuid) {
        return adManager.getAdvertisementsByUuid(uuid);
    }

    @PostMapping
    @RequestMapping("searchByPrice")
    public Collection<Advertisement> searchByPrice(@RequestParam("price") float price) {
        return adManager.getAdvertisementsByPrice(price);
    }

    @PostMapping
    @RequestMapping("adsOfUser")
    public List<Advertisement> adsOfUser(@RequestParam("user_id") long user_id) {
        return adManager.getAdvertisementsByUserId(user_id);
    }

    @GetMapping
    @RequestMapping("validatedAdvertisements")
    public List<Advertisement> validatedAdvertisements() {
        return adManager.getAdvertisementByValidation(true);
    }

    @GetMapping
    @RequestMapping("notValidatedAdvertisements")
    public List<Advertisement> notValidatedAdvertisements() {
        return adManager.getAdvertisementByValidation(false);
    }

    @RequestMapping("feed")
    public Advertisement feedAdvertisements() {
        deleteAdvertisement("FEED-0");
        deleteAdvertisement("FEED-1");
        deleteAdvertisement("FEED-2");
        deleteAdvertisement("FEED-3");

        User user = userManager.getAllUsers().iterator().next();
        Advertisement ad = new Advertisement("Potion d'intelligence", "Château de Kaamelott", "Je vends cette potion car elle rend stupide au lieu de rendre intelligent", 458);

        ad.setUser(user);
        ad.setUuid("FEED-0");
        adManager.addFull(ad);

        ad = new Advertisement("Tuyau d'arrosage", "Olli, Échangeur, Tarkov", "Utile pour faire un récupérateur d'eau", 20000);
        ad.setUser(user);
        ad.setUuid("FEED-1");
        adManager.addFull(ad);

        ad = new Advertisement("Fromage pourri", "14 rue du Moisi", "Pour éloigner vos voisins encombrants", 12);
        ad.setUser(user);
        ad.setUuid("FEED-2");
        adManager.addFull(ad);

        ad = new Advertisement("Toblerone", "Suisse", "Une drogue efficace et plaisante", 10);
        ad.setUser(user);
        ad.setUuid("FEED-3");
        adManager.addFull(ad);

        return ad;
    }
}
