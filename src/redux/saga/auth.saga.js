import { all, call, takeEvery } from 'redux-saga/effects'
import { SIGNUP_REQUEST } from '../ActionType'
import { singupAPI } from '../../common/api/auth.api'


function* signupUser(action) {
    try {
        const user = yield call(singupAPI, action.payload)
        // yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
    } catch (e) {
        // yield put({ type: 'USER_FETCH_FAILED', message: e.message })
    }
}

function* watchsignup() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
}

export function* authSaga() {
    yield all([
        watchsignup()
    ])
}

export default authSaga