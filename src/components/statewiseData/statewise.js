import React, { useEffect, useState } from 'react';
import './statewise.css';

function Statewise() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise);
            setData(actualData.statewise);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-centered"><span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thread-dark" >
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((curElem, ind) => {
                                return (
                                    <tr key={ind}>
                                        <th>{curElem.state}</th>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }



                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Statewise;
