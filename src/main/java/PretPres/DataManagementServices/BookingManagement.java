package PretPres.DataManagementServices;

import PretPres.Models.*;
import PretPres.Repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class BookingManagement implements IBookingManagement {
    @Autowired
    BookingRepository bookRepo;

    public BookingManagement(){ }

    public Booking addBooking(User user, Advertisement adv, Date startDate, Date startEnd){
        return bookRepo.save(new Booking(user, adv, startDate, startEnd));
    }
}
