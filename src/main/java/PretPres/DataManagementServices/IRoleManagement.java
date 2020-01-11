package PretPres.DataManagementServices;

import PretPres.Models.Role;

public interface IRoleManagement {
    Role addRole(String name);
    Role getRole(Long id);
}
