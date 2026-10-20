 
  const apikey="8e4ac11a25d69ac5a101ba4c2bee7ff3" ;
   const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
   const searchBox=document.querySelector(".search input");
   const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".Weather-icon");


 async function cheakWeather(city) {
    const response=await fetch(apiUrl +city+ `&appid=${apikey}`);
    var data =await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }

     // console.log(data);



    document.querySelector(".Weather").style.display="block"

	

}
   
//    cheakWeather();

   searchBtn.addEventListener('click',function(){
    cheakWeather(searchBox.value);
   });


   