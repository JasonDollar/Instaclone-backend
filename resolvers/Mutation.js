import Photo from '../models/Photo.js'
import User from '../models/User.js'

const Mutation = {
  addUser: (parent, { data }, ctx, info) => {
    const { username, email, password } = data
    const newUser = new User({
      username,
      email, 
      password
    })

    return newUser.save()
  },
  addPhoto: async () => {
    const newPhoto = new Photo({
      description: 'test',
      mediaUrl: 'https://yt3.ggpht.com/a/AATXAJzyxBwjQ1C5dKOa1S7fIEp1q2iucD3kMlmtWw=s900-c-k-c0xffffffff-no-rj-mo',
      user: '60847494558d1937bcc0dc17'
    })

    return newPhoto.save()
  }
}

export default Mutation