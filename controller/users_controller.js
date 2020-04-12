//_________users_controller_________


//_____________________________________
// Display Profile :GET
//_____________________________________
module.exports.profile = ('/profile', (req,res)=>{
    return res.render('profile',{
        title:'Homepage'
    });
});


//__________Render the SignIn | SignUp pages___________

//sign_in ACTION + make route for this
module.exports.signIn = (req,res)=>{
    return res.render('user_sign_in', {
		title: 'Social | Login',
	});
}


//sign_Up Action + make route for this
module.exports.signUp = (req,res)=>{
    return res.render('user_sign_up', {
		title: 'Social | Register',
	});        
}

//For Exporting Function
//module.exports.actionName = func(req,res){}