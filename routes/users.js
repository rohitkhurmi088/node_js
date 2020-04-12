//_____________ profile router______________
const express = require('express');
const router = express.Router();

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
router.post('/create', usersController.create);

//_create User login-Session__(Post: signIn in form)
router.post('/create-session', usersController.createSession);


//__Destroy-session____(signOut (link in header) from profile)
router.get('/sign-out', usersController.destroySession);

//exporting router
module.exports = router;