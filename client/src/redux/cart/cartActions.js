import cartActionTypes from './cartActionTypes'

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART
})

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItem = item => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item
})

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
})

export const purchaseSuccess = message => ({
  type: cartActionTypes.ON_PURCHASE_SUCCESS,
  payload: message
})

export const purchaseFailure = errorMessage => ({
  type: cartActionTypes.ON_PURCHASE_FAILURE,
  payload: errorMessage
})
