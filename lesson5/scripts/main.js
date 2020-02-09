document.querySelector("#currenttemp").innerHTML = '50&deg';
document.querySelector("#windspeed").innerHTML = '10mph';
document.querySelector("#humidity").innerHTML = '20&percnt';


/* pancake */
const currentDate =  new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 5) {
    aside.style.display = 'block';
}
    else {
        aside.style.display = 'none';
    }
