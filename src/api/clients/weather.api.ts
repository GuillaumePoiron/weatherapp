import axios from 'axios';
import {Weather} from '../models/weather.model';

const api = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=57cdb8403eb04c4c8e1182918231203',
});

export async function getWeatherByCity(cityName: string): Promise<Weather> {
  const res = await api.get('', {params: {q: cityName, days: 10, lang: 'fr'}});
  return res.data;
}

export async function getWeatherByLocation(
  lat: number,
  lon: number,
): Promise<Weather> {
  const res = await api.get('', {
    params: {q: `${lat},${lon}`, days: 10, lang: 'fr'},
  });
  return res.data;
}
