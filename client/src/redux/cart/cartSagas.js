import { takeLatest, put, all, call } from 'redux-saga/effects'

import cartActionTypes from './cartActionTypes'
import { clearCart } from './cartActions'
import { triggerNotification } from '../../components/Notification/Notification'

export function* clearShoppingCart() {
  yield put(clearCart())
  yield triggerNotification('Purchase was successful')
}

export function* notifyAboutPurchaseFailure() {
  yield triggerNotification(
    'There was an issue with your payment. Make sure you use the test CC number provided'
  )
}

export function* notifyAboutItemClear() {
  yield triggerNotification('Item was cleared')
}

export function* onPurchaseSuccess() {
  yield takeLatest(cartActionTypes.ON_PURCHASE_SUCCESS, clearShoppingCart)
}

export function* onPurchaseFailure() {
  yield takeLatest(cartActionTypes.ON_PURCHASE_FAILURE, clearShoppingCart)
}

export function* onItemClear() {
  yield takeLatest(cartActionTypes.CLEAR_ITEM, notifyAboutItemClear)
}

export function* cartSagas() {
  yield all([
    call(onPurchaseSuccess),
    call(onPurchaseFailure),
    call(onItemClear)
  ])
}
