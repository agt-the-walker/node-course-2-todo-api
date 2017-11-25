const {ObjectID} = require('mongodb')

const mongoose = require('../server/db/mongoose')
const Todo = require ('../server/models/todo')
const User = require ('../server/models/user')

const userId = '5a19361622f5700ee3ca368a'

User.findById(userId).then(user => {
  if (! user)
    return console.log('Id not found')
  console.log('User By Id', user)
}).catch(e => console.log(e))
