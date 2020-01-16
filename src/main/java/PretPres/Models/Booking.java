package PretPres.Models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Advertisement adv;

    @ManyToOne
    private User user;

    private Date startingDate;
    private Date endingDate;
    private Boolean validate;

    public Booking(User u, Advertisement ad,  Date startDate, Date endDate){
        this.adv = ad;
        this.user = u;
        this.startingDate = startDate;
        this.endingDate = endDate;
        this.validate = false;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Advertisement getAdv() {
        return adv;
    }

    public void setAdv(Advertisement adv) {
        this.adv = adv;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getStartingDate() {
        return startingDate;
    }

    public void setStartingDate(Date startingDate) {
        this.startingDate = startingDate;
    }

    public Date getEndingDate() {
        return endingDate;
    }

    public void setEndingDate(Date endingDate) {
        this.endingDate = endingDate;
    }

    public Boolean getValidate() {
        return validate;
    }

    public void setValidate(Boolean validate) {
        this.validate = validate;
    }
}
