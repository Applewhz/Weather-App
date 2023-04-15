import { all } from 'redux-saga/effects'
import { watchgetSelectedCountryWeatherSaga } from './weatherSaga'

export default function* rootSaga() {
    yield all([
        watchgetSelectedCountryWeatherSaga(),
    ])
}