package PretPres.Repositories;

import PretPres.Models.Advertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AdvertisementRepository extends CrudRepository<Advertisement, Long> {
    Collection<Advertisement> findByTitleContaining(String title);
    Collection<Advertisement> findByPrice(float price);
    Advertisement findByUuid(String uuid);
}
