import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import banners from './banner'
import clients from './client'

export default combineReducers({
    alert,
    auth,
    banners,
    clients
})