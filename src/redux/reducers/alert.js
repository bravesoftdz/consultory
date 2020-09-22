import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = [];

// Recibe la accción con un estado inicial, para que mediante esa acción de un nuevo estado
export default function(state = initialState, action) {
    // Contiene el tipo y la carga de la acción
    const { type,payload } = action

    switch (type) {
        case SET_ALERT:
            // Devuelve el nuevo estado con la carga de informacion
            return [...state, payload]
        case REMOVE_ALERT: 
            return state.filter(alert => alert.id !== payload)
        default:
            return state;
    }
}