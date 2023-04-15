import weatherActionType from "../types/weatherType";

const weatherAction = {
    getSelectedCountryWeather: (data) => ({
        type: weatherActionType.GET_WEATHER,
        payload: {
            data
        },
    }),

    getSelectedCountryWeatherSuccess: (data, status) => ({
        type: weatherActionType.GET_WEATHER_SUCCESS,
        payload: {
            data,
            status
        }
    }),

    getSelectedCountryWeatherFailure: (error, status) => ({
        type: weatherActionType.GET_WEATHER_FAILURE,
        payload: {
            error,
            status
        }
    })

}

export default weatherAction;