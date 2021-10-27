const User = require('../models/User')
const jwt = require('jsonwebtoken')

class authController{
    signup(req, res, next) {
        User.findOne({email: req.body.email})
          .then((users) => {
            if (users) {
                return console.log({ msg:"Email already been taken" });
            }
            return console.log({ msg: "Email available." });
          })
          .catch((next) => {
            return console.log(next);
          })
          const {email, pass} = req.body
          const newUser = new User({email, pass})
          newUser
            .save()
            .then(() => res.send('Signup successfully'))
            .catch(next)
      }
    signin(req, res, next){
        User.findOne({email: req.body.email})
            .then((users) => {
                if(users){
                    if(users.authenticate(req.body.pass)){
                        const jwttoken = jwt.sign({_id: users._id}, process.env.JWT_SECRET, {expiresIn: '15h'})
                        res.json({
                            jwttoken,
                        })
                        res.send('Signin Successfully')
                    }return res.json({msg: 'invalid password'})
            }   
        })  .catch(next)
    }
}
module.exports = new authController();
