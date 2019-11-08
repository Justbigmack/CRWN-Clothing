import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions'
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils'
import shopActionTypes from './shopActionTypes'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
