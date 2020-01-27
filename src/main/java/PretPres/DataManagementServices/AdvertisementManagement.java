package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import PretPres.Models.Category;
import PretPres.Models.Picture;
import PretPres.Models.User;
import PretPres.Repositories.AdvertisementRepository;
import PretPres.Repositories.CategoryRepository;
import PretPres.Repositories.PictureRepository;
import PretPres.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.util.List;
import java.util.Optional;

@Service
public class AdvertisementManagement implements IAdvertisementManagement {

    @Autowired
    AdvertisementRepository adRepo;

    @Autowired
    UserRepository userRepo;

    @Autowired
    PictureRepository pictureRepo;

    @Autowired
    CategoryRepository catRepo;

    public AdvertisementManagement() {}

    @Override
    public Iterable<Advertisement> getAllAdvertisements() {
        return adRepo.findAll();
    }

    @Override
    public List<Advertisement> getAdvertisementsByTitle(String title) {
        return adRepo.findByTitleContaining(title);
    }

    @Override
    public List<Advertisement> getAdvertisementsByTitleAndValidated(String title) {
        return adRepo.findByTitleContainingAndValidatedTrue(title);
    }

    @Override
    public List<Advertisement> getAdvertisementsByPrice(float price) {
        return adRepo.findByPrice(price);
    }

    @Override
    public List<Advertisement> getAdvertisementsByUserId(long user_id) {
        return adRepo.findByUserId(user_id);
    }

    @Override
    public List<Advertisement> getAdvertisementByValidation(boolean validated) {
        if (validated) {
            return adRepo.findByValidatedTrue();
        }

        return adRepo.findByValidatedFalse();
    }

    @Override
    public Advertisement add(String title, String address, String description, float price, long user_id, MultipartFile pic, long category_id) {
        Optional<User> user = userRepo.findById(user_id);

        if (user.isEmpty()) {
            return null;
        }

        Optional<Category> category = catRepo.findById(category_id);

        if (category.isEmpty()) {
            return null;
        }

        Advertisement ad = new Advertisement(title, address, description, price);
        ad.setUser(user.get());
        ad.setCategory(category.get());

        if (pic != null) {
            Picture image;
            try {
                image = new Picture(ad.getUuid(), pic);
                pictureRepo.save(image);
                ad.setPic(image);
            } catch (IOException e) {
                System.out.println(e);
                return null;
            }
        }

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
        ad.setCategory(advertisement.getCategory());
        ad.setValidated(false);

        return adRepo.save(ad);
    }

    @Override
    public Advertisement getAdvertisementsByUuid(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad == null) {
            return null;
        }

        return ad;
    }

    @Override
    public void deleteAdvertisement(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad != null) {
            adRepo.delete(ad);
        }
    }

    @Override
    public Advertisement validateAdvertisement(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad != null) {
            ad.setValidated(true);
            adRepo.save(ad);
        }

        return ad;
    }

    @Override
    public Advertisement unvalidateAdvertisement(String uuid) {
        Advertisement ad = adRepo.findByUuid(uuid);

        if (ad != null) {
            ad.setValidated(false);
            adRepo.save(ad);
        }

        return ad;
    }
}
