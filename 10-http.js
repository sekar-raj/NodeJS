const  http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
    res.write('Welcome to the home page!');
    res.end()
    }
    if(req.url === '/about') {
    res.write('Welcome to about page!');
    res.end()
    }
    res.write(
        `<h1> No resource available for the same! </h1>
        <p> Oops! </p>
        <a href="/"> Back home screen </a>
        `
    )
    res.end();
})

server.listen('3000')