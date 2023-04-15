import SearchBar from "../components/SearchBar/SearchBar";
import DisplayCurrentWeather from "../components/DisplayCurrentWeather/DisplayCurrentWeather";
import { useSelector } from "react-redux";
import './WeatherPage.css';
import { useEffect, useState } from "react";

const WeatherPage = () => {
    const error = useSelector((state) => state.countryWeather.error)
    
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    useEffect(() => {
        setShowErrorMessage(true)
        setTimeout(() => {
            setShowErrorMessage(false);
        }, 3000);
    },[error])

    return (
        <div className="WeatherPage">
            <SearchBar />
            {showErrorMessage ? 
                <div>
                    <h4 style={{padding: '3px', color: 'maroon'}}>Country/City Entered is not found! Please try again!</h4> 
                </div>
            : null}
            <DisplayCurrentWeather />
        </div>
    )
}

export default WeatherPage;