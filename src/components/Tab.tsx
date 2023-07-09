import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { useDispatch } from 'react-redux';
import { filterCocktailsByLetter } from '../redux/actions/cocktailActions';

// import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';


interface FilterBarProps {
  onFilterData: (letter: string) => void;
}

const TabData: React.FC<FilterBarProps> = ({ onFilterData }) => {
  const dispatch = useDispatch();
  const options = [
    { key: 'a', text: 'A', value: 'A' },
    { key: 'b', text: 'B', value: 'B' },
    { key: 'c', text: 'C', value: 'C' },
    { key: 'd', text: 'D', value: 'D' },
    { key: 'e', text: 'E', value: 'E' },
    // We can add more options if needed
  ];

  const handleFilterBar = (event: React.SyntheticEvent<HTMLElement>, data: any) => {
    onFilterData(data.value);
    dispatch(filterCocktailsByLetter(data.value));
  };

  return (
    <div className="nav nav-tabs" id="nav-tab" role="tablist">
    {options.map((option, index)=>{
      return <button type="button" className='nav-link active px-4' onClick={(e)=>handleFilterBar(e, option)}> {option.text} </button>
    })}


    </div>
  );
};

export default TabData;
