export class User {
    firstName;
    lastName;
    email;
    password;
    confirmPassword;

    constructor(firstName = "", lastName = "", email = "", password = "", confirmPassword = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    get firstName () {
      return this.firstName;
    }

    set firstName (firstName) {
        this.firstName = firstName;
    }

    get lastName () {
        return this.lastName;
    }

    set lastName (lastName) {
        this.lastName = lastName;
    }

    get email () {
        return this.email;
    }

    set email (email) {
        this.email = email;
    }

    get password () {
        return this.password;
    }

    set password (password) {
        this.password = password;
    }

    get confirmPassword () {
        return this.confirmPassword;
    }

    set confirmPassword (confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    validate() {
        if(this.checkEqualPassword() === true &&
        this.checkFirstName() === true &&
        this.checkLastName() === true &&
        this.checkEmail() === true)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    checkEqualPassword() {

    }

    checkFirstName() {

    }

    checkLastName() {

    }

    checkEmail() {

    }
}

