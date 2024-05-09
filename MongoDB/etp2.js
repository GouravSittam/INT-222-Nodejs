const url = require('url');
const querystring = require('querystring');
const https = require('https');
function parseURL(urlString) {
    const parsedURL = new URL(urlString);
    const options = {
        hostname: parsedURL.hostname,
        path: parsedURL.pathname + parsedURL.search,
        method: 'GET'
    };
    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const parsedQuery = querystring.parse(parsedURL.search.substr(1));
            console.log('Parsed Query:', parsedQuery);
        });
    });
    req.on('error', (error) => {
        console.error('Error:', error);
    });

    req.end();
}
const inputURL = "https://www.google.com/search?q=what+is+node+js&gs_lcrp=EgZQ&sourceid=chrome&ie=UTF-8"; 
parseURL(inputURL);