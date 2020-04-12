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




//exporting router
module.exports = router;