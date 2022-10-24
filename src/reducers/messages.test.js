import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message: 'Hello',
      author: 'Giwa'
    })).toEqual([
      {
        message: 'Hello',
        author: 'Giwa'
      }
    ])

    expect(messages(
      [
        {
          message: 'Hello',
          author: 'Giwa'
        }
      ],
      {
        type: types.ADD_MESSAGE,
        message: 'Hello again',
        author: 'Giwa here'
      }
    )).toEqual([
      {
        message: 'Hello',
        author: 'Giwa'
      },
      {
        message: 'Hello again',
        author: 'Giwa here'
      }
    ])
  })
})
