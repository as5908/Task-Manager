const https = require('https');
const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=5a0a1ca28db67f36c9f08034bf2766b9&query=45,-75&units=f`;

const request = http.request(url, (response) => {
	let data = '';
	response.on('data', (chunk) => {
		data += chunk.toString();
	});

	response.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on('error', (error) => {
	console.log('An error', error);
});

request.end();
