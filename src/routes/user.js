const userSorter = require('../utils/userSorter')

const users = [
  { name: 'Naomi', score: 35, id: 4 },
  { name: 'Alex', score: 32, id: 1 },
  { name: 'Nina', score: 24, id: 3 },
  { name: 'Matt', score: 21, id: 2 }
]

module.exports = {
  postUser: (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    userSorter(users)
    return res.send(users.slice(0, 5)).status(201)
  },
  getUsers: (req, res) => {
    return res.send(users.slice(0, 5)).status(200)
  }
}
