const express = require( 'express' );
const app = express();
const Db = require( './Api' );
const DbInstance = new Db();
const User = require( './User' );
const PORT = 1496;
const HOST = '0.0.0.0';

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

if ( process.env.NODE_ENV === 'test' ) {
    app.listen( 3000 )
    console.log( `Listening on PORT: http://${HOST}:${PORT}` );
} else {
    app.listen( PORT )
    console.log( `Listening on PORT: http://${HOST}:${PORT}` );
}
