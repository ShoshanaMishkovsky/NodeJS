import express, { Request, Response } from 'express';

const HOST = "localhost";
const PORT = 5060;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.end("Hello from express");
});

app.listen(PORT, HOST, () => {
    console.log("The app is listening on", PORT);
});