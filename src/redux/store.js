// Crear una tienda de estados
import { createStore,applyMiddleware } from 'redux'
// Utilizar la extesion de devTools
import { composeWithDevTools } from 'redux-devtools-extension'
// Nos ayudaras con disparar funciones asincronas de nuestras acciones
import thunk from 'redux-thunk'
// Son los que reciben el comportamiento de una acción y nos devuelven un nuevo estado
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store