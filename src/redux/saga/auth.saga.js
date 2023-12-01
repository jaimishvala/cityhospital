import { all, call, put, takeEvery } from 'redux-saga/effects'
import { SIGNIN_REQUEST, SIGNUP_REQUEST } from '../ActionType'
import { signinAPI, signupAPI } from '../../common/api/auth.api'
import { authError, signinResponse, signupResponse } from '../action/auth.action'
import { setAlert } from '../slice/alert.slice';


function* signupUser(action) {
    console.log("jjjj");
    try {
        const user = yield call(signupAPI, action.payload)
        console.log(user);
        yield put(signupResponse(user.user))
        yield put (setAlert({text: user.message, color: 'success'}))
    } catch (e) {
        yield put(authError(e.message))
        console.log(e);
    }
}

function* watchsignup() {
    yield takeEvery(SIGNUP_REQUEST, signupUser)
}

function* signinUser(action) {
    console.log("signin");
    try {
        const user = yield call(signinAPI, action.payload)
        console.log(user);
        yield put(signinResponse(user.user))
    } catch (e) {
        yield put(authError(e.message))
        console.log(e);
    }
}

function* watchsignin() {
    yield takeEvery(SIGNIN_REQUEST, signinUser)
}

export function* authSaga() {
    yield all([
        watchsignup(),
        watchsignin()
    ])
}
