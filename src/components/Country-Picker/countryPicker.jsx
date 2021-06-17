import React, { useEffect, useState} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../Api/index';

import styles from './Country-picker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const z = await fetchCountries();
            setFetchCountries(z);
        }

        fetchAPI();
    }, [setFetchCountries]);

    return (
        <>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country,i) => <option key={i} val={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </>
    )
}

export default CountryPicker;
