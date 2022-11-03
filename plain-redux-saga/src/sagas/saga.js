import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../actions/action";

function* getUsersRequest() {
    const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'));
    const formattedUsers = yield users.json(); 
    yield put({ type: GET_USERS_SUCCESS, formattedUsers });
}

function* getUsersSaga() {
    yield takeEvery(GET_USERS_FETCH, getUsersRequest);
}

export default getUsersSaga;