import React, {Component } from 'react'
import './App.css';
import Cards from './components/Cards/cards'
import Chart from './components/Charts/chart'
import CountryPicker from './components/Country-Picker/countryPicker'
import Styles from './App.module.css'
import {fetchData} from './Api/index'


class App extends Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
   
    this.setState({ data: fetchedData });
   
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country})
  }

  render() {
    const {data, country} = this.state;

    return(
      <div className={Styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;

/*
function App() {
  const [data, setData] = useState([]);

  const getnData = async () => {
    const ndata = await fetchData();
    
    setData(ndata);
  }

  const handleCountryChange = async (country) => {
      console.log(country);
  }

  useEffect (()=> {
    getnData();
    handleCountryChange();
  },[])

  return (
    <>
      <div className={Styles.container}>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart data={data} />
      </div>
    </>
  );
}

export default App;
*/