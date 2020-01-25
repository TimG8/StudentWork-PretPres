package PretPres.DataManagementServices;

import PretPres.Models.Category;

public interface ICategoryManagement {
    Iterable<Category> getAllCategories();
    Category addCategory(String name);
    void deleteCategory(Long id);
}
