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






//exporting router
module.exports = router;