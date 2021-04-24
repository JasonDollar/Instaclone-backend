import axios from 'axios'
import Photo from '../models/Photo.js'
import User from '../models/User.js'
import { apiKeyPhotos } from '../secret.js'

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKeyPhotos}&count=${1}`

const Query = {
  photos: async () => {
    const res = await axios(apiUrl)
    const { data } = res
    console.log(data)
    // photosArray = await res.json()
    return data
  },
  getPhoto: async (parent, { photoId }, ctx, info) => {
    const photo = await Photo.findById(photoId)

    return photo
  },
  getUser: async (parent, { userId }, ctx, info) => {
    const user = await User.findById(userId)
    console.log(user)
    return user
  }
}

export default Query