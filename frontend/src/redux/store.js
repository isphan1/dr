import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducers from './reducer'

//persist 

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
}


const initialState = {}

const middleware = [thunk]

// const store = createStore(
//     rootReducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )



const persistedReducer = persistReducer(persistConfig, rootReducers,initialState)

const store = createStore(
        // rootReducer,
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware))
    )

const persistor = persistStore(store)
  
export  {store,persistor}

