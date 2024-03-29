package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import PretPres.Models.Category;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IAdvertisementManagement {
    Iterable<Advertisement> getAllAdvertisements();
    List<Advertisement> getAdvertisementsByTitle(String title);
    List<Advertisement> getAdvertisementsByTitleAndValidated(String title);
    List<Advertisement> getAdvertisementsByPrice(float price);
    List<Advertisement> getAdvertisementsByUserId(long user_id);
    List<Advertisement> getAdvertisementByValidation(boolean validated);
    Advertisement add(String title, String address, String description, float price, long user_id, MultipartFile pic, long category_id);
    Advertisement addFull(Advertisement ad);
    Advertisement updateAdvertisement(Advertisement advertisement);
    Advertisement getAdvertisementsByUuid(String uudi);
    void deleteAdvertisement(String uuid);
    Advertisement validateAdvertisement(String uuid);
    Advertisement unvalidateAdvertisement(String uuid);
}
