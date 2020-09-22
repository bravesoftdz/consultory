import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, AUTH_SUCCESS, AUTH_ERROR} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: {
        id: '',
        username: ''
    }
}

export default function(state=initialState, action) {

    const { type, payload } = action
    console.log(payload)
    switch (type) {
        case AUTH_SUCCESS: 
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                loading: false,
                user: {
                    id: payload.id,
                    username: payload.username
                }
            }
        case SIGNIN_SUCCESS:
            localStorage.setItem('token',payload.token)
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                loading: false,
                user: {
                    id: payload.id,
                    username: payload.username
                }
            }
        case AUTH_ERROR:
        case SIGNIN_ERROR: 
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...payload,
            }
        case SIGNUP_ERROR:
            return {
                ...state
            }
        default:
            return state;
    }
}