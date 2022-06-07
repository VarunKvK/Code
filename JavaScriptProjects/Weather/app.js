window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone');
    let temperatureDescription=document.querySelector('.temperature-description');
    let icon=document.querySelector('.icon');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f0fb2c240495c1d809c614e524386a46`
            fetch(api)
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                const {temp}=data.main;
                const {main,description}=data.weather[0];
                temperatureDegree.textContent=temp;
                locationTimezone.textContent=data.name;
                temperatureDescription.textContent=description;        
            });
        
        });

    }
});