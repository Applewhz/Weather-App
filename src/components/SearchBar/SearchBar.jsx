import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchInput } from "../Common/Input/Input"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import weatherAction from "../../store/actions/weatherActions";
import { CustomButton } from "../Common/Button/Button";
import './SearchBar.css';

const SearchBar = () => {

    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('');

    const onChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    }

    const onSearchHandler = (event) => {
        event.preventDefault();
        dispatch(weatherAction.getSelectedCountryWeather(searchTerm))
        setSearchTerm('')
    }

    const onEnterHandler = (event) => {
        if(event.key !== 'Enter') return
        dispatch(weatherAction.getSelectedCountryWeather(searchTerm))
        setSearchTerm('')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SearchInput onChange={onChangeHandler} value={searchTerm} placeholder={'Enter Country / City ...'} onKeyDown={onEnterHandler}/>
            <CustomButton onClick={onSearchHandler} icon={faMagnifyingGlass} divClassName={'SearchButtonContainer'} iconClassName={'SearchIcon'}/>
        </div>
    )
}

export default SearchBar