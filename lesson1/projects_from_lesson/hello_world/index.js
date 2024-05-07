const http = require('http');

const HOST = "localhost"; // 127.0.0.1
const PORT = 3000;

const webServer = http.createServer((req, res) => {
    res.end('Hello World');
});

webServer.listen(PORT, HOST, () => {
    console.log(`Listening to ${HOST}:${PORT}`);
});