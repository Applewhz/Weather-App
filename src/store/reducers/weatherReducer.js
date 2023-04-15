import weatherActionType from "../types/weatherType";
import { v4 as uuid } from 'uuid';

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
                currentSearchCountry: [action.payload.data, {date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}],
                searchCountryHistory: [{id:uuid(), countryName: action.payload.data.name , date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}, ...state.searchCountryHistory],
                loading: false,
            };
        case weatherActionType.GET_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case weatherActionType.REMOVE_SELECTED_SEARCHED_HISTORY_ENTRY:
            state.currentSearchCountry.fliter(item => item.id !== action.payload)
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};

export default weatherReducer;