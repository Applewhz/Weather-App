import { put, takeLeading } from 'redux-saga/effects';
import axiosInstance from '../AxiosConfig';
import weatherAction from '../actions/weatherActions';
import weatherActionType from '../types/weatherType';

function* getSelectedCountryWeatherGenerator({payload}) {
    try {
        const resp = yield getSelectedCountryWeather(payload.data);
        yield put(weatherAction.getSelectedCountryWeatherSuccess(resp.data, 'SUCCESS'));
        console.log('get weather status: good', resp.data)
    } catch (error) {
        console.log('Get Selected Country Weather saga error: ', error);
        yield put(weatherAction.getSelectedCountryWeatherFailure(error, 'ERROR'));
    }
}

const getSelectedCountryWeather = async ( countryName ) => {
    return (
        // get weather data from api with user input country name
        axiosInstance.get(`/data/2.5/weather?q=${countryName}&appid=e984e3a9177dc933b34832013058d1bd&units=metric`)
    );
};

export function* watchgetSelectedCountryWeatherSaga() {
    yield takeLeading(weatherActionType.GET_WEATHER, getSelectedCountryWeatherGenerator);
}
