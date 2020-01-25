package PretPres.Controllers;


import PretPres.DataManagementServices.ICategoryManagement;
import PretPres.Models.Category;
import PretPres.Models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    ICategoryManagement catManager;

    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public Iterable<Category> index() {
        return catManager.getAllCategories();
    }

    @PostMapping
    @RequestMapping("add")
    public Category addCategory(@RequestParam("name") String name){
        return catManager.addCategory(name);
    }

    @PostMapping
    @RequestMapping("delete")
    public Iterable<Category> deleteCategory(@RequestParam("id") Long id){
        catManager.deleteCategory(id);
        return catManager.getAllCategories();
    }

    @RequestMapping("feed")
    public Category defaultCat(){
        catManager.addCategory("Défaut");
        return catManager.addCategory("Jardin");
    }
}
