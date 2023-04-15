import { HistoryCard } from "../HistoryCard/HistoryCard"
import { useSelector } from "react-redux";
import './SearchHistoryTable.css';

const SearchHistoryTable = (props) => {

    // const data = props.historyData
    const searchHistory = useSelector((state) => state.countryWeather.searchCountryHistory)
    console.log(searchHistory)
    const renderHistoryCard = (dataForHistory) => {
        if(dataForHistory.length > 0){
            return (
                dataForHistory.map((data, key) => 
                <div key={key}>
                    <HistoryCard 
                        countryName={data.countryName} 
                        time={data.time} 
                        date={data.date}
                    /> 
                </div>
                )
            )
        }else {
            return <h2>Your Search History is Empty</h2>
        }
    }

    return (
        <div className="SearchHistoryOverview">
            <h4>Search History</h4>
            {renderHistoryCard(searchHistory)}
        </div>
    )
}

export default SearchHistoryTable
    