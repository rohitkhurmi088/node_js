const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 6001;

const expressLayouts = require('express-ejs-layouts');
const ejs = require('ejs');
const bodyParser = require('body-parser');


//__________EXPRESS setup___________________
const app = express();
// turn off limits by default (BE CAREFUL)
require('events').EventEmitter.prototype._MaxListeners=0;

//__________Middleware_______________________

//main-middleware

//body parser
app.use(express.json()); //json data
app.use(express.urlencoded({ extended:false })); //form data


//------------TEMPELATE ENGINE:: EJS--------------------//
//including css-static files(assets)
app.use(express.static('assets'));

//for layouts -put before routes
app.use(expressLayouts);
//extract style +script from subpages into layout
//Eg: including home.ejs-css file in layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//ejs template engine + directory path
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,'views'));
app.set('views', './views');

//__________RENDER EJS templates___________________
/* templates renderd using controllers via router
   conntrollers --> fileName.js */

//_________________ROUTES_____________________________
//router for routes/index.js - ohter routes follow main route
const routes = require('./routes/index');
app.use('/',routes);
//console.log('router loaded');

//________________PORT calling_________________________
app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Express_Server running on port: ${PORT}`);
});