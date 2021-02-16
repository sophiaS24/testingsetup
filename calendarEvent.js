

// pop form events 

let modalBtns = [...document.querySelectorAll(".createPopup")];
modalBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.getAttribute('data-modal');
    document.getElementById(modal)
      .style.display = "block";
  }
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn) {
  btn.onclick = function() {
    let modal = btn.closest('.modal');
    modal.style.display = "none";
  }
});
window.onclick = function(event) {
  if(event.target.className === "modal") {
    event.target.style.display = "none";
  }
}



// calendar creation events 
// Note: back end code is required to store data

let monthNumberToMonth = new Map([
    ['01', 'Jan'],
    ['02', 'Feb'],
    ['03', 'Mar'],
    ['04', 'Apr'],
    ['05', 'May'],
    ['06', 'Jun'],
    ['07', 'Jul'],
    ['08', 'Aug'],
    ['09', 'Sep'],
    ['10', 'Oct'],
    ['11', 'Nov'],
    ['12', 'Dec']
])



function addMyEvent(){

    var title = document.getElementById("form-title").value;
    console.log(title); 
    
    var date = document.getElementById("datepicker").value;
    
    var sdate = date.split("-"); //split date string 
    console.log(sdate); 
    var day = sdate[2].replace(/^0+/, ''); //remove leading zero with Regex
    var year = sdate[0]; 
    var tempMonth = sdate[1]; 
    var month = monthNumberToMonth.get(tempMonth); //convert num to month name
    console.log(month); 
    var description = document.getElementById("form-description").value;
    console.log(description); 

const calContent = document.getElementsByClassName('calendar-content')[0]; 
console.log("title"); 
    
    
    if(calContent.innerHTML.indexOf(year) === -1 ){

        const yearHeader = document.createElement('h2');
        yearHeader.setAttribute('class', 'year'); 
        yearHeader.innerText = year; 
        calContent.appendChild(yearHeader); 
    }

    const calendar = document.createElement('div'); 
    calendar.setAttribute('class', 'calendar');
    
    const calendarInfo = document.createElement('div'); 
    calendarInfo.setAttribute('class', 'calendar-info');
    
    const calendarDay = document.createElement('div'); 
    calendarDay.setAttribute('class', 'calendar-day');
    
    const calDay = document.createElement('div'); 
    calDay.setAttribute('class', 'day');
    calDay.innerText = day; 

    const calMonth = document.createElement('div'); 
    calMonth.setAttribute('class', 'month');
    calMonth.innerText = month; 

    const calEvent = document.createElement('div'); 
    calEvent.setAttribute('class', 'calendar-event');

    const caltitle = document.createElement('h2'); 
    caltitle.setAttribute('class', 'calendar-title');
    caltitle.innerText = title; 

    const calDescription = document.createElement('div'); 
    calDescription.setAttribute('class', 'calendar-detail');
    calDescription.innerText = description; 

    calendarDay.appendChild(calDay);
    calendarDay.appendChild(calMonth);
    calendarInfo.appendChild(calendarDay);
    calEvent.appendChild(caltitle);
    calEvent.appendChild(calDescription);
    calendar.appendChild(calendarInfo);
    calendar.appendChild(calEvent);
    calContent.appendChild(calendar); 
    console.log('calendar added');

    document.getElementById('cls').click(); //close pop window 

}


// Navbar script

// When the user scrolls the page, execute navbarSticky
window.onscroll = function() {navbarSticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 











