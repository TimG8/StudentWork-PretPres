package PretPres.Models;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.io.IOException;

@Entity
public class Picture {
    @Id
    private String id;

    @Lob
    private byte[] image;

    public Picture (){
    }

    public Picture(String id, MultipartFile pic) throws IOException {
        this.id = id;
        this.image = pic.getBytes();

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
