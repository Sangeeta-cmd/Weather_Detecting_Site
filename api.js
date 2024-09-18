const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Belagavi&format=json&u=c';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c47b12d0f1msh904d6b50da20285p163413jsn51306e5812fb',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};

try {
	const api = async ()=>{
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	}
	
	// api();
} catch (error) {
	console.error(error);
}