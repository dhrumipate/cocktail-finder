import React from 'react';
import { Cocktail } from '../types/types';
import { Pie, Bar } from 'react-chartjs-2';


interface ChartsProps {
  data: Cocktail[];
}

export const BarChart: React.FC<ChartsProps> = ({ data }) => {
  // Logic to generate bar chart data based on alcoholic vs non-alcoholic cocktails
  let alcCount = 0;
  let NonAlcCount = 0;
  
  data.map((item) => {
      if(item.alchoholic === "Alcoholic"){
      alcCount += 1;
    } else if (item.alchoholic === "Non alcoholic"){
      NonAlcCount += 1;
    }
  })
  let alcData = [alcCount, NonAlcCount];

  const chartData = {
    labels: ['Alchoholic', 'Non Alchoholic'],
    datasets: [
      {
        label: '# of Votes',
        data: alcData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
         
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={chartData} />;
};

export const PieChart: React.FC<ChartsProps> = ({ data }) => {
  let cocktail = 0;
  let martini = 0;
  let shot = 0;
  let highball = 0;
  let coffee = 0;
  let champagne = 0;
  let collis = 0;
  let oldfashion = 0;
  let hurricane = 0;

  data.map((item) => {
      if(item.glasstype === "Cocktail glass"){
        cocktail += 1;
    } else if (item.glasstype === "Martini Glass"){
      martini += 1;
    }
    else if (item.glasstype === "Shot glass"){
      shot += 1;
    }
    else if (item.glasstype == "Highball Glass"){
      highball += 1;
    }
    else if (item.glasstype == "Coffee mug"){
      coffee += 1;
    }
    else if (item.glasstype == "Champagne flute"){
      champagne += 1;
    }
    else if (item.glasstype == "Collins glass"){
      collis += 1;
    }
    else if (item.glasstype == "Old-fashioned glass"){
      oldfashion += 1;
    }
    else if (item.glasstype == "Hurricane glass"){
      hurricane += 1;
    }
  })
  let glassesType = [cocktail, martini ,shot, highball, coffee, champagne, collis, oldfashion , hurricane];

 const chartData1 = {
    labels: ['Cocktail glass', 'Martini Glass', 'Shot glass', 'Highball Glass', 'Coffee mug' , 'Champagne flute', 'Collins glass' , 'Old-fashioned glass' , 'Hurricane glass'],
    datasets: [
      {
        label: '# of Votes',
        data: glassesType,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 130, 255, 0.2)',
          'rgba(255, 150, 164, 0.2)',
          'rgba(154, 156, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 130, 255, 1)',
          'rgba(255, 150, 164, 1)',
          'rgba(154, 156, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={chartData1} />;
};