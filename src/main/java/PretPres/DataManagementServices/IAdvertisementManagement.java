package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;

import java.util.Collection;

public interface IAdvertisementManagement {
    Iterable<Advertisement> getAllAdvertisements();
    Collection<Advertisement> getAdvertisementsByTitle(String title);
    Collection<Advertisement> getAdvertisementsByPrice(float price);
    Advertisement add(Advertisement Advertisement);
    Advertisement addAdvertisement(String title, String address, String description, float price);
    Advertisement updateAdvertisement(Advertisement Advertisement);
    void deleteAdvertisement(long id);
}
