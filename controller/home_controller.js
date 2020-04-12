//_________home_controller_________

module.exports.home = ('/', (req,res)=>{
    return res.render('home',{
        title:'Homepage'
    });
});

//For Exporting Function
//module.exports.actionName = func(req,res){}