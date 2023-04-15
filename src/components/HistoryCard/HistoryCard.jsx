import { useDispatch } from "react-redux";
import weatherAction from "../../store/actions/weatherActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './HistoryCard.css';

export const HistoryCard = (props) => {

    const dispatch = useDispatch()

    const onSearchHandler = (event) => {
        event.preventDefault();
        console.log(props.countryName)
        dispatch(weatherAction.getSelectedCountryWeather(props.countryName))
    }

    return (
        <div className="HistoryCard">
            <p style={{marginRight: '10px'}}>{props.countryName}</p>
            <div className='HistoryCardRightSide'>
                <p style={{marginRight: '10px'}}>{props.date}</p>
                <p style={{marginRight: '10px'}}>{props.time}</p>
                <div className='SearchAndDeleteButtonContainer' onClick={onSearchHandler}>
                    <FontAwesomeIcon className='Icon' icon={faMagnifyingGlass} />
                </div>
                <div className='SearchAndDeleteButtonContainer'>
                    <FontAwesomeIcon className='Icon' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}