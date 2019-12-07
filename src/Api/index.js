class Database {
    constructor(attr) {
        this.collection = [];
    }
    
    conn() {
        console.log( 'your connected!!!' );
    }

    all() {
        return this.collection;
    }

    add(newEntry) {
        this.collection.push( newEntry );
        
        return this.collection;
    }

    find(refId) {
        this.collection.map(( entry ) => {
            if ( entry['email'] === refId ) {
                return entry;
            }
        })

        return { Error: 'No User found. Please Try again.' }
    }
}

module.exports = Database;