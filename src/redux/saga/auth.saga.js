import { all, call, put, takeEvery } from 'redux-saga/effects'
import { FORGET_REQUEST, SIGNIN_REQUEST, SIGNUP_REQUEST } from '../ActionType'
import { forgetAPI, signinAPI, signupAPI } from '../../common/api/auth.api'
import { authError, forgetResponse, signinResponse, signupResponse } from '../action/auth.action'
import { setAlert } from '../slice/alert.slice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions:-
function* signUpUser(action) {
    console.log("jjjj");
    try {
        const user = yield call(signupAPI, action.payload)
        console.log(user);
        yield put(signupResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
        console.log(e);
    }
}

function* signInUser(action) {
    console.log("signin");
    try {
        const user = yield call(signinAPI, action.payload)
        console.log(user);
        yield put(signinResponse(user.user))
        yield put(setAlert({ text: user.message, color: 'success' }))
    } catch (e) {
        yield put(authError(e.message))
        yield put(setAlert({ text: e.message, color: 'error' }))
        console.log(e);
    }
}

function* forgetUser(action) {
    console.log(action);
    try {
        const user = yield call(forgetAPI, action.payload)
        console.log(user);
        yield put(forgetResponse(user.user))
    } catch (e) {
        yield put(authError(e.message))
        console.log(e);
    }
}


// Watcher Function :-
function* watchSaga() {
    yield takeEvery(SIGNUP_REQUEST, signUpUser)
    yield takeEvery(SIGNIN_REQUEST, signInUser)
    yield takeEvery(FORGET_REQUEST, forgetUser)
}

export function* authSaga() {
    yield all([
        watchSaga()
    ])
}
