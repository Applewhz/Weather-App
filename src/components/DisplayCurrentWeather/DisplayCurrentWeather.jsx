
import SearchHistoryTable from '../SearchHistoryTable/SearchHistoryTable';
import './DisplayCurrentWeather.css';
import cloudImage from '../../assets/cloud.png'
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
    },[])

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
// <p>{data.name},{data.sys.country}</p>
//                 <p>current time and date</p>
//                 <p>{data.main.humidity}%</p>
//                 <p>{data.weather[0].main}</p>
    console.log(test)
    if (data === undefined) {
        return (
            <div><p>Still loading...</p></div>)
    }else{
        return (
            <div className="DisplayCurrentWeather">
                <div className='HeaderWeatherInfomation'>
                    <div style={{marginBottom: '10px'}}>
                        <h3 style={{marginBottom: '18px'}}>Today's Weather</h3>
                        <h1>26°</h1>
                        <p>high and low</p>
                    </div>
                    <img className='WeatherIcon' src={sunImage} />
                </div>
                    <div className='localCountryInformationBar'>

                    </div>
                <SearchHistoryTable historyData={DataForSearchHistory}/>
            </div>
        )
    }
}

export default DisplayCurrentWeather