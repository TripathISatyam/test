$(function(){

	var inputvalue = '';	
	var cityNames = ["Bangalore", "Delhi"];
	var cityNameWithCountry = '';
	var cityWeatherResponse;
	var cityWeatherDisplayList = [];
	var APIkeyRajesh = "d87e3d3fce46e1937d7eb72d1f6a07a6";
	var APIkeySatyamd = 'a20db7d450133246c3ab1e0816ee0bc2';
	$('#SelectedDates').hide();
	//$('#ContentDisplay').hide();
	var app = [];
	app.checkCityCode = function(value){
		console.log(value);
		//this.value = 'bangalore';		
		/*if(this.inputvalue == value.toLowerCase()){
			//console.log('value reenterd');
			return;
		}*/
		for( var i in cityNames){		
			if(cityNames[i].toLowerCase() === value.toLowerCase()){
				this.inputvalue = value.toLowerCase();	
				this.cityNameWithCountry = value.toLowerCase()+',IN';		
				app.getCityWeatherData();
				return;
			}
		}	
	};

	app.getCityWeatherData = function(){		
		if(this.inputvalue === 'bangalore' || this.inputvalue == 'delhi'){
			this.cityWeatherResponse =  [{"cod":"200","message":0.0024,"cnt":37,"list":[{"dt":1497776400,"main":{"temp":29.63,"temp_min":29.53,"temp_max":29.63,"pressure":922.49,"sea_level":1017.77,"grnd_level":922.49,"humidity":60,"temp_kf":0.1},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":5.97,"deg":292.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-18 09:00:00"},{"dt":1497787200,"main":{"temp":24.3,"temp_min":24.23,"temp_max":24.3,"pressure":922.62,"sea_level":1018.13,"grnd_level":922.62,"humidity":84,"temp_kf":0.08},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":4.46,"deg":287.001},"rain":{"3h":1.82},"sys":{"pod":"d"},"dt_txt":"2017-06-18 12:00:00"},{"dt":1497798000,"main":{"temp":23.41,"temp_min":23.36,"temp_max":23.41,"pressure":924.39,"sea_level":1020.53,"grnd_level":924.39,"humidity":83,"temp_kf":0.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":3.91,"deg":289.006},"rain":{"3h":0.045},"sys":{"pod":"n"},"dt_txt":"2017-06-18 15:00:00"},{"dt":1497808800,"main":{"temp":22.5,"temp_min":22.47,"temp_max":22.5,"pressure":924.98,"sea_level":1021.31,"grnd_level":924.98,"humidity":84,"temp_kf":0.03},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":56},"wind":{"speed":3.42,"deg":267.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-18 18:00:00"},{"dt":1497819600,"main":{"temp":20.37,"temp_min":20.37,"temp_max":20.37,"pressure":923.22,"sea_level":1019.4,"grnd_level":923.22,"humidity":94,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":3.98,"deg":260.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-18 21:00:00"},{"dt":1497830400,"main":{"temp":19.63,"temp_min":19.63,"temp_max":19.63,"pressure":922.84,"sea_level":1019.18,"grnd_level":922.84,"humidity":98,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":3.66,"deg":255.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-19 00:00:00"},{"dt":1497841200,"main":{"temp":23.98,"temp_min":23.98,"temp_max":23.98,"pressure":924.14,"sea_level":1020.04,"grnd_level":924.14,"humidity":80,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":4.42,"deg":255.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-19 03:00:00"},{"dt":1497852000,"main":{"temp":28.01,"temp_min":28.01,"temp_max":28.01,"pressure":924.12,"sea_level":1019.47,"grnd_level":924.12,"humidity":67,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":5.36,"deg":269.005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-19 06:00:00"},{"dt":1497862800,"main":{"temp":30.02,"temp_min":30.02,"temp_max":30.02,"pressure":922.42,"sea_level":1017.56,"grnd_level":922.42,"humidity":59,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":5.21,"deg":266.501},"rain":{"3h":0.035},"sys":{"pod":"d"},"dt_txt":"2017-06-19 09:00:00"},{"dt":1497873600,"main":{"temp":28.19,"temp_min":28.19,"temp_max":28.19,"pressure":922.23,"sea_level":1017.72,"grnd_level":922.23,"humidity":58,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":5.41,"deg":272.001},"rain":{"3h":0.385},"sys":{"pod":"d"},"dt_txt":"2017-06-19 12:00:00"},{"dt":1497884400,"main":{"temp":24.33,"temp_min":24.33,"temp_max":24.33,"pressure":924.16,"sea_level":1020.53,"grnd_level":924.16,"humidity":77,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":4.26,"deg":263.501},"rain":{"3h":1.15},"sys":{"pod":"n"},"dt_txt":"2017-06-19 15:00:00"},{"dt":1497895200,"main":{"temp":22.94,"temp_min":22.94,"temp_max":22.94,"pressure":925.01,"sea_level":1021.44,"grnd_level":925.01,"humidity":78,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":80},"wind":{"speed":4.81,"deg":263.001},"rain":{"3h":0.26},"sys":{"pod":"n"},"dt_txt":"2017-06-19 18:00:00"},{"dt":1497906000,"main":{"temp":21.41,"temp_min":21.41,"temp_max":21.41,"pressure":923.46,"sea_level":1019.7,"grnd_level":923.46,"humidity":86,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":4.52,"deg":259},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-19 21:00:00"},{"dt":1497916800,"main":{"temp":20.91,"temp_min":20.91,"temp_max":20.91,"pressure":923.97,"sea_level":1020.35,"grnd_level":923.97,"humidity":91,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":80},"wind":{"speed":3.82,"deg":248.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-20 00:00:00"},{"dt":1497927600,"main":{"temp":23.77,"temp_min":23.77,"temp_max":23.77,"pressure":924.72,"sea_level":1020.8,"grnd_level":924.72,"humidity":79,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":68},"wind":{"speed":5.01,"deg":244.502},"rain":{"3h":0.015},"sys":{"pod":"d"},"dt_txt":"2017-06-20 03:00:00"},{"dt":1497938400,"main":{"temp":28.66,"temp_min":28.66,"temp_max":28.66,"pressure":924.47,"sea_level":1019.97,"grnd_level":924.47,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":6.26,"deg":256.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-20 06:00:00"},{"dt":1497949200,"main":{"temp":30.12,"temp_min":30.12,"temp_max":30.12,"pressure":923,"sea_level":1018.17,"grnd_level":923,"humidity":56,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":6.36,"deg":260.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-20 09:00:00"},{"dt":1497960000,"main":{"temp":28.04,"temp_min":28.04,"temp_max":28.04,"pressure":922.5,"sea_level":1018.15,"grnd_level":922.5,"humidity":57,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":5.91,"deg":262.511},"rain":{"3h":0.025},"sys":{"pod":"d"},"dt_txt":"2017-06-20 12:00:00"},{"dt":1497970800,"main":{"temp":26.03,"temp_min":26.03,"temp_max":26.03,"pressure":924.45,"sea_level":1020.49,"grnd_level":924.45,"humidity":62,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":92},"wind":{"speed":5.7,"deg":260.508},"rain":{"3h":0.0099999999999998},"sys":{"pod":"n"},"dt_txt":"2017-06-20 15:00:00"},{"dt":1497981600,"main":{"temp":23.84,"temp_min":23.84,"temp_max":23.84,"pressure":925.32,"sea_level":1021.6,"grnd_level":925.32,"humidity":71,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":76},"wind":{"speed":4.82,"deg":256.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-20 18:00:00"},{"dt":1497992400,"main":{"temp":21.93,"temp_min":21.93,"temp_max":21.93,"pressure":923.7,"sea_level":1019.97,"grnd_level":923.7,"humidity":83,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":4.51,"deg":258.005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-20 21:00:00"},{"dt":1498003200,"main":{"temp":20.71,"temp_min":20.71,"temp_max":20.71,"pressure":923.5,"sea_level":1019.91,"grnd_level":923.5,"humidity":92,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":4.01,"deg":252.507},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-21 00:00:00"},{"dt":1498014000,"main":{"temp":24.37,"temp_min":24.37,"temp_max":24.37,"pressure":924.75,"sea_level":1020.83,"grnd_level":924.75,"humidity":75,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":32},"wind":{"speed":4.96,"deg":242.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-21 03:00:00"},{"dt":1498024800,"main":{"temp":29.39,"temp_min":29.39,"temp_max":29.39,"pressure":924.98,"sea_level":1020.4,"grnd_level":924.98,"humidity":62,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":6.37,"deg":251.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-21 06:00:00"},{"dt":1498035600,"main":{"temp":29.69,"temp_min":29.69,"temp_max":29.69,"pressure":923.1,"sea_level":1018.46,"grnd_level":923.1,"humidity":55,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":6.76,"deg":260.5},"rain":{"3h":0.03},"sys":{"pod":"d"},"dt_txt":"2017-06-21 09:00:00"},{"dt":1498046400,"main":{"temp":27.8,"temp_min":27.8,"temp_max":27.8,"pressure":922.73,"sea_level":1018.41,"grnd_level":922.73,"humidity":58,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":5.41,"deg":262.002},"rain":{"3h":0.45},"sys":{"pod":"d"},"dt_txt":"2017-06-21 12:00:00"},{"dt":1498057200,"main":{"temp":21.8,"temp_min":21.8,"temp_max":21.8,"pressure":924.99,"sea_level":1021.17,"grnd_level":924.99,"humidity":93,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":76},"wind":{"speed":4.02,"deg":280.508},"rain":{"3h":1.17},"sys":{"pod":"n"},"dt_txt":"2017-06-21 15:00:00"},{"dt":1498068000,"main":{"temp":21.99,"temp_min":21.99,"temp_max":21.99,"pressure":925.72,"sea_level":1022.05,"grnd_level":925.72,"humidity":86,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":44},"wind":{"speed":4.27,"deg":255.501},"rain":{"3h":0.12},"sys":{"pod":"n"},"dt_txt":"2017-06-21 18:00:00"},{"dt":1498078800,"main":{"temp":21.03,"temp_min":21.03,"temp_max":21.03,"pressure":924.19,"sea_level":1020.52,"grnd_level":924.19,"humidity":90,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":4.07,"deg":250.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-21 21:00:00"},{"dt":1498089600,"main":{"temp":19.93,"temp_min":19.93,"temp_max":19.93,"pressure":923.68,"sea_level":1020.13,"grnd_level":923.68,"humidity":96,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02n"}],"clouds":{"all":8},"wind":{"speed":3.81,"deg":236.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-22 00:00:00"},{"dt":1498100400,"main":{"temp":24.38,"temp_min":24.38,"temp_max":24.38,"pressure":925.02,"sea_level":1021.11,"grnd_level":925.02,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":4.81,"deg":244},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-22 03:00:00"},{"dt":1498111200,"main":{"temp":26.89,"temp_min":26.89,"temp_max":26.89,"pressure":925.4,"sea_level":1021.13,"grnd_level":925.4,"humidity":68,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":64},"wind":{"speed":6.57,"deg":242.001},"rain":{"3h":0.010000000000001},"sys":{"pod":"d"},"dt_txt":"2017-06-22 06:00:00"},{"dt":1498122000,"main":{"temp":26.76,"temp_min":26.76,"temp_max":26.76,"pressure":923.76,"sea_level":1019.48,"grnd_level":923.76,"humidity":65,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":88},"wind":{"speed":5.17,"deg":252.504},"rain":{"3h":0.069999999999999},"sys":{"pod":"d"},"dt_txt":"2017-06-22 09:00:00"},{"dt":1498132800,"main":{"temp":27.1,"temp_min":27.1,"temp_max":27.1,"pressure":922.96,"sea_level":1018.6,"grnd_level":922.96,"humidity":62,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":6,"deg":251.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-06-22 12:00:00"},{"dt":1498143600,"main":{"temp":25.28,"temp_min":25.28,"temp_max":25.28,"pressure":924.61,"sea_level":1020.68,"grnd_level":924.61,"humidity":66,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":5.8,"deg":255.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-22 15:00:00"},{"dt":1498154400,"main":{"temp":22.56,"temp_min":22.56,"temp_max":22.56,"pressure":925.7,"sea_level":1021.96,"grnd_level":925.7,"humidity":82,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":5.22,"deg":243.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-22 18:00:00"},{"dt":1498165200,"main":{"temp":20.97,"temp_min":20.97,"temp_max":20.97,"pressure":924.3,"sea_level":1020.64,"grnd_level":924.3,"humidity":88,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":4.57,"deg":253.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-06-22 21:00:00"}],"city":{"id":1277333,"name":"Bangalore","coord":{"lat":12.9762,"lon":77.6033},"country":"IN"}}];
		}
		app.displayDatainTemplates();

		/*$.get("https://openweathermap.org/data/2.5/forecast?q=" + this.cityNameWithCountry + "&appid=d87e3d3fce46e1937d7eb72d1f6a07a6" , function(data,status, xhr){
			this.cityWeatherResponse = data.toJSON();
		});*/
		
	};
	app.populateDateList = function(){
		$('#SelectedDates').show();
		//console.log('>>>>>>styam');
		console.log(cityWeatherDisplayList);
		var ListItemsNeeded = cityWeatherDisplayList.length;
		for(var i in cityWeatherDisplayList){
			var s = parseInt(i*1)+1;

			$('<li id="'+ s+'"><a href="#section'+ s+'">'+cityWeatherDisplayList[i].displayDateValue+'</a></li>').appendTo('#SelectedDates');
		}
		$('#SelectedDates li').eq(0).addClass('active');
	};
	app.populateDatedDataList = function(el){
		var el = (el == undefined) ? 0: parseInt(el*1)-1 ;
		console.log(cityWeatherDisplayList[0]);
		console.log(cityWeatherDisplayList[el].main);
		$('#date').text(cityWeatherDisplayList[el].displayDateValue);
		$('span.day').text(parseFloat(cityWeatherDisplayList[el].main.temp_max).toFixed(1)+'°C');
		$('span.night').text(parseFloat(cityWeatherDisplayList[el].main.temp_min).toFixed(1)+'°C');
		$('span.cloud').text(cityWeatherDisplayList[el].weather[0].description);
	};


	app.displayDatainTemplates = function(){
		
		if(typeof this.cityWeatherResponse){					
			var cityWeatherResponseList = this.cityWeatherResponse[0].list;	
				
			var dateNames = '';
	  		for(var i in cityWeatherResponseList){       
			        if(cityWeatherResponseList[i].sys.pod == 'd'){
			            var retrivedVal = cityWeatherResponseList[i].dt_txt.split(" ");
			            var date = new Date(retrivedVal).toString();
			            var printDate = date.split(" ");  
			            var newdate =  printDate[0]+ " " + printDate[2] +" "+ printDate[1];
			            if(typeof dateNames == "object" && dateNames.indexOf(newdate) < 0) {
	        				dateNames.push(newdate);
	        				cityWeatherResponseList[i].displayDateValue = newdate;
	            			cityWeatherDisplayList.push(cityWeatherResponseList[i]);
			        	}	

			            if(typeof dateNames == "string"){
			            	dateNames = [];			            	
			            	dateNames.push(newdate);
			            	cityWeatherResponseList[i].displayDateValue = newdate;
			            	cityWeatherDisplayList.push(cityWeatherResponseList[i]);
			        	} 		             
			      	}   
			} 
			app.populateDateList();
			app.populateDatedDataList();		
		}    	
	};



	$(document).on('blur', '#cityName', function(event){
		console.log(event.currentTarget.value);			
		app.checkCityCode(event.currentTarget.value);

	});

	$(document).on('click', '#SelectedDates li', function(event){
		var elemId = event.currentTarget.id;
		app.populateDatedDataList(elemId);
	});
});
