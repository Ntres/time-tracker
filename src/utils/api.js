import axios from 'axios'

const URL = 'https://api-test.sesametime.com/schedule/v1'
const TOKEN = '16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f'
const config = {
  headers: { 'Authorization': `Bearer ${TOKEN}` }
};

export function getStatus () {
  console.log('entro')
  return axios.get(`${URL}/work-entries`, config)
}

export function checkIn () {
  return axios.post(`${URL}/workentries/clock-in`, config)
}

export function checkOut () {
  return axios.post(`${URL}/workentries/clock-out`, config)
}
