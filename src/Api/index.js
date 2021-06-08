import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        console.log(modifiedData);

        return modifiedData;
    } catch(error) {
        console.log(error);
        return(
            <>
            Loading...
            </>
        )
    }
}


export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

        console.log(data);

    } catch(error){
        console.log(error);
    }
}