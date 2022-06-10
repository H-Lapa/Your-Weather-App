import cities from 'cities.json';

const SearchBar = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);

    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div>
            <div>
                <input type="text" value={ text } onChange={handleChange} />
                <button type="submit" ></button>
            </div>

            <div >
                {filteredData.length != 0 (
                    <div>
                        {cities.map((value) => {
                            return (
                                <p>{value.name}</p>
                            )
                        })}    
                    </div>
                )};
                

            </div>
        </div>
    );
}

export default SearchBar;