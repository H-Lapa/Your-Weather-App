import cities from 'cities.json';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

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

    const clearInput = () => {
        setFilteredData([]);
        setText('');
    };

    return (
        <div>

            <div>
                <input type="text" value={ text } onChange={handleChange} />
                <button type="submit" ></button>
            </div>

            <div  >
                {filteredData.length != 0 && (
                    <div className={styles.dataResult}>
                        {filteredData.slice(0, 5).map((value) => {
                            return (
                                <p>{value.name}</p>
                            )
                        })};  
                    </div>
                )}
            </div>

        </div>
    );
}

export default SearchBar;