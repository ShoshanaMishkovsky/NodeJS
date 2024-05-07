import http, { IncomingMessage } from 'http';

const HOST = "localhost"; //127.0.0.1
const PORT = 5050;

const server = http.createServer((req: IncomingMessage, res: http.ServerResponse) => {
    if (req.method == "GET") {
        res.end("Hello world");
        return;
    }

    if (req.url == "/api/users") {
        res.end("url is /api/users");
        return;
    }

    res.end(`The method is ${req.method}. The url is ${req.url}`);
});

server.listen(PORT, HOST, () => {
    console.log("Server is listening to requests");
});