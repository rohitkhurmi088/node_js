//_______Router for Posts_________
const express = require('express');
const router = express.Router();


//importing Post controller
const postsController = require('../controller/posts_controller');


//______CREATE Post(POST:form-->home.ejs)_______________________________
router.post('/create', postsController.create);







//exporting router
module.exports = router;