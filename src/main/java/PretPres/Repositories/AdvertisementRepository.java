package PretPres.Repositories;

import PretPres.Models.Advertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface AdvertisementRepository extends CrudRepository<Advertisement, Long> {
    Collection<Advertisement> findByTitleContaining(String title);
    Collection<Advertisement> findByPrice(float price);
    List<Advertisement> findByUserId(long user_id);
    Advertisement findByUuid(String uuid);
}
