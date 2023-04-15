import { HistoryCard } from "../HistoryCard/HistoryCard"
import './SearchHistoryTable.css';

const SearchHistoryTable = (props) => {

    const data = props.historyData
    const renderHistoryCard = (dataForHistory) => {
        return dataForHistory.map((data) => 
        <div key={data.id}>
            <HistoryCard 
                 countryName={data.country} 
                 timeDate={data.timeDate} 
             /> 
        </div>
        )
    }

    return (
        <div className="SearchHistoryOverview">
            <h4>Search History</h4>
            {renderHistoryCard(data)}
        </div>
    )
}

export default SearchHistoryTable
    