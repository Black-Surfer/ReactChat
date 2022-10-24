import { addMessage, addUser } from '../actions'
import * as types from '../constants/ActionTypes'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Good day'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'dev',
      id: 0
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Good day'
    const action = {
      type: types.ADD_MESSAGE,
      message,
      author: 'dev',
      id: 1
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'dev 2'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'john'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})
