

document.addEventListener('DOMContentLoaded', function () {

	
		// 気象庁APIの	長野県天気予報データを取得するURL
		const apiUrl = 'https://www.jma.go.jp/bosai/forecast/data/forecast/200000.json';

		async function fetchWeatherData() {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();

				console.log(data);
	

				// 最新の時刻のインデックスを取得
			const latestIndex = data[0].timeSeries[2].timeDefines.length - 1;

			// 現在の気温を取得
			const currentTemperature = data[0].timeSeries[2].areas[1].temps[latestIndex]; // 最新の時刻の温度

			// 現在の時刻を表示
			const now = new Date();
			const formattedDate = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
			document.getElementById('current-time').textContent = formattedDate; // HTML要素に表示
	
				// 天気情報を取得（長野県北部地方　安曇野市）
			const currentWeather = data[0]?.timeSeries[0]?.areas[0]?.weathers[0] || '情報なし';
			const todayWeather = data[0]?.timeSeries[0]?.areas[0]?.weathers[0] || '情報なし';
			const tomorrowWeather = data[0]?.timeSeries[0]?.areas[0]?.weathers[1] || '情報なし';

			// 本日の気温データを取得（松本市参照）
			const todayMinTemp = data[0].timeSeries[2].areas[1].temps[0] || '情報なし';  // 本日の最低気温
			const todayMaxTemp = data[0].timeSeries[2].areas[1].temps[1] || '情報なし';  // 本日の最高気温

/* 			const todayMinTemp = Math.floor(data[1]?.tempAverage?.areas[0]?.min) || '情報なし';  // 本日の最低気温
			const todayMaxTemp = Math.floor(data[1]?.tempAverage?.areas[0]?.max) || '情報なし';  // 本日の最高気温
 */
			// 明日の気温データを取得（松本市参照）
			const tomorrowMinTemp = data[0].timeSeries[2].areas[1].temps[2];  // 明日の最低気温
			const tomorrowMaxTemp = data[0].timeSeries[2].areas[1].temps[3];  // 明日の最高気温

			/*
			const tomorrowMinTemp = data[1].timeSeries[1].areas[0].tempsMin[1];  // 明日の最低気温
			const tomorrowMaxTemp = data[1].timeSeries[1].areas[0].tempsMax[1];  // 明日の最高気温
      */
			// 天気アイコンを更新する関数
			function updateWeatherIcon(weatherDescription, iconElement) {
				if (weatherDescription.includes("晴")) {
					iconElement.src = "./images/icon-sun.png";  // 晴れのアイコン
				} else if (weatherDescription.includes("雨")) {
					iconElement.src = "./images/icon-rain.png";  // 雨のアイコン
				} else {
					iconElement.src = "./images/icon-cloud.png"; // 曇りなどのデフォルトアイコン
				}
			}

			// 現在の天気アイコンと気温を更新
			updateWeatherIcon(currentWeather, document.getElementById('current-weather-icon'));
			document.getElementById('current-temperature').textContent = `${currentTemperature}℃`;

			// 今日の天気予報アイコンと気温を更新
			updateWeatherIcon(todayWeather, document.getElementById('today-weather-icon'));
			document.getElementById('today-temperature').textContent = `${todayMinTemp}℃ / ${todayMaxTemp}℃`;

			// 明日の天気予報アイコンと気温を更新
			updateWeatherIcon(tomorrowWeather, document.getElementById('tomorrow-weather-icon'));
			document.getElementById('tomorrow-temperature').textContent = `${tomorrowMinTemp}℃ / ${tomorrowMaxTemp}℃`;

		} catch (error) {
			console.error('データの取得に失敗しました:', error);
		}
	}

	// ページが読み込まれたら天気情報を取得して表示
	window.onload = fetchWeatherData;

		/*
		async function fetchWeatherData() {
				try {
						const response = await fetch(apiUrl);
						const data = await response.json();

						// 天気情報を取得
						const currentWeather = data[0].timeSeries[0].areas[0].weathers[0];
						const todayWeather = data[0].timeSeries[0].areas[0].weathers[1];
						const tomorrowWeather = data[0].timeSeries[0].areas[0].weathers[2];

						// 明日の気温データ（最低/最高）を取得
						const todayTemps = data[0]?.timeSeries[0]?.areas[0]?.temps || ['情報なし', '情報なし'];
						const tomorrowTemps = data[1]?.timeSeries[2]?.areas[0]?.temps || ['情報なし', '情報なし'];

						// 今日の最低/最高気温
						const todayMinTemp = todayTemps[0];  // 最低気温
						const todayMaxTemp = todayTemps[1];  // 最高気温

						// 明日の最低/最高気温
						const tomorrowMinTemp = tomorrowTemps[0];  // 最低気温
						const tomorrowMaxTemp = tomorrowTemps[1];  // 最高気温

						function updateWeatherIcon(weatherDescription, iconElement) {
							if (weatherDescription.includes("晴")) {
									iconElement.src = "./images/icon-sun.png";  // 晴れのアイコン
							} else if (weatherDescription.includes("雨")) {
									iconElement.src = "./images/icon-rain.png";  // 雨のアイコン
							} else {
									iconElement.src = "./images/icon-cloud.png"; // 曇りなどのデフォルトアイコン
							}
						}

						// 現在の天気アイコンと気温を更新
			updateWeatherIcon(currentWeather, document.getElementById('current-weather-icon'));
			document.getElementById('current-temperature').textContent = `${todayMinTemp}℃ / ${todayMaxTemp}℃`;

			// 今日の天気予報アイコンと気温を更新
			updateWeatherIcon(todayWeather, document.getElementById('today-weather-icon'));
			document.getElementById('today-temperature').textContent = `${todayMinTemp}℃ / ${todayMaxTemp}℃`;

			// 明日の天気予報アイコンと気温を更新
			updateWeatherIcon(tomorrowWeather, document.getElementById('tomorrow-weather-icon'));
			document.getElementById('tomorrow-temperature').textContent = `${tomorrowMinTemp}℃ / ${tomorrowMaxTemp}℃`;

				} catch (error) {
						console.error('データの取得に失敗しました:', error);
				}
		}

		// ページが読み込まれたら天気情報を取得して表示
		window.onload = fetchWeatherData;
*/

});	





