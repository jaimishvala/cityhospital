import { all, call, put, takeEvery } from 'redux-saga/effects'
import { FORGET_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST } from '../ActionType'
import { forgetAPI, logOutAPI, loginAPI, signupAPI } from '../../common/api/auth.api'
import { authError, forgetResponse, logOut, loginResponse, signupResponse } from '../action/auth.action'
import { setAlert } from '../slice/alert.slice';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions:-
function* signUpUser(action) {
    console.log("jjjj");
    try {
        const user = yield call(signupAPI, action.payload);
        console.log(user);
        yield put(signupResponse(user.user));
        yield put(setAlert({ text: user.message, color: 'success' }));
    } catch (e) {
        yield put(authError(e.message));
        yield put(setAlert({ text: e.message, color: 'error' }));
        console.log(e);
    }
}

function* loginUser(action) {
    console.log("login");
    try {
        const user = yield call(loginAPI, action.payload.data);
        console.log(user);
        yield put(loginResponse(user.user));
        yield put(setAlert({ text: user.message, color: 'success' }));
        action.payload.callback("/");
    } catch (e) {
        yield put(authError(e.message));
        yield put(setAlert({ text: e.message, color: 'error' }));
        console.log(e);
    }
}

function* forgetUser(action) {
    console.log("forgetUser");
    try {
        const user = yield call(forgetAPI, action.payload);
        // console.log(user);
        // yield put(forgetResponse(user.user));
        yield put(setAlert({ text: user.message, color: 'success' }));
    } catch (e) {
        yield put(authError(e.message));
        yield put(setAlert({ text: e.message, color: 'error' }));
        console.log(e);
    }
}

function* logOutUser(action) {
    console.log(action);
    try {
        const user = yield call(logOutAPI);
        console.log(user);
        yield put(logOut(user.user));
        yield put(setAlert({ text: user.message, color: 'success' }));
    } catch (e) {
        yield put(authError(e.message));
        yield put(setAlert({ text: e.message, color: 'error' }));
        console.log(e);
    }
}


// Watcher Function :-
function* watchSaga() {
    yield takeEvery(SIGNUP_REQUEST, signUpUser);
    yield takeEvery(LOGIN_REQUEST, loginUser);
    yield takeEvery(FORGET_REQUEST, forgetUser);
    yield takeEvery(LOGOUT_REQUEST, logOutUser);
}

export function* authSaga() {
    yield all([
        watchSaga()
    ])
}
