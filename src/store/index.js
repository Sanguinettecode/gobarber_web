import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSagas';
import createStore from './createStore';
import persisteReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

const middlewares = [sagaMiddleware];

const store = createStore(persisteReducers(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
