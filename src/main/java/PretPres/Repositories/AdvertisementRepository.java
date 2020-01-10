package PretPres.Repositories;

import PretPres.Models.Advertisement;
import PretPres.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AdvertisementRepository extends CrudRepository<User, Long> {
    //Collection<Advertisement> findByTitle(String title);
    //Collection<Advertisement> findByPrice(float price);
}
