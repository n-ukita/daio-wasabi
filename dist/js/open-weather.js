document.addEventListener('DOMContentLoaded', function () {

	const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=36.30&lon=137.90&appid=21ca4cf9015b7f14fdb0d94ee751400d&lang=ja&units=metric';
	const apiForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.30&lon=137.90&appid=21ca4cf9015b7f14fdb0d94ee751400d&lang=ja&units=metric';

	// 天気情報を取得する関数
	async function fetchWeatherData() {
		try {
			// 現在の天気データを取得
			const response = await fetch(apiUrl);
			const data = await response.json();

			console.log(data);

			// 現在の気温を取得（小数点第一位までにフォーマット）
			const currentTemperature = data.main.temp.toFixed(1); // 現在の気温（小数点第一位まで）
			const currentWeather = data.weather[0].description; // 現在の天気の説明

			// 現在の時刻を表示
			const now = new Date();
			const formattedDate = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
			document.getElementById('current-time').textContent = formattedDate; // HTML要素に表示

			// 天気予報データを取得
			const forecastResponse = await fetch(apiForecastUrl);
			const forecastData = await forecastResponse.json();

			// 本日の日付
			const today = new Date().getDate();

			// 本日の気温データを全て取得
			const todayTemps = forecastData.list.filter(item => {
				const forecastDate = new Date(item.dt_txt);
				return forecastDate.getDate() === today;  // 本日のデータを取得
			}).map(item => item.main.temp);

			// 本日の最高・最低気温を計算
			const todayMinTemp = Math.min(...todayTemps).toFixed(0);  // 本日の最低気温（小数点第一位まで）
			const todayMaxTemp = Math.max(...todayTemps).toFixed(0);  // 本日の最高気温（小数点第一位まで）

			// 明日のデータから最低・最高気温を計算
			const tomorrowTemps = forecastData.list.filter(item => {
				const forecastDate = new Date(item.dt_txt);
				return forecastDate.getDate() === today + 1;  // 明日のデータを取得
			}).map(item => item.main.temp);

			const tomorrowMinTemp = Math.min(...tomorrowTemps).toFixed(0);  // 明日の最低気温（小数点第一位まで）
			const tomorrowMaxTemp = Math.max(...tomorrowTemps).toFixed(0);  // 明日の最高気温（小数点第一位まで）

			// 天気アイコンを更新する関数
			function updateWeatherIcon(weatherDescription, iconElement) {
				if (weatherDescription.includes("晴")) {
					iconElement.src = "./images/icon-sun.png";  // 晴れのアイコン
				} else if (weatherDescription.includes("雨")) {
					iconElement.src = "./images/icon-rain.png";  // 雨のアイコン
				} else {
					iconElement.src = "./images/icon-sun.png"; // 曇りなどのデフォルトアイコン
				}
			}

			// 現在の天気アイコンと気温を更新
			updateWeatherIcon(currentWeather, document.getElementById('current-weather-icon'));
			document.getElementById('current-temperature').textContent = `${currentTemperature}℃`;

			// 今日の天気予報アイコンと気温を更新
			updateWeatherIcon(forecastData.list[0].weather[0].description, document.getElementById('today-weather-icon'));
			document.getElementById('today-temperature').textContent = `${todayMinTemp}℃ / ${todayMaxTemp}℃`;

			// 明日の天気予報アイコンと気温を更新
			updateWeatherIcon(forecastData.list[8].weather[0].description, document.getElementById('tomorrow-weather-icon'));
			document.getElementById('tomorrow-temperature').textContent = `${tomorrowMinTemp}℃ / ${tomorrowMaxTemp}℃`;

		} catch (error) {
			console.error('データの取得に失敗しました:', error);
		}
	}

	// ページが読み込まれたら天気情報を取得して表示
	window.onload = fetchWeatherData;


	/*
	// OpenWeatherMap APIのURL
	const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=36.30&lon=137.90&appid=21ca4cf9015b7f14fdb0d94ee751400d&lang=ja&units=metric';
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			console.log(JSON.stringify(data, null, 2));
		})
		.catch(error => {
			console.error('Error fetching weather data:', error);
		});
 console.log(apiUrl);


  const apiOP = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.30&lon=137.90&appid=21ca4cf9015b7f14fdb0d94ee751400d&lang=ja&units=metric';
	fetch(apiOP)
		.then(response => response.json())
		.then(data => {
			console.log(JSON.stringify(data, null, 2));
		})
		.catch(error => {
			console.error('Error fetching weather data:', error);
		});
	console.log(apiOP);
*/
});
