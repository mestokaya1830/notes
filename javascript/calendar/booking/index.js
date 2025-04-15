const calendar = document.getElementById("calendar");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthNumber = 0

const load = () => {
  const dt = new Date();

  //get months for header's month not(this must be here above month variable)
  if (monthNumber !== 0) {
    dt.setMonth(new Date().getMonth() + monthNumber);
  }

  //get day,month,year as digit
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();


  //set current month in header as string
  document.getElementById("current-month").innerText = dt.toLocaleDateString("en-EN",{ month: "long" }) +' '+ year;

  //get first day of month
  let firstDayOfMonth = new Date(year, month, 1).toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });


  //get the index of firstDayOfMonth in weekdays to calculate empty days in calendar
  const paddingDays = weekdays.indexOf(firstDayOfMonth.split(", ")[0]);
  calendar.innerHTML = "";
  
  //get days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //calculate days-and-paddings (with firstDayOfMonth and daysInMonth)
  for (let i = 1; i <= paddingDays + daysInMonth; i++){
    const days = document.createElement("div");
    days.classList.add("days");

    if (i > paddingDays){
      //add days in calendar
      days.innerText = i - paddingDays;

      //get current day
      if (i - paddingDays === day && monthNumber === 0) {
        days.id = "current-day";
      }
      
      //open event panel on calendar
      const dates = `${month + 1}/${i - paddingDays}/${year}`;
      days.addEventListener('click', () => {
        document.getElementById('event-panel').style.display = 'block'
      })
      document.getElementById('eventCloseBtn').addEventListener('click', () => {
        document.getElementById('event-panel').style.display = 'none'
      })
      
      // let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];
      // const addEventDay = events.find((item) => item.date === dayString);
    } else {
      // days.classList.add("paddings");
    }
    calendar.appendChild(days);
  }
}

document.getElementById("back").addEventListener("click", (e) => {
  monthNumber--;
  load();
});
document.getElementById("next").addEventListener("click", (e) => {
  monthNumber++;
  load();
});
load()