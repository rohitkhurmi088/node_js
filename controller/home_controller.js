//_________home_controller_________

module.exports.home = ('/', (req,res)=>{


    /***______{cookies}____****
    //priniting cookies in console
    console.log(req.cookies);
    //Altering cookie value
    res.cookie('user_rk', 27); */

    return res.render('home',{
        title:'Homepage'
    });
});

//For Exporting Function
//module.exports.actionName = func(req,res){}