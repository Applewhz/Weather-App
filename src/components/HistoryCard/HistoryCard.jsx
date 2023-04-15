import './HistoryCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const HistoryCard = (props) => {

    return (
        <div className="HistoryCard">
            <p style={{marginRight: '10px'}}>{props.countryName}</p>
            <div className='HistoryCardRightSide'>
                <p style={{marginRight: '10px'}}>{props.timeDate}</p>
                <div className='SearchAndDeleteButtonContainer'>
                    <FontAwesomeIcon className='Icon' icon={faMagnifyingGlass} />
                </div>
                <div className='SearchAndDeleteButtonContainer'>
                    <FontAwesomeIcon className='Icon' icon={faTrash} />
                </div>
            </div>
        </div>
    )
}