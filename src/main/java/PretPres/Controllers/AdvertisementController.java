package PretPres.Controllers;

import PretPres.DataManagementServices.IAdvertisementManagement;
import PretPres.Models.Advertisement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/advertisement")
public class AdvertisementController {

    @Autowired
    IAdvertisementManagement adManager;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public Iterable<Advertisement> index(Model model) {
        return adManager.getAllAdvertisements();
    }

    @PostMapping
    @RequestMapping("create")
    public Advertisement create(@RequestParam("title") String title, @RequestParam("address") String address, @RequestParam("description") String description, @RequestParam("price") float price) {
        return adManager.add(title, address, description, price);
    }

    @PutMapping
    @RequestMapping("update")
    public Advertisement updateAdvertisement(@RequestBody Advertisement ad) {
        return adManager.updateAdvertisement(ad);
    }

    @DeleteMapping
    @RequestMapping("delete")
    public String deleteAdvertisement(@RequestParam("uuid") String uuid) {
        adManager.deleteAdvertisement(uuid);
        return "Deleted advertisement with uuid : " + uuid;
    }

    @GetMapping
    @RequestMapping("searchByTitle")
    public Collection<Advertisement> searchByTitle(@RequestParam("title") String title) {
        return adManager.getAdvertisementsByTitle(title);
    }

    @GetMapping
    @RequestMapping("searchByPrice")
    public Collection<Advertisement> searchByPrice(@RequestParam("price") float price) {
        return adManager.getAdvertisementsByPrice(price);
    }

    @RequestMapping("feed")
    public Advertisement addAdvertisements() {
        Advertisement ad = new Advertisement("Potion d'intelligence", "Château de Kaamelott", "Je vends cette potion car elle rend stupide au lieu de rendre intelligent", 458);
        ad.setUuid("FEED-0");
        adManager.addFull(ad);

        ad = new Advertisement("Tuyau d'arrosage", "Olli, Échangeur, Tarkov", "Utile pour faire un récupérateur d'eau", 20000);
        ad.setUuid("FEED-1");
        adManager.addFull(ad);

        ad = new Advertisement("Fromage pourri", "14 rue du Moisi", "Pour éloigner vos voisins encombrants", 12);
        ad.setUuid("FEED-2");
        adManager.addFull(ad);

        ad = new Advertisement("Toblerone", "Suisse", "Une drogue efficace et plaisante", 6);
        ad.setUuid("FEED-3");
        adManager.addFull(ad);

        return ad;
    }
}
