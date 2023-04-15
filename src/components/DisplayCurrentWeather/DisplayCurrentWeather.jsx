import SearchHistoryTable from '../SearchHistoryTable/SearchHistoryTable';
import './DisplayCurrentWeather.css';
import cloudImage from '../../assets/cloud.png'
import sunImage from '../../assets/sun.png'
import { useSelector } from "react-redux";

const DisplayCurrentWeather = () => {
    
    const data = useSelector((state) => state.countryWeather.currentSearchCountry)

        return (
            <div className="DisplayCurrentWeather">
            {data.length > 0 ? 
                <>
                    <div className='HeaderWeatherInfomation'>
                            <div style={{marginBottom: '10px'}}>
                                <h3 style={{marginBottom: '18px'}}>Today's Weather</h3>
                                <h1>{(data[0].main.temp).toFixed(1)}°</h1> 
                                <p style={{fontWeight: 'bold'}}>H: {(data[0].main.temp_max).toFixed(1)}  L: {(data[0].main.temp_min).toFixed(1)}</p>
                            </div>
                            <img className='WeatherIcon' src={data[0].weather[0].main === 'Clouds' ? cloudImage : sunImage} alt=''/>
                    </div>
                    <div className='localCountryInformationBar'>
                        <p>{data[0].name},{data[0].sys.country}</p>
                        <p>{data[1].date}  {data[1].time}</p>
                        <p>{data[0].main.humidity}%</p>
                        <p>{data[0].weather[0].main}</p>
                    </div>
                </>
            :   <>
                    <div className='HeaderWeatherInfomation'>
                        <div style={{marginBottom: '10px'}}>
                            <h3 style={{marginBottom: '18px'}}>Today's Weather</h3>
                        </div>
                    </div>
                    <div className='localCountryInformationBar'></div>
                </>
            }
                <SearchHistoryTable />
            </div>
        )
}

export default DisplayCurrentWeather