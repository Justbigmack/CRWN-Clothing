import userActionTypes from './userActionTypes'

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        isLoading: true
      }
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: null
      }
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: null
      }
    default:
      return state
  }
}

export default userReducer
