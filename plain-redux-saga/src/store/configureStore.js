import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from '../reducers/reducer';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const reducers = combineReducers({ users });

    return {
        ...createStore(
            reducers,
             applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run,
    }
}