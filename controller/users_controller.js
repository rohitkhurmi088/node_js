//_________users_controller_________
//importing user model
const User =require('../models/user');

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
    //Authorization
	//if user is signed-up always redirect to profile page
	//using req.isAuthenticated()
	if (req.isAuthenticated()) {
		return res.redirect('/users/profile');
	}
    return res.render('user_sign_in', {
		title: 'Social | Login',
	});
}


//sign_Up Action + make route for this
module.exports.signUp = (req,res)=>{
    //Authorization
	//if user is signed-In always redirect to profile page
    //using req.isAuthenticated()
    /*all routes after '/' user will redirect*/
	if (req.isAuthenticated()) {
		return res.redirect('/users/profile');
	}
    return res.render('user_sign_up', {
		title: 'Social | Register',
	});        
}


//________________________________________________________________________
//_____________ SIGN UP (Register new user) _______________________________
/*Create New User -Get signUp data (Register)
/users/create = action rom signUp form */
module.exports.create = (req, res) => {
	//If password & confirm password dont matches redirect back-signUp page
	if (req.body.password != req.body.confirm_password) {
		//console.log('Password does not matches');
		req.flash('error', 'Passwords do not match');
		return res.redirect('back');
	}

	//check email -has to be unique for each user
	//findOne()- find user by email
	User.findOne({ email: req.body.email }, (err, user) => {
		if (err) {
			//console.log('error in finding user(by email) in signUp');
			return;
		}

		//if user is not found -create() user using User Model
		//if user is already present - redirect back to signUp page
		//req.body = name,email,password
		if (!user) {
			User.create(req.body, (err, user) => {
				//if error
				if (err) {
					console.log('error in creating user while signUp');
				}
				//if not error = user is created --> then redirect to signIn page
				return res.redirect('/users/sign-in');
			});
		} else {
			//if user is already present -redirect back to signUp page
			return res.redirect('back');
		}
	});
};
//_____________________________________________________________________________

//________________________________________________________________________
//signIn existing user + create-session (Login)
//________________________________________________________________________
module.exports.createSession = (req, res) => {

	//redirect to Homepage
	return res.redirect('/');
};







//For Exporting Function
//module.exports.actionName = func(req,res){}