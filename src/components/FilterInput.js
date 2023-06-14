import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FilterInput = ({ handleFilter }) => {
  return (
    <div className="filter-input">
      <input
        type="text"
        placeholder="Nesneleri ara..."
        onChange={handleFilter}
      />
      <div className='icon-bg'>
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default FilterInput;
