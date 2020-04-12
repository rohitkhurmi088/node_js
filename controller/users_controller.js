//_________users_controller_________


//_____________________________________
// Display Profile :GET
//_____________________________________
module.exports.profile = ('/profile', (req,res)=>{
    return res.render('profile',{
        title:'Homepage'
    });
});

//For Exporting Function
//module.exports.actionName = func(req,res){}