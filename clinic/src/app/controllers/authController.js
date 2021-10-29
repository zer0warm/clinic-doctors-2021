const User = require('../models/User')
const jwt = require('jsonwebtoken')
class authController{
    signup(req, res, next) {
        User
            .findOne({ email: req.body.email })
            .then((users) => {
                if (users) {
                    return console.log({ msg:"Email already been taken" });
                }
                return console.log({ msg: "Email available." });
            })
            .catch((next) => {
                return console.log(next);
            });
        const {email, pass} = req.body;
        const newUser = new User({email, pass});
        newUser
            .save()
            .then(() => res.send('Signup successfully'))
            .catch(next);
    }

    signinForm(req, res, next) {
        res.render('login', {});
    }

    signin(req, res, next) {
        User.findOne({ email: req.body.email })
            .then((users) => {
                if (users) {
                    if (users.authenticate(req.body.pass)) {
                        const token = jwt.sign({_id: users._id}, process.env.JWT_SECRET_KEY, {expiresIn: '15h'})
                        // const {email, pass} = user
                        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
                            console.log(err,data)
                            if(err) res.redirect('/')
                            next()
                        })
                        res.cookie('token', token, {
                            httpOnly: true,
                            maxAge: 300000
                        })
                        // res.session.user
                        res.redirect('/doctors/show');
                    }else {
                        res.json({msg: 'invalid password'}) 
                    }
                }else {
                    res.json({msg: 'invalid email'})
                };
            })
            .catch(next);
    }
}

module.exports = new authController();
