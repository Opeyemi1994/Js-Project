function printTime() {
    let hours = document.querySelector('.hours');

    let minutes = document.querySelector('.minutes');

    let seconds = document.querySelector('.seconds');

    let myDate = new Date();

    let currentHour = myDate.getHours();
    let currentMinute = myDate.getMinutes();
    let currentSecond = myDate.getSeconds();

 
    hours.innerHTML = currentHour
    
    minutes.innerHTML = currentMinute

    seconds.innerHTML = currentSecond

    

}
setInterval(printTime, 1000);