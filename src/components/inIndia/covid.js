import React, { useEffect, useState } from 'react'
import './covid.css';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function Covid() {
    const [data, setData] = useState([]);


    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section>
                <h2>  Live</h2>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <ul>
                    <li>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                            </CardContent>
                        </Card>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>OUR </span> country
                            </p>
                                <p className="card_totsl card_small">
                                    INDIA
                            </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>TOTAL </span> RECOVERED
                            </p>
                                <p className="card_totsl card_small">
                                    {data.recovered}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>TOTAL </span> CONFIRMED
                            </p>
                                <p className="card_totsl card_small">
                                    {data.confirmed}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>TOTAL </span> DEATH
                            </p>
                                <p className="card_totsl card_small">
                                    {data.deaths}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>TOTAL </span> ACTIVE
                            </p>
                                <p className="card_totsl card_small">
                                    {data.active}
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="card_name">
                            <div className="card_inner">
                                <p className="card_naem" >
                                    <span>LAST </span> UPDATED
                            </p>
                                <p className="card_totsl card_small">
                                    {data.lastupdatedtime}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
