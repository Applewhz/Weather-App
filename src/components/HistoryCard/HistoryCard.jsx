import { useDispatch } from "react-redux";
import weatherAction from "../../store/actions/weatherActions";
import { faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { CustomButton } from '../Common/Button/Button'
import './HistoryCard.css';

export const HistoryCard = (props) => {

    const dispatch = useDispatch()

    const onSearchHandler = (event) => {
        event.preventDefault();
        dispatch(weatherAction.getSelectedCountryWeather(props.countryName))
    }

    const onDeleteHandler = (event) => {
        event.preventDefault();
        dispatch(weatherAction.removeSelectedSearchedHistoryEntry(props.id))
    }

    return (
        <div className="HistoryCard">
            <p style={{marginRight: '10px'}}>{props.countryName}</p>
            <div className='HistoryCardRightSide'>
                <p style={{marginRight: '10px'}}>{props.date}</p>
                <p style={{marginRight: '10px'}}>{props.time}</p>
                <CustomButton onClick={onSearchHandler} icon={faMagnifyingGlass} divClassName={'SearchAndDeleteButtonContainer'}/>
                <CustomButton onClick={onDeleteHandler} icon={faTrash} divClassName={'SearchAndDeleteButtonContainer'}/>
            </div>
        </div>
    )
}