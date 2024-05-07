import superagent from 'superagent';
import { readFilePromise, writeFilePromise } from './playground/promise';

const API_KEY = "e783a67e92ab0ca19c593318aa9465d0";

const FILE_URL = "city.txt";
const OUTPUT_FILE_URL = "weather.txt";

let city: string;
readFilePromise(FILE_URL)
    .then((data: Buffer) => {
        city = data.toString();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        return superagent.get(url);
    })
    .then((res: any) => {
        const data = res.body;
        const output = `The weather for ${city} is ${data.weather[0].description}: the temperature is ${data.main.temp}, it feels like ${data.main.feels_like}`;
        return writeFilePromise(OUTPUT_FILE_URL, output);
    }).then(() => {
        console.log("Weather has written successfully");
    }).catch((err: any) => {
        console.log("Failed get weather from api server", err.message);
    });