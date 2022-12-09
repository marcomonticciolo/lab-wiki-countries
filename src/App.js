import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import CountriesList from './components/countries-list';
import countryData from './countries.json'
import CountryDetails from './components/countryDetails';
import {Routes,Route} from "react-router-dom"
import { useState } from "react"

function App(props) {

  const [countries, setCountries] = useState(countryData);

  return (
    <div className="App">

      <Navbar />

      <div className='container'>
        <div className="row">

      <CountriesList countries={countries}/>

      <Routes>

    <Route path='/:id' element=<CountryDetails countries={countries}/>/>

      </Routes>


        </div>
      </div>

 
    </div>
  );
}

export default App;
