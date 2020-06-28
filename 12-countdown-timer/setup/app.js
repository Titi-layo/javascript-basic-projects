const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items= document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay =  tempDate.getDate()


let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)


const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}
${hour}:${minute}`

const futureTime = futureDate.getTime()

function format (item){
  if(item < 10){
    return item = `0${item}`
  }
  return item
}


function getRemainingTime()
{
  let today = new Date().getTime() 
  const t = futureTime - today


  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMin = 60*1000


  let days = Math.floor(t/oneDay)
  let hours = Math.floor((t % oneDay)/oneHour)
  let mins = Math.floor((t % oneHour)/oneMin)
  let seconds = Math.floor((t % oneMin) / 1000)

  //set values array

  const values = [days,hours,mins,seconds]

  items.forEach(function(item,index){
    item.textContent = format(values[index])
  })

  if(t<0)
  { 
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry , this giveaway has expired</h4>`
  }
}
//countdown

let countdown = setInterval(getRemainingTime,1000)

getRemainingTime()