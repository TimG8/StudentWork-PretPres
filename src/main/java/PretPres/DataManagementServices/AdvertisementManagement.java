package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import PretPres.Models.User;
import PretPres.Repositories.AdvertisementRepository;
import PretPres.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class AdvertisementManagement implements IAdvertisementManagement {

    @Autowired
    AdvertisementRepository adRepo;

    @Autowired
    UserRepository userRepo;

    public AdvertisementManagement() {}

    @Override
    public Iterable<Advertisement> getAllAdvertisements() {
        return adRepo.findAll();
    }

    @Override
    public Collection<Advertisement> getAdvertisementsByTitle(String title) {
        return adRepo.findByTitleContaining(title);
    }

    @Override
    public Collection<Advertisement> getAdvertisementsByPrice(float price) {
        return adRepo.findByPrice(price);
    }

    @Override
    public List<Advertisement> getAdvertisementsByUserId(long user_id) {
        return adRepo.findByUserId(user_id);
    }

    @Override
    public Advertisement add(String title, String address, String description, float price, long user_id) {
        Optional<User> user = userRepo.findById(user_id);

        if (user.isEmpty()) {
            return null;
        }

        Advertisement ad = new Advertisement(title, address, description, price);
        ad.setUser(user.get());

        return adRepo.save(ad);
    }

    @Override
    public Advertisement addFull(Advertisement ad) {
        return adRepo.save(ad);
    }

    @Override
    public Advertisement updateAdvertisement(Advertisement advertisement) {
        Advertisement ad = adRepo.findByUuid(advertisement.getUuid());

        if (ad == null) {
            return null;
        }

        ad.setTitle(advertisement.getTitle());
        ad.setAddress(advertisement.getAddress());
        ad.setDescription(advertisement.getDescription());
        ad.setPrice(advertisement.getPrice());
        ad.setUuid(advertisement.getUuid());

        return adRepo.save(ad);
    }

    @Override
    public void deleteAdvertisement(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad != null) {
            adRepo.delete(ad);
        }
    }

    @Override
    public void validateAdvertisement(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad != null) {
            ad.setValidated(true);
            adRepo.save(ad);
        }
    }
}
