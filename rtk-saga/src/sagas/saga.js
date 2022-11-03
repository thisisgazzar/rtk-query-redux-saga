import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersSuccess } from "../features/userSlice";

function* getUsersRequest() {
    const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'));
    const formattedUsers = yield users.json(); 
    yield put(getUsersSuccess(formattedUsers)) 
}

export function* getUsersSaga(action) {
    yield takeEvery('users/getUsersFetch', getUsersRequest)
}
