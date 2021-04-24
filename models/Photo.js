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
  }
}, {
  timestamps: true
})

const Photo = mongoose.model('Photo', photoSchema)

export default Photo