import React, { useState, useEffect } from 'react';
import {  Search } from 'semantic-ui-react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(searchTerm);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, onSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Search
      icon="search"
      placeholder="What are you looking for?"
      value={searchTerm}
      onChange={handleChange}
      className='mr-2'
    />
  );
};

export default SearchBar;
