package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import PretPres.Repositories.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class AdvertisementManagement implements IAdvertisementManagement {

    @Autowired
    AdvertisementRepository adRepo;

    public AdvertisementManagement() {}

    @Override
    public Iterable<Advertisement> getAllAdvertisements() {
        return null;
    }

    @Override
    public Collection<Advertisement> getAdvertisementsByTitle(String title) {
        return null;
    }

    @Override
    public Collection<Advertisement> getAdvertisementsByPrice(float price) {
        return null;
    }

    @Override
    public Advertisement add(Advertisement Advertisement) {
        return null;
    }

    @Override
    public Advertisement addAdvertisement(String title, String address, String description, float price) {
        return null;
    }

    @Override
    public Advertisement updateAdvertisement(Advertisement Advertisement) {
        return null;
    }

    @Override
    public void deleteAdvertisement(long id) {

    }
}
