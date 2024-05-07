import superagent from "superagent";
import { readFilePromise, writeFilePromise } from "./playground/promise";
import WeatherResponse from "./interfaces";

const API_KEY = "e783a67e92ab0ca19c593318aa9465d0";

const FILE_URL = "city.txt";
const OUTPUT_FILE_URL = "weather.txt";

async function getWeather() {
    try {
        const content = await readFilePromise(FILE_URL);
        const city = content.toString();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const res = await superagent.get(url);
        const data: WeatherResponse = res.body;
        const output = `The weather for ${city} is ${data.weather[0].description}: the temperature is ${data.main.temp}, it feels like ${data.main.feels_like}`;
        await writeFilePromise(OUTPUT_FILE_URL, output);
        console.log("Weather has written successfully");
    } catch (err: any) {
        console.log("Failed get weather from api server", err.message);
    }
}

getWeather();
