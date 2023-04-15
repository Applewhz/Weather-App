import { Search } from "../Common/Input/Input"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';
import { useState } from "react";
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const onChangeHandler = (event) => {
        console.log(event.target.value)
        setSearchTerm(event.target.value) 
    }

    const onSearchHandler = (event) => {
        event.preventDefault();
        console.log(searchTerm)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Search onChange={onChangeHandler} />
            <div className='SearchAndDeleteButtonContainer' onClick={onSearchHandler}>
            <FontAwesomeIcon className='Icon' icon={faMagnifyingGlass} />
            </div>
        </div>
    )
}

export default SearchBar