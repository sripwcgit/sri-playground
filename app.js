const datetimeEl = document.getElementById("datetime");

const formatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});

function updateClock() {
  datetimeEl.textContent = formatter.format(new Date());
}

updateClock();
setInterval(updateClock, 1000);
