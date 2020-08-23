const geoCode = require('./utils/geoCode');
const foreCast = require('./utils/foreCast');

const getWeather = (address, callback) => {
	
	geoCode(address, (error, { latitude, longitude, location } = {}) => {
		if (error) {
			return console.log(error);
		}
		foreCast(latitude, longitude, (error, foreCastData) => {
			if (error) {
				return console.log(error);
			}
			if (foreCastData) {
				callback(undefined, foreCastData);
			}
		});
	});
};

const address = process.argv[2];
if (!address) {
	console.log('Please provide an address');
} else {
	getWeather(process.argv[2], (error, data) => {
		console.log('Error', error);
		console.log('Data', data);
	});
}

// console.log(process.argv[2]);
