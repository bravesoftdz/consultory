import { GET_CLIENTS, GET_CLIENTS_ERROR, ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from './types'

import axios from 'axios'

let token = localStorage.getItem('token')
const config = {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}

export const getClients = () => async dispatch => {
    try {
        const res = await axios.get('/api/clients')
        dispatch({
            type: GET_CLIENTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_CLIENTS_ERROR
        })
    }
}

export const createClient = (data) => async dispatch => {
    try {
        const res = await axios.post(`/api/clients/`, data, config);
        dispatch({
            type: ADD_CLIENT,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const editClient = (id, banner) => async dispatch => {
    try {
        const res = await axios.put(`/api/clients/${id}`, banner, config);
        dispatch({
            type: UPDATE_CLIENT,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteClient = (id) => async dispatch => {
    try {
        const res = await axios.delete(`/api/clients/${id}`,config);
        dispatch({
            type: DELETE_CLIENT,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}