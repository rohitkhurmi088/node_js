//essesntials Local -capital (as per passportjs)
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 

//importing model
const User = require('../models/user');

//________:::SignIn:::Authentication (USING Passport.js)____________

/* 2 fileds to authenticate: email,password
   email =unique :usernameField
   done = callback_func -inbuild to password -takes 2 Parameters */

   passport.use(new LocalStrategy({
    //usernameField- unique in models(2 users cant have same email)
    usernameField: 'email',
},function(email,password,done){  
    //Find user & establish the Identity
    User.findOne({email: email} ,function(err,user){
        //if error
        if(err){
            console.log('error in finding user -->passport');
            return done(err); //done =  callback_func
        }
        //if Invalid UserName/password
        if(!user || user.password != password){
            console.log('Invalid Username/Password');
            //null=>no error , false=>authentication false
            return done(null, false); 
        }
        //if User found- pass the user
        //Passport returns the user to serializer
        return done(null, user);
    });
   }
));


//____________________Serializing & Deserializing ____________________
/* SERIALIZING: In manual-Authentication ur taking out user.id (to encrypt) & putting it into the cookie.
 DESERIALIZING: When cookie is sent back to the server to establish the identity of the user 
                we use that user.id to find the user. */               
    
// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    //store user.id in encrypted format in cookies
    return done(null, user.id);
});

// deserializing the user from the key(id) in the cookies
passport.deserializeUser(function(id, done){
    //find user by id
    User.findById(id, function(err,user){
        //if error
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        //if user found
        return done(null,user);
    });
});


//_________________________________________________________________________________________

//Exporting passport module
module.exports = passport;