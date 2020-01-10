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
}
