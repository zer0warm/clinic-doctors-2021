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
        if (req.cookies.token) {
            res.redirect('/dashboard');
        } else {
            res.render('login', {});
        }
    }

    signin(req, res, next) {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user) {
                    if (user.authenticate(req.body.pass)) {
                        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '4h'})
                        // const {email, pass} = user
                        // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
                        //     if(err) {
                        //         //console.log(err);
                        //     }
                        //     next(data);
                        // });
                        res.cookie('token', token, {
                            httpOnly: true,
                            maxAge: 14400000
                        })
                        // res.session.user
                        res.redirect('/dashboard');
                    }else {
                        res.json({msg: 'invalid password'});
                    }
                }else {
                    res.json({msg: 'invalid email'});
                }
            })
            .catch(next);
    }

    signout(req, res, next) {
        res.clearCookie('token');
        res.redirect('/');
    }
}

module.exports = new authController();
