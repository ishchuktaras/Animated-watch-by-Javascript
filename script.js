const hoursElement = document.getElementById('hour_hand');

const date = new Date();
const hour = date.getHours;

hoursElement.setAttribute('transform','rotate(${(360/12)}');
console.log('ahoj');