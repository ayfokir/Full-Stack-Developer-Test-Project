require( 'dotenv' ).config();
//.env lela folder wust kehoneche  require( 'dotenv' ).config({path: __dirname + ' /.env'});
const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
// const routes = require('./routes')    
const sanitize = require( 'sanitize' )
// const corsOption = {
//     origin: process.env.FRONTEND_URL,
//     optionSuccessStatus: 200,
// };         
// app.use( cors( corsOption ) )    
app.use(cors());
    
app.use( express.json() )    
app.use( sanitize.middleware );

// app.use( routes );
//wode sira kemegebatu befit script or lelam kale ke file wust remove madereg nw
 const port = process.env.PORT;
app.listen( port, ( err ) =>
{
    console.log(`Server Running at http://localhost:${port}`)
} )


