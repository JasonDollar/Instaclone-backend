import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please, add a name'],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please, add an email'],
    trim: true,
    lowercase: true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
      'Please add a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please, provide a password'],
    minlength: [8, 'Password need to be at least 8 characters long'],
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    },
  },
  photos: [{
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  }]

}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User