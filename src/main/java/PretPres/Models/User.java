package PretPres.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    private String password;

    private String mail;
    private String phoneNumber;
    private String firstName;
    private String name;
    private Date date;
    private String address;

    public User(String firstname,String name, String mail, String password){
        this.firstName = firstname;
        this.name = name;
        this.mail = mail ;
        this.password = password;
    }
    public User(){
    }

    public User(String password,String mail,String phoneNumber,String firstName, String name,Date date,String address) {
        this.password = password;
        this.mail = mail;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.name = name;
        this.date = date;
        this.address = address;

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
