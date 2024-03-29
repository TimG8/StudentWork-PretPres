package PretPres.Repositories;

import PretPres.Models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByMailAndPassword(String mail, String password);
    Iterable<User> findByMail(String mail);
}
