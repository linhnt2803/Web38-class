const initialState = {
  email: 'linhnt28031995@gmail.com',
  fullname: 'Nguyễn Thế Linh'
}

const userInfo = (state = initialState, payload) => {
  switch(payload.type) {
    case 'UI_CHANGE_EMAIL': {
      let email = payload.email
      return {
        ...state,
        email
      }
    }
    case 'UI_CHANGE_FULLNAME': {
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