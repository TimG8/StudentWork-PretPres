package PretPres.DataManagementServices;

import PretPres.Models.Category;
import PretPres.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CategoryManagement implements ICategoryManagement {

    @Autowired
    CategoryRepository repository;

    @Override
    public Iterable<Category> getAllCategories() {
        return repository.findAll();
    }

    @Override
    public Category addCategory(String name) {
        if (repository.findByName(name) != null) {
            return null;
        }

        Category cat = new Category();
        cat.setName(name);
        return repository.save(cat);
    }

    @Override
    public void deleteCategory(Long id) {
        Category cat = repository.findById(id).orElse(null);
        repository.delete(cat);
    }
}
