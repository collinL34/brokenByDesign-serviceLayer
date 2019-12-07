const express = require( 'express' );
const app = express();

app.use(express.static('public', {setHeaders: (rses, path, req) => {
    res.set('Content-Type', 'application/json')
}}));

app.get('/', ( req, res ) => {
    res.send({
        response: "Hello world"
    }).status(200);
});

app.listen(3000, () => {
    console.log( 'Listening on Port:3000' );
});