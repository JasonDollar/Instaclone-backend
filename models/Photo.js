import mongoose from 'mongoose'

const Schema = mongoose.Schema

const photoSchema = new Schema({
  description: {
    type: String
  },
  mediaUrl: {
    type: String
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {
  timestamps: true
})

const Photo = mongoose.model('Photo', photoSchema)

export default Photo