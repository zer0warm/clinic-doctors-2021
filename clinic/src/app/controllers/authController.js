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
            .then((user) => {
                if (user) {
                    if (user.authenticate(req.body.pass)) {
                        //const jwttoken = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '15h'})
                        res.redirect('/doctors/show');
                    }
                } else {
                    res.json({msg: 'invalid password'});
                }
            })
            .catch(next);
    }
}

module.exports = new authController();
