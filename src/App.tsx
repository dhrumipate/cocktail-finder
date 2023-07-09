import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { searchCocktails, filterCocktailsByLetter } from './redux/actions/cocktailActions';
import { BarChart, PieChart } from './components/Charts';
import BreadcrumbData from './components/Breadcrumb';
import SearchBar from './components/SearchBox';
import FilterBar from './components/FilterBar';
import CocktailList from './components/CocktailList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import LoaderWithText from './components/Loader';
import TabData from './components/Tab';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('A');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCocktailsByLetter(selectedLetter));
  }, [dispatch, selectedLetter]);

  useEffect(() => {
    document.title = 'Cocktail-Finder';
  }, []);
  
  const { cocktails, loading, error } = useSelector((state: RootState) => state.cocktail);
  useEffect(() => {
    dispatch(filterCocktailsByLetter('A'));
  }, [dispatch]);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length >= 3) {
      dispatch(searchCocktails(searchTerm));
    }
  };


  function generateAlphabetOptions(): import("semantic-ui-react").DropdownItemProps[] {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="app">
      <div className="container-fluid">
      <BreadcrumbData />
      <div className="d-flex align-items-center justify-content-between mb-2 border-bottom flex-wrap">
        
        <TabData onFilterData={filterCocktailsByLetter} />
   
      <div className="filters d-flex align-items-center flex-wrap">
      <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterData={filterCocktailsByLetter} />
        
      </div>
      </div>
     
      {loading ? (
       <LoaderWithText />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
        <div className="chart-container row">
        <div className="col-lg-5 col-md-6"> <BarChart data={cocktails} /></div>
        <div className="col-lg-4 col-md-5">   <PieChart data={cocktails} /></div>
      </div>
        <CocktailList cocktails={cocktails} />
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
