class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
        if (nameRegex.test(name))
            this._name = name;
        else return "Name is incorrect";
    }

    get profileImage() {
        return this._profileImage;
    }

    set profileImage(profileImage) {
        this._profileImage = profileImage;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get notes() {
        return this._notes;
    }

    set notes(note) {
        this._notes = note;
    }

    get startdate() {
        return this._startdate;
    }

    set startdate(startdate) {
        let now = new Date();
        if (startdate > now) {
            throw 'Start Date is Future date!';
        }
        var diff = Math.abs(now.getTime() - startdate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw "Start Date is beyond 30 days";
        this._startdate = startdate;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startdate ? "undefined" :
            this.startdate.toLocaleDateString("en-US", options);
        return  'ID = ' + this.id + 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfileImage = " + this.profileImage
            + ", Department = " + this.department + ", Salary = " + this.salary +
            ", StartDate = " + empDate + ", Note = " + this.notes;
    }
}