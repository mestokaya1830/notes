let nav = 0;
let clicked = null;

const calendar = document.getElementById("calendar");
let fullName = document.getElementById("full-name");
let eventModel = document.getElementById("event-model");
let bookingHour = document.getElementById("booking-hour");
let events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];



const load = () => {
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav); //get months like 1.month 2.month 3.month
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1); //get first day of month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  document.getElementById("month-display").innerText = `${dt.toLocaleDateString(
    "en-EN",
    { month: "long" }
  )} ${year}`;

  const dateString = firstDayOfMonth.toLocaleDateString("en-EN", {
    //date format of first day
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
  calendar.innerHTML = "";

  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    //create days of month
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const dayString = `${month + 1}/${i - paddingDays}/${year}`;
      const addEventDay = events.find((item) => item.date === dayString);
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = "current-day";
      }

      if(addEventDay){
        const eventDiv = document.createElement('div')
        eventDiv.classList.add('event')
        eventDiv.innerText = addEventDay.bookingname
        eventDiv.name = addEventDay.bookingname
        daySquare.appendChild(eventDiv)
      }
      daySquare.addEventListener("click", (e) => openModel(dayString));

      //filter weekend
      const wd = new Date(dayString);
      if (wd.getDay() == 0 || wd.getDay() == 6) {
        daySquare.classList.add("weekend");
        daySquare.addEventListener('click', () => {
          document.getElementById("event-model").style.display = "none";
        })
        if (document.getElementById("current-day")) {
          document.getElementById("current-day").style.backgroundColor = "green";
        }
      }
    } else {
      daySquare.classList.add("padding");
    }

    calendar.appendChild(daySquare);
  }
};

const openModel = (date) => {
  eventModel.style.display = "block";
  clicked = date;
  const eventForDay = events.find(item => item.date === clicked)
  if (eventForDay) {
    document.getElementById('event-text').innerText = eventForDay.bookingname
    document.getElementById('delete-model').style.display = 'block'
  } else {
    eventModel.style.display = 'block'
  }
};

const closeModel = () => {
  fullName.value = "";
  clicked = null;
  document.getElementById("event-model").style.display = "none";
  load();
};

const deleteEvent = () => {
  events = events.filter((item) => item.date !== clicked);
  localStorage.setItem("events", JSON.stringify(events));
  clicked = null;
  document.getElementById("delete-model").style.display = "none";
  load();
  eventModel.style.display = "none";
};

const initButtons = () => {
  document.getElementById("back").addEventListener("click", (e) => {
    nav--;
    load();
  });
  document.getElementById("next").addEventListener("click", (e) => {
    nav++;
    load();
  });

  document.getElementById("save").addEventListener("click", (e) => {
    if (fullName.value) {
      fullName.classList.remove("err");
      events.push({
        date: clicked,
        bookingname: fullName.value,
        bookingHour: bookingHour.value,
      });
      localStorage.setItem("events", JSON.stringify(events));
      closeModel();
    } else {
      fullName.classList.add("err");
    }
  });

  document.getElementById("cancel").addEventListener("click", closeModel);
  document.getElementById('delete').addEventListener('click', deleteEvent)
  document.getElementById('close').addEventListener('click', () => {
    clicked = null
    closeModel()
    document.getElementById('delete-model').style.display = 'none'
  })
};

load();
initButtons();
