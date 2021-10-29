module.exports.authRequired = function(req,res,next){
    if(!req.cookies.token){
        res.redirect('/')
    }
    next()
};


 
