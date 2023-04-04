import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import allReducers from '../reducer/businessDetailReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['businessDetail']
};

const rootReducer = combineReducers({
    businessDetail: persistReducer(persistConfig, allReducers)
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
