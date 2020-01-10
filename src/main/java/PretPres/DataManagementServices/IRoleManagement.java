package PretPres.DataManagementServices;

import PretPres.Models.Role;

public interface IRoleManagement {
    public Role addRole(String name);
    public Role getRole(Long id);
}
