const express = require( 'express' );
const app = express();
const Db = require( './Api' );
const DbInstance = new Db();
const User = require( './User' );

app.use(express.static('public', {setHeaders: (rses, path, req) => {
    res.set('Content-Type', 'application/json')
}}));

app.get('/', ( req, res ) => {
    res.send({
        response: "Hello world"
    }).status(200);
});

app.get('/user', ( req, res ) => {
    const user = DbInstance.find( req['email'] );

    if ( user['Error'] ) {
        res.send( user ).status( 500 );
    } else {
        res.send( user ).status( 500 );
    }
})

app.get('/users/new', ( req, res ) => {
    res.send({
        firstName: null,
        lastName: null,
        address: null, 
        phoneNumber: null, 
        email: null, 
        password: null
    }).status( 200 );
})

app.post('/users/create', ( req, res ) => {
    res.send( req ).status( 200 );
})

app.listen(1496, () => {
    console.log( 'Listening on Port:3000' );
});