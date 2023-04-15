
import SearchHistoryTable from '../SearchHistoryTable/SearchHistoryTable';
import './DisplayCurrentWeather.css';
// import cloudImage from '../../assets/cloud.png'
import sunImage from '../../assets/sun.png'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherAction from '../../store/actions/weatherActions';

const DisplayCurrentWeather = (props) => {


    const data = useSelector((state) => state.countryWeather.currentSearchCountry)

    const [test, setTest] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(weatherAction.getSelectedCountryWeather('Singapore'))
    },[dispatch])

    useEffect(() => {
        setTest(data)
    },[data])

    const DataForSearchHistory = [
        {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
        // {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        // {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        // {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
        // {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        // {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        // {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
        // {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        // {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        // {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
        // {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        // {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        // {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
        // {id: 1, country: 'Singapore', timeDate: '01-09-2022-0900'},
        // {id: 2, country: 'Malaysia', timeDate: '01-09-2022-0900'},
        // {id: 3, country: 'Thailand', timeDate: '01-09-2022-0900'},
    ]

        while(!test || test.length < 1){
            console.log('coming here')
            return <div><p>Still loading...</p></div>
        }
        return (
            <div className="DisplayCurrentWeather">
                <div className='HeaderWeatherInfomation'>
                    <div style={{marginBottom: '10px'}}>
                        <h3 style={{marginBottom: '18px'}}>Today's Weather</h3>
                        <h1>{(test[0].main.temp).toFixed(1)}°</h1>
                        <p style={{fontWeight: 'bold'}}>H: {(test[0].main.temp_max).toFixed(1)}  L: {(test[0].main.temp_min).toFixed(1)}</p>
                    </div>
                    <img className='WeatherIcon' src={sunImage} alt=''/>
                </div>
                    <div className='localCountryInformationBar'>
                    <p>{test[0].name},{test[0].sys.country}</p>
                    <p>{test[1].date}  {test[1].time}</p>
                    <p>{test[0].main.humidity}%</p>
                    <p>{test[0].weather[0].main}</p>
                    </div>
                <SearchHistoryTable historyData={DataForSearchHistory}/>
            </div>
        )
    // }
}

export default DisplayCurrentWeather