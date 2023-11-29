import { all, call, put, takeEvery } from 'redux-saga/effects'
import { AUTH_ERROR, SIGNUP_REQUEST, SIGNUP_RESPONSE } from '../ActionType'
import { singupAPI } from '../../common/api/auth.api'


function* signupUser(action) {
    try {
        const user = yield call(singupAPI, action.payload)
        yield put({ type: SIGNUP_RESPONSE, user: user })
    } catch (e) {
        yield put({ type: AUTH_ERROR, message: e.message })
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