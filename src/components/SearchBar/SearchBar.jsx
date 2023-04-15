import { Search } from "../Common/Input/Input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import weatherAction from "../../store/actions/weatherActions";

const SearchBar = () => {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeHandler = (event) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value)
        if (event.key === 'Enter'){
            alert('here?')
            // dispatch(weatherAction.getSelectedCountryWeather(searchTerm))
        }
    }

    const onSearchHandler = (event) => {
        event.preventDefault();
        console.log(searchTerm)
        dispatch(weatherAction.getSelectedCountryWeather(searchTerm))
        setSearchTerm('')
    }

    // Display error message when name is wrong
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Search onChange={onChangeHandler} value={searchTerm}/>
            <div className='SearchAndDeleteButtonContainer' onClick={onSearchHandler}>
                <FontAwesomeIcon className='Icon' icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}

export default SearchBar