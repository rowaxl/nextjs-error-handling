import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.coindesk.com/v1/bpi/currenprice.json',
  timeout: 1,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getOperation = async () => {
  let result;
  result = await Axios.get();

  return result;
};
