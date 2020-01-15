package PretPres.DataManagementServices;

import PretPres.Models.Role;
import PretPres.Repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleManagement implements IRoleManagement {

    @Autowired
    RoleRepository roleRepo;

    public RoleManagement(){}

    @Override
    public Role addRole(String name) {
        return roleRepo.save(new Role(name)) ;
    }

    @Override
    public Role getRole(Long id) {
        return roleRepo.findById(id).get();
    }

    @Override
    public Role getRoleUser() {
        return roleRepo.findByName("User");
    }
}
