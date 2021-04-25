import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  message: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  photo: {
    type: Schema.Types.ObjectId,
    ref: 'Photo'
  }
}, {
  timestamps: true
})

const Photo = mongoose.model('Comment', commentSchema)

export default Photo