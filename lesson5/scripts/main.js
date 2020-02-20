/*Wednesday, 20 May 2020 */
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

let f, t, s;
t = 50;
s = 10;

if(t <= 50 && s >= 3) {
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.querySelector("#windchill").innerHTML = f.toFixed(2) + '&deg';

}
else {
    f = 'N/A';
    document.querySelector("#windchill").innerHTML = f;

}
document.querySelector("#currenttemp").innerHTML =t + '&deg;'; /*'50&deg'*/;
document.querySelector("#windspeed").innerHTML = s + 'mph';/*'10mph'*/;


/* pancake */
const currentDate =  new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
    else {
        aside.style.display = 'none';
    }
