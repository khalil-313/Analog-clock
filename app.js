let secund = document.querySelector(".secund");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");

setInterval(clockhandler, 1000);

function clockhandler() {
  let d = new Date();

  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours() * 30;

  secund.style.transform = `rotateZ(${s * 6}deg)`;
  minute.style.transform = `rotateZ(${m * 6}deg)`;
  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
}
