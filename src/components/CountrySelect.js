import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect as Select } from '@material-ui/core'
import { getCountries } from '../ExtarnalSources.js';

export const CountrySelect = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          setCountries(await getCountries());
        };
    
        fetchData();
      }, []);

    return (
        // defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}
        <div>
        <FormControl className="selectContainer">
            <Select>
                {countries.map((x) => <option key={x}>{x}</option>)}
            </Select>
        </FormControl>
        </div>
    )
}

export default CountrySelect