import './App.css';
import React, { useState, lazy, Suspense } from 'react';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';

export const Context = React.createContext();
// const Country = lazy(() => import('./components/Country'));
import Country from './components/Country';
function App() {
  const [countryInfo, setCountryInfo] = useState(null); // Initialize with null, not "null"
  const [BorderInfo, setBorderInfo] = useState([]); // Initialize with null, not "null"

  function formatNumberWithCommas(number) {
    try {
      const str = number.toString();
      const integerWithCommas = str.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return integerWithCommas;
    } catch (e) {
      // Handle the exception here, e.g., log an error message or provide a default value
      console.error('An error occurred:', e);
      return 'Error'; // Return a default value or handle the error as needed
    }
  }
  
  return (
    <Context.Provider value={[countryInfo, setCountryInfo ,BorderInfo, setBorderInfo] }>
      <div className='app bg-VDarkBlue min-h-screen w-screen h-full'>
        <Nav />
 
        <Routes>
          <Route path="/" element={<Countries formatNumberWithCommas={formatNumberWithCommas}/>} />
          <Route path="/:countryName" element={<Country  formatNumberWithCommas={formatNumberWithCommas}/>} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
