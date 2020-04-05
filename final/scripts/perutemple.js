fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response); 
            
            document.querySelector('#temple2').textContent = response[1].templeName;
            document.querySelector('#address2').textContent = response[1].streetLine1;
            document.querySelector('#city2').textContent = response[1].city;
            document.querySelector('#state2').textContent = response[1].state;
            document.querySelector('#country2').textContent = response[1].country;
            document.querySelector('#zip2').textContent = response[1].zip;
            document.querySelector('#phone2').textContent = response[1].telephone;
            document.querySelector('#email2').textContent = response[1].email;

            response[1].services.forEach(
                service => {
                    document.querySelector('#services2').innerHTML +=
                        `<li>${service}<li>`;
                }
            )
        
            document.querySelector('#image2').setAttribute('src', response[1].image);
         }
    )




    //WEATHERSUMMARY
    const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=3691175&appid=aea8abccbeb560253b793ee4faf83aa6&units=imperial'
fetch(apiUrlWeather)
.then(response => response.json())
.then(
    jsObject => {
        console.log(jsObject);
        let currentTemp = jsObject.main.temp;
        let windSpeed = 8;
        let windChill = 0;

        if(currentTemp < 50 && windSpeed > 3) {
            windChill = 35.74 + 0.6215 * currentTemp - 35.75 * 
            Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
        
        }
        document.getElementById("currentTemp2").innerHTML = currentTemp.toFixed(0) + '&deg;';
        document.getElementById("windSpeed2").innerHTML = windSpeed.toFixed(0) + ' mph';
        document.querySelector('#humidity2').textContent = jsObject.main.humidity + '%';

        if (windChill == 0) {
            document.getElementById("windChill2").innerHTML = 'N/A';
        }
        
        else {
            document.getElementById("windChill2").innerHTML = Math.round(windChill) + '&deg;';
        }  
        document.querySelector('#weatherDesc2').textContent = 
            jsObject.weather[0].main;

        let imageUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        document.querySelector('#weatherImage2')
        .setAttribute('src', imageUrl)

        
    }
);
    
//FOOTER DATE 
let currentDate = new Date();
let fullDate;

/*day of week */
let daysOfWeek = [ 
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let dayOfWeek = currentDate.getDay();
fullDate = daysOfWeek[dayOfWeek];

/* day of month*/

let dayOfMonth = currentDate.getDate();
fullDate += ', ' + dayOfMonth;

/*month*/

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemeber'
];
fullDate += ' ' +  months[currentDate.getMonth()];

/*year*/
let year = currentDate.getFullYear();
fullDate += ' ' + year;

/* full date */ 
document.querySelector('#current-date').textContent = fullDate;