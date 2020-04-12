//_________home_controller_________

//importing Post Model
const Post = require('../models/post');


module.exports.home = (req,res)=>{

    /***______{cookies}____****
    //priniting cookies in console
    console.log(req.cookies);
    //Altering cookie value
    res.cookie('user_rk', 27); */
    
    //____________________________________________ 
    //____Displaying Posts by user on homepage_____
   //______________________________________________
   /* Model.Find({}, func(err, parameter){}) */
    //Post.find({}, function(err,posts){
        //return res.render('home',{
            title:'Homepage',
           //posts:posts //displaying posts
        //});
    //});

    //__________With POPULATING(user object)__________________
    /*Displaying Post created user by name,email--> in home.ejs
      Pre-Populating reffered user object  using mongoose.populate
      Populating: used to get user object :name,email,password
      from another schema (User) in the current Schema (Post)
    Model.find({}).populate('object to get('object-from-anotherSchema').exec(callback func)*/

    Post.find({}).populate('user').exec(function(err, posts){
        return res.render('home', {
            title:'HomePage',
            posts: posts //displaying posts
        })
    }); 
   
}

//For Exporting Function
//module.exports.actionName = func(req,res){}