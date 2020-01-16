package PretPres.DataManagementServices;

import PretPres.Models.Advertisement;
import PretPres.Models.Booking;
import PretPres.Models.User;

import java.util.Date;

public interface IBookingManagement {
    public Booking addBooking(User user, Advertisement adv, Date startDate, Date startEnd);
}
