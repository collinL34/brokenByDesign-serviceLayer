const Address = require( '../Address' );
// const Project = require( '../Project' );
class User {
    constructor(attributes) {
        this.firstName = attributes['firstNamee']
        this.lastName = attributes['lastName']
        this.address =  new Address(attributes['address'])
        this.phoneNumber =  attributes['phoneNumber']
        this.email =  attributes['phoneNumber']
        this.password =  attributes['password']
    }

    usersProjects() {
        // TODO: Enable connecting user to thier projects
        return null;
    }
}

module.exports = User;