import Photo from '../models/Photo.js'

const User = {
  photos: async (parent, args, ctx, info) => {
    console.log(parent)
    return Photo.find({ user: parent.id })
  }
}

export default User