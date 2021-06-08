import React, { useEffect, useState} from 'react';
import {NativeSelect, FormControl } from '@material-ui/core';


function countryPicker() {
    return (
        <>
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </>
    )
}

export default countryPicker
