import cities from 'cities.json';
import { useState } from 'react';
import styles from '../styles/searchBar.module.css'

const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);

        const newFilter = cities.filter((value) => {
            return value.name.toLowerCase().includes(text.toLowerCase());
        });
      
        if (text === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter); 
        }

    };

    function updateValue (e) {
        // setText(e.target.value);
        clearInput();
    }

    const clearInput = () => {
        setFilteredData([]);
        setText('');
    };

    return (
        <div >

            <div className={styles.searchInputs}>
                <input id='inputCity' type="text" value={ text } onChange={handleChange} />
                <button type="submit" >Submit</button>
            </div>

            <div  >
                {filteredData.length != 0 && (
                    <div className={styles.dataResult}>
                        {filteredData.slice(0, 5).map((value) => {
                            return (
                                <a href='#' onClick={updateValue()} className={styles.dataItem} >{value.name}</a>
                            )
                        })};  
                    </div>
                )}
            </div>

        </div>
    );
}

export default SearchBar;