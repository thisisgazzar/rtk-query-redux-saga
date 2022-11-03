import {
    configureStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import usersReducer from "../features/userSlice";


export default function configureStoreFunction() {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...configureStore({
            reducer: {
                users: usersReducer
            },
            middleware: [sagaMiddleware]
        }),
        runSaga: sagaMiddleware.run,
    }
}