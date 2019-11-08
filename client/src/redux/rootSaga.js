import { all, call } from 'redux-saga/effects'

import { cartSagas } from './cart/cartSagas'
import { shopSagas } from './shop/shopSagas'
import { userSagas } from './user/userSagas'

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)])
}
