import weatherActionType from "../types/weatherType";

const initialState = {
    searchCountryHistory: [],
    currentSearchCountry: [],
    loading: false,
    error: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weatherActionType.GET_WEATHER:
            return {
                ...state,
                loading: true,
            };
        case weatherActionType.GET_WEATHER_SUCCESS:
            return {
                ...state,
                currentSearchCountry: action.payload.data,
                searchCountryHistory: [action.payload.data, ...state.searchCountryHistory],
                loading: false,
            };
        case weatherActionType.GET_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default weatherReducer;