import { ADD_BANNER, DELETE_BANNER, GET_BANNERS, UPDATE_BANNER } from "../actions/types";

const initialState = {
    banners: []
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {
        case GET_BANNERS:
            return {
                banners: payload
            }
        case ADD_BANNER:
            return {
                ...state,
                banners: [...state.banners, payload]
            }
        case UPDATE_BANNER:
            return {
                ...state,
                banners: state.banners.map(banner =>
                    banner.id === payload ? (banner = payload) : banner
                )
            }
        case DELETE_BANNER:
            return {
                ...state,
                banners: state.banners.filter(banner => banner._id !== payload)
            }
        default:
            return state;
    }
}