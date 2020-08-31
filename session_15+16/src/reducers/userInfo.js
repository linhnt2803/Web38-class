import { ACTION_TYPES } from '../config'

const initialState = {
  email: 'linhnt28031995@gmail.com',
  fullname: 'Nguyễn Thế Linh'
}

const userInfo = (state = initialState, payload) => {
  switch(payload.type) {
    case ACTION_TYPES.UI_CHANGE_EMAIL: {
      let email = payload.email
      return {
        ...state,
        email
      }
    }
    case ACTION_TYPES.UI_CHANGE_FULLNAME: {
      let fullname = payload.fullname
      return {
        ...state,
        fullname
      }
    }
    default: {
      return state
    }
  }
}

export default userInfo