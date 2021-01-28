import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import markers from './markers/markersReducer';

const persistConfig = { key: 'root', storage, whitelist: ['markers'] };

const rootReducer = combineReducers({ markers });

export default persistReducer(persistConfig, rootReducer);
