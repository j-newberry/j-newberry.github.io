fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response); 
            
            document.querySelector('#temple1').textContent = response[0].templeName;
            document.querySelector('#address').textContent = response[0].streetLine1;
            document.querySelector('#city').textContent = response[0].city;
            document.querySelector('#state').textContent = response[0].state;
            document.querySelector('#country').textContent = response[0].country;
            document.querySelector('#zip').textContent = response[0].zip;
            document.querySelector('#phone').textContent = response[0].telephone;
            document.querySelector('#email').textContent = response[0].email;

            response[0].services.forEach(
                service => {
                    document.querySelector('#services').innerHTML +=
                        `<li>${service}<li>`;
                }
            )
        
            document.querySelector('#image1').setAttribute('src', response[0].image);
         }
    )




    //WEATHERSUMMARY
    const apiUrlWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5314943&appid=aea8abccbeb560253b793ee4faf83aa6&units=imperial'
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
        document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + '&deg;';
        document.getElementById("windSpeed").innerHTML = windSpeed.toFixed(0) + ' mph';
        document.querySelector('#humidity').textContent = jsObject.main.humidity + '%';

        if (windChill == 0) {
            document.getElementById("windChill").innerHTML = 'N/A';
        }
        
        else {
            document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg;';
        }  
        document.querySelector('#weatherDesc').textContent = 
            jsObject.weather[0].main;

        let imageUrl = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

        document.querySelector('#weatherImage')
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




//hamburgermenu
/*const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
  document.querySelector(".navigation").classList.toggle("responsive");
}*/