import * as types from '../constants/ActionTypes'

let nextMessageId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: Math.floor(Math.random() * 1000),
  message,
  author
})

export const addUser = name => ({
  type: types.ADD_USER,
  id:  Math.floor(Math.random() * 1000),
  name
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})