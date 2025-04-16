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
//for months navigation-------------
let monthNumber = 0
let events = []
const load = () => {
  const dt = new Date();

  //get months for header's month not(this must be here above month variable)-------------
  if (monthNumber !== 0) {
    dt.setMonth(new Date().getMonth() + monthNumber);
  }

  //get day,month,year as digit------------
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();


  //set current month in header as string------------
  document.getElementById("current-month").innerText = dt.toLocaleDateString("en-EN",{ month: "long" }) +' '+ year;

  //get first day of month-----------
  let firstDayOfMonth = new Date(year, month, 1).toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });


  //get the index of firstDayOfMonth in weekdays to calculate empty days in calendar--------
  const paddingDays = weekdays.indexOf(firstDayOfMonth.split(", ")[0]);
  calendar.innerHTML = "";
  
  //get days in month-------
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  //calculate days-and-paddings (with firstDayOfMonth and daysInMonth)--------
  for (let i = 1; i <= paddingDays + daysInMonth; i++){
    //create and add days in calendar---------
    const days = document.createElement("div");
    days.classList.add("days");
    calendar.appendChild(days);


    if (i > paddingDays){
      //add days numbers in days---------
      days.innerText = i - paddingDays;

      //filter active-days and weekand-----------
      const dates = `${month + 1}/${i - paddingDays}/${year}`;
      const we = new Date(dates);
      //when weekend---------
      if (we.getDay() == 0 || we.getDay() == 6) {
        days.classList.add("weekend");
      } else {
        //when not weekend---------
        //get current day------------
        if (i - paddingDays === day && monthNumber === 0) {
          days.id = "current-day";
        }
        //open event panel on days------------
        days.addEventListener('click', (e) => {
          eventPanel(dates)
        })
      }
      
      // const addEventDay = events.find((item) => item.date === dayString);
      // days.appendChild(daysBookingStatus);
    } else {
      days.classList.add("padding-days");
    }
    
  }
}

//events panel-----------------------
const eventPanel = (dates) => {
  events = localStorage.getItem("events") ? JSON.parse(localStorage.getItem("events")) : [];
   //create event panel---------------------
  let el = document.createElement('div')
  el.classList.add('event-panel')
  el.setAttribute('id', dates)
  el.innerHTML = `
    <header id="event-header">
      <h2>Booking Hours</h2>
      <h2 id="eventCloseBtn">X</h2>
    </header>
    <div class="event-panel-container">
      <button class="add-events">Add Event 1</button>
      <button class="add-events">Add Event 2</button>
      <button class="add-events">Add Event 3</button>
      <button class="add-events">Add Event 4</button>
      <button class="add-events">Add Event 5</button>
    </div>
  `
  calendar.appendChild(el)
  //close event panel-------------------
  document.getElementById('eventCloseBtn').addEventListener('click', () => {
    calendar.removeChild(el)
  })

  //select all events triggers--------------------------
  if(document.querySelectorAll('.add-events')){
    document.querySelectorAll('.add-events').forEach(item => {
      //add event in events array-----------------------
      item.addEventListener('click', (e) => {
        events.push({
          date: dates,
          event: e.target.innerText
        })
       
        //save events on loaclstorage---------------------
        localStorage.setItem('events', JSON.stringify(events))
      })
    })
  }
}


const navigationButton = () => {
  document.getElementById("back").addEventListener("click", (e) => {
    monthNumber--;
    load();
  });
  document.getElementById("next").addEventListener("click", (e) => {
    monthNumber++;
    load();
  });
}
navigationButton()
load()