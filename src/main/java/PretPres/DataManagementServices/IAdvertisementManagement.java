package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;

import java.util.Collection;
import java.util.List;

public interface IAdvertisementManagement {
    Iterable<Advertisement> getAllAdvertisements();
    Collection<Advertisement> getAdvertisementsByTitle(String title);
    Collection<Advertisement> getAdvertisementsByPrice(float price);
    List<Advertisement> getAdvertisementsByUserId(long user_id);
    Advertisement add(String title, String address, String description, float price, long user_id);
    Advertisement addFull(Advertisement ad);
    Advertisement updateAdvertisement(Advertisement advertisement);
    void deleteAdvertisement(String uuid);
    void validateAdvertisement(String uuid);
}
