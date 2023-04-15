
import SearchBar from "../components/SearchBar/SearchBar";
import DisplayCurrentWeather from "../components/DisplayCurrentWeather/DisplayCurrentWeather";
import './WeatherPage.css';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import weatherAction from "../store/actions/weatherActions";
const WeatherPage = () => {
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(weatherAction.getSelectedCountryWeather('Singapore'))
    // },[])
    
    // const data = useSelector((state) => state.countryWeather.currentSearchCountry)
    // if (data === undefined) {
    //     return (
    //         <div><p>Still loading...</p></div>)
    // }
    // console.log('here?',data)

    return (
        <div className="WeatherPage">
            <SearchBar />
            <DisplayCurrentWeather />
        </div>
    )
}

export default WeatherPage;