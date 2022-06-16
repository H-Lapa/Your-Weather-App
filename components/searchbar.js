import cities from 'cities.json';
import { useState } from 'react';
import styles from '../styles/searchBar.module.css'

const SearchBar = ({data}) => {
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

    function updateValue (item) {
        setText(item);
    }

    const clearInput = () => {
        setFilteredData([]);
        setText('');
    };

    function updateCities () {
        data([text]);
    }

    return (
        <div >

            <div className={styles.searchInputs}>
                <input id='inputCity' type="text" value={ text } onChange={handleChange} />
                <button type="submit" onClick={updateCities}>Submit</button>
            </div>

            <div  >
                {filteredData.length != 0 && (
                    <div className={styles.dataResult}>
                        {filteredData.slice(0, 5).map((value) => {
                            return (
                                <a href='#' onClick={() => updateValue(value.name)} className={styles.dataItem} >{value.name}</a>
                            )
                        })};  
                    </div>
                )}
            </div>

        </div>
    );
}

export default SearchBar;