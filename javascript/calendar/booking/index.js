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
let bookings = []
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
    const dates = `${month + 1}/${i - paddingDays}/${year}`;
    //create and add days in calendar---------
    const days = document.createElement("div");
    days.classList.add("days");
    days.setAttribute('id', dates)
    calendar.appendChild(days);

    if (i > paddingDays){
      //add days numbers in days---------
      days.innerText = i - paddingDays;

      //filter active-days and weekand-----------
      
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

        //get bookings
        bookings = localStorage.getItem("bookings") ? JSON.parse(localStorage.getItem("bookings")) : [];
         bookings.forEach(item => {
          if(item.date === days.id){
            days.innerHTML += `<div id="${item.id}">${item.hour}</div>`
          }
         })
        
        //open event panel on days------------
        days.addEventListener('click', (e) => {
          eventPanel(dates)
        })
      }
    } else {
      days.classList.add("padding-days");
    }
    
  }
}

// //get bookings
// const getBookings = () => {
  
//   bookings = localStorage.getItem("bookings") ? JSON.parse(localStorage.getItem("bookings")) : [];
//   document.querySelectorAll('.days').forEach((item , index) => {
//     let result = bookings.filter(item2 => item2.date == item.id )
//     item.innerText = result
//   })
// }
//adding booking panel-----------------------
const eventPanel = (dates) => {
  bookings = localStorage.getItem("bookings") ? JSON.parse(localStorage.getItem("bookings")) : [];
   //create booking panel---------------------
  let el = document.createElement('div')
  el.classList.add('booking-panel')
  el.innerHTML = `
    <header id="booking-header">
      <h2>Bookings</h2>
      <h2>${dates}</h2>
      <h2 id="panelCloseBtn">X</h2>
    </header>
    <div class="booking-panel-container">
     <div class="booking-list">
      <span class="booking-hours">8:00</span>
      <input type="text" placeholder="Fullname.." id="booking-name" class="booking-name" />
      <input type="text" placeholder="Content.." id="booking-content" class="booking-content" />
       <button class="add-booking" data-state="true">Add</button>
       <button class="cancel-booking" data-state="false">Cancel</button>
     </div>
     <div class="booking-list">
      <span class="booking-hours">8:30</span>
      <input type="text" placeholder="Fullname.." id="booking-name" class="booking-name" />
       <input type="text" placeholder="Content.." id="booking-content" class="booking-content" />
       <button class="add-booking" data-state="true">Add</button>
       <button class="cancel-booking" data-state="false">Cancel</button>
     </div>
     <div class="booking-list">
      <span class="booking-hours">9:00</span>
      <input type="text" placeholder="Fullname.." id="booking-name" class="booking-name" />
       <input type="text" placeholder="Content.." id="booking-content" class="booking-content" />
      <button class="add-booking" data-state="true">Add</button>
       <button class="cancel-booking" data-state="false">Cancel</button>
     </div>
    </div>
  `
  calendar.appendChild(el)
  //close panel-------------------
  document.getElementById('panelCloseBtn').addEventListener('click', () => {
    calendar.removeChild(el)
  })

  //select all bookings triggers--------------------------
  if(document.querySelectorAll('.add-booking')){
    document.querySelectorAll('.add-booking').forEach(item => {
      //add booking in bookings array-----------------------
      item.addEventListener('click', (e) => {
        let id = Math.floor(Math .random() * 99999999)
        bookings.push({
          id: id,
          hour: item.parentNode.children[0].innerText,
          fullname: item.parentNode.children[1].value,
          date: dates,
          content: item.parentNode.children[2].value
        })
        //save bookings on loaclstorage---------------------
        localStorage.setItem('bookings', JSON.stringify(bookings))
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