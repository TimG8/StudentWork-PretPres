package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;

import java.util.Collection;

public interface IAdvertisementManagement {
    Iterable<Advertisement> getAllAdvertisements();
    Collection<Advertisement> getAdvertisementsByTitle(String title);
    Collection<Advertisement> getAdvertisementsByPrice(float price);
    Advertisement add(String title, String address, String description, float price);
    Advertisement addFull(Advertisement ad);
    Advertisement updateAdvertisement(Advertisement advertisement);
    void deleteAdvertisement(String uuid);
}
