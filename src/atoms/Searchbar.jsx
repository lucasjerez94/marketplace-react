import { useState } from "react";

export const Searchbar = ({ onSearch = () =>{} }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
    onSearch(searchTerm);
    };

    return(
        <div className="searchbar-container">
            <h3 className="h3-searchbar">Filter Templates</h3>
            <input
                className="input-searchbar"
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};