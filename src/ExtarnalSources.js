import axios from 'axios';

const numbersUrl = "https://corona.lmao.ninja/v2/all";
const globalDataUrl = 'https://covidapi.info/api/v1/global/count'

const countryNumbersUrl = "https://corona.lmao.ninja/v2/countries/"
const countryHistoryUrl = "https://covidapi.info/api/v1/country/"

export const getGlobalFigures = async () => {
  try {
    const { data: { cases, deaths, recovered } } = await axios.get(numbersUrl);

    return { cases, deaths, recovered };
  }
  catch (error) {
    return error;
  }
};


export const getGlobalHistory = async () => {
    try {
      const { data: { result } } = await axios.get(globalDataUrl);
  
      return result;
    }
    catch (error) {
      return error;
    }
};

export const getCountryFigures = async (country) => {
  try {
    const { data: { cases, deaths, recovered, countryInfo } } = await axios.get(countryNumbersUrl + country);

    return { cases, deaths, recovered, countryInfo };
  }
  catch (error) {
    return error;
  }
};

export const getCountryHistory = async (country) => {
  try {
    const { data: { result } } = await axios.get(countryHistoryUrl + country);

    return result;
  }
  catch (error) {
    return error;
  }
};

export const getCountries = async () => {
  try {
    const { data: result } = await axios.get(countryNumbersUrl);
    const countriesList = [];
    result.forEach(country => {
      countriesList.push(country.country)
    });
    return countriesList;
  }
  catch (error) {
    return error;
  }
};