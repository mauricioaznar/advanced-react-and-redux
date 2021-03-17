const User = require('../models/user')
const jwt = require('jwt-simple')
const config = require('../config')

function tokenForUser(user) {
  const timestamp = new Date().getTime()
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

exports.signup = async function (req, res, next){
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    return res.status(422).send('Provide an email and password plz')
  }

  // See if a user with the given email exists
  try {
    const user = await User.findOne({email: email})
    if (user) {
      return res.status(500).send('User already exists')
    }
    const newUser = new User({
      email: email,
      password: password
    })

    await newUser.save()

    return res.json({token: tokenForUser(newUser)})

  } catch (e){
    return res.status(500).send('Error server')
  }
}

exports.signin = async function (req, res, next) {
  // User has already had their email and pasword auth'd
  // We just need to give them a token
  res.send({token: tokenForUser(req.user)})
}