class Address {
    constructor(attributes) {
        this.streetAddress =  attributes['streetAddress']
        this.streetAddressTwo =  attributes['streetAddressTwo']
        this.city =  attributes['city']
        this.state =  attributes['state']
        this.zipCode =  attributes['zipCode']
    }
};

module.exports = Address;