import React, {useEffect, useState } from 'react'
import './App.css';
import Cards from './components/Cards/cards'
import Chart from './components/Charts/chart'
import CountryPicker from './components/Country-Picker/countryPicker'
import Styles from './App.module.css'
import {fetchData} from './Api/index'



function App() {
  const [data, setData] = useState([]);

  const getnData = async () => {
    const ndata = await fetchData();
    console.log(data);
    setData(ndata);
  }

  useEffect (()=> {
    getnData();
  },[])

  return (
    <>
      <div className={Styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart data={data} />
      </div>
    </>
  );
}

export default App;
