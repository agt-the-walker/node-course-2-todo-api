const bcrypt = require('bcryptjs')

const password = '123abc!'
const hashedPassword = '$2a$10$QrpofvICFVHekIn3zQStgeFfm3Yj9yj91NvYU79KzptTmZ9Unj3IC'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})
