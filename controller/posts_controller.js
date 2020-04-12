//importing Post model
const Post = require('../models/post');




//________________________________________________________________________
//creating controller to CREATE POST -->module.exports.create
//_________________________________________________________________________
/* content form the FORM :req.body.content (content => present in Schema)
    <textarea name="content" > passed in form to create post
   User form the database using id: req.user.id
   user/locals.user -->available using passport authentication */

module.exports.create = (req,res)=>{
     //creating post
     Post.create({
        //content,user: schema object
        content:req.body.content, 
        user:req.user._id //._id = userID in database
    }, function(err,post){
        //if post is not created
        if(err){
            Console.log('Error in creating a new post');
            return;
        }
        //if post is created -->redirect back to same page
        return res.redirect('back');
    });
}
















//________________________________________________________________________
//creating controller to DELETE POST -->module.exports.destroy
//_________________________________________________________________________