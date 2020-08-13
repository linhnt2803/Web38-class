// actions for 'userInfo'
// action = (...data) => ({ type: 'ACTION_NAME', ...payload })

const changeEmail = (email) => {
  return {
    type: 'UI_CHANGE_EMAIL',
    email
  }
}

const changeFullname = (fullname) => {
  return {
    type: 'UI_CHANGE_FULLNAME',
    fullname
  }
}

export {
  changeEmail,
  changeFullname
}