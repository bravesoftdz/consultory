import { ADD_CLIENT, DELETE_CLIENT, GET_CLIENTS, UPDATE_CLIENT } from "../actions/types";

const initialState = {
    clients: []
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_CLIENTS:
            return {
                clients: payload
            }
        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, payload]
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map(client =>
                    client.id === payload ? (client = payload) : client
                )
            }
        case DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(client => client._id !== payload)
            }
        default:
            return state;
    }
}