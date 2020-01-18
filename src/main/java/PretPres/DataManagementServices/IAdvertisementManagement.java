package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Blob;
import java.util.List;

public interface IAdvertisementManagement {
    Iterable<Advertisement> getAllAdvertisements();
    List<Advertisement> getAdvertisementsByTitle(String title);
    List<Advertisement> getAdvertisementsByPrice(float price);
    List<Advertisement> getAdvertisementsByUserId(long user_id);
    List<Advertisement> getAdvertisementByValidation(boolean validated);
    Advertisement add(String title, String address, String description, float price, long user_id, MultipartFile pic);
    Advertisement addFull(Advertisement ad);
    Advertisement updateAdvertisement(Advertisement advertisement);
    void deleteAdvertisement(String uuid);
    void validateAdvertisement(String uuid);
}
