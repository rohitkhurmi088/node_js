//_____________ profile router______________
const express = require('express');
const router = express.Router();

//requiring passport 
const passport = require('passport');


//__________________profile (Authorization)___________________________
const usersController = require('../controller/users_controller');

//**** Display: GET Profile ****/
router.get('/profile', usersController.profile);


/*
::NOTE:: use '/' here & use '/profile' in router->index.js ie main router for '/'
*/

//_____signUp & signIn(FORM)routes__________________
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


//_____create User________(Post: signUp in form)
router.post('/create', usersController.create)

//_____create-session_____(Post: signIn in form)
/*Session created using Passport:Middleware-3 parameters
  Using Passport as a middleware TO Authenticate
  passport.authenticate('local',{failureRedirect:'/users/sign-in'})
  'local' :passport-strategy Name -contains user if the user is Authenticated(Signed-In)
  if authentication not done call: '/users/sign-in'
  if authentication done call:usersControlller.createSession */

router.post('/create-session', passport.authenticate(
  'local',{failureRedirect:'/users/sign-in'}), usersController.createSession);
//‘local’ will contain ‘user’ If the user is signed-In (Authenticated)


//exporting router
module.exports = router;