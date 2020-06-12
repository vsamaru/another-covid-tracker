import axios from 'axios';

const numbersUrl = "https://corona.lmao.ninja/v2/all";
const globalDataUrl = 'https://covidapi.info/api/v1/global/count'

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