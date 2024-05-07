import superagent from 'superagent';
import fs from 'fs';
import WeatherResponse from './interfaces';

const API_KEY = "e783a67e92ab0ca19c593318aa9465d0";

const FILE_URL = "city.txt";
const OUTPUT_FILE_URL = "weather.txt";

fs.readFile(FILE_URL, (err: any, buffer: Buffer) => {
    if (err) {
        return console.log("Failed reading from file:", err.message);
    }
    
    const city = buffer.toString();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    superagent.get(url, (err: any, res: any) => {
        if (err) {
            console.log("Failed get weather from api server", err.message);
            return;
        }
        const data: WeatherResponse = res.body;

        const output = `The weather for ${city} is ${data.weather[0].description}: the temperature is ${data.main.temp}, it feels like ${data.main.feels_like}`;
        fs.writeFile(OUTPUT_FILE_URL, output, (err) => {
            if (err) {
                return console.log("Failed writing to file:", err.message);
            }

            console.log("Weather has written successfully");
        });
    });
})
