const secondsStick = document.getElementById("seconds-stick");
const minutesStick = document.getElementById("minutes-stick");
const hoursStick = document.getElementById("hours-stick");

const getTime = () => {
  const rightNow = new Date();
  const seconds = rightNow.getSeconds();
  const minutes = rightNow.getMinutes();
  const hours = rightNow.getHours();

  // How should the movement of the seconds stick be?
  // 360deg in a circle and 60 secs in a minute
  // 360/60 = 6 deg per second

  //The movement for the minutes will be the same because..:
  //360 deg in a circle and 60 min in an hour:
  //360/60 = 6
  const timeInterval = 6;

  secondsStick.style.transform = `rotate(${seconds * timeInterval}deg)`

  minutesStick.style.transform = `rotate(${minutes * timeInterval + seconds/10}deg)`

  hoursStick.style.transform = `rotate(${hours * 30 /* 360deg/12hours */+ minutes/2}deg)`
};

getTime();

//* The seconds stick is only upating on page refresh. To avoid this, setInterval should come in handy:

setInterval(getTime, 100)