import { combineReducers, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
AsyncStorage
 
import User from './reducers/UsersReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'
 
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}
 
const persistedReducer = persistReducer(persistConfig, combineReducers({User}))
 
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}