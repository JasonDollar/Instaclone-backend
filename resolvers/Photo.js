import User from '../models/User.js'

const Photo = {
  user: async (parent) => {
    // console.log(parent.user)
    return User.findById(parent.user)
  }
}

export default Photo