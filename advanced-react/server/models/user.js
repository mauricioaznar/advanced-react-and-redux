const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isValid) => {
    if (err) { return callback(err) }
    console.log(isValid)
    callback(null, isValid)
  })
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this
  try {
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8, null)
    }
  } catch (e) {
    console.log(e)
  }

  next()
})


// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass