package PretPres.Repositories;

import PretPres.Models.Advertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertisementRepository extends CrudRepository<Advertisement, Long> {
    List<Advertisement> findByTitleContaining(String title);
    List<Advertisement> findByTitleContainingAndValidatedTrue(String title);
    List<Advertisement> findByPrice(float price);
    List<Advertisement> findByUserId(long user_id);
    List<Advertisement> findByValidatedTrue();
    List<Advertisement> findByValidatedFalse();
    Advertisement findByUuid(String uuid);
}
