//*Wednesday, 20 May 2020 */
/* declare date variable*/
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






/*weather summary*/

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=aea8abccbeb560253b793ee4faf83aa6&units=imperial'
fetch(apiURL)
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


/*let f, t, s;
t = 50;
s = 10;











/* pancake */
//const currentDate =  new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
    else {
        aside.style.display = 'none';
    }



    //font loader

   /* WebFont.load({
        google: {
          families: [
             'fontfamilynameofyourchoice'
          ]
        }
      });
      */