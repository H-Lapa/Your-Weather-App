import cities from 'cities.json';

const SearchBar = () => {
    return (
        <div>
            <div>
                <input type="text" />
                <button type="submit" ></button>
            </div>

            <div >
                {cities.map((value) => {
                    return (
                        <p>{value.name}</p>
                    )
                })}

            </div>
        </div>
    );
}

export default SearchBar;