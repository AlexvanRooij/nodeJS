const http = require('http');
const log = require('pretty-log');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((reg, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});
server.listen(port, hostname, () => {
    log.success(`Server running at http://${hostname}:${port}/ log.success( Server running at http://${hostname}:${port}/`);


    log.error('Error! Dit is eeen test, Check de terminal');
    log.warn('Warning! Dit is eeen test, Check de terminal');
    log.debug('Test Debug message');
    
});