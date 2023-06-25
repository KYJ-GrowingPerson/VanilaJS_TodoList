const dateInfo = document.querySelector("h3#date")
const clock = document.querySelector("h2#clock");

const day_index = ["일","월","화","수","목","금","토"]
function getClock(){
    const date = new Date();
    
    let Month = date.getMonth() + 1;
    Month = String(Month % 12);
    const today_date = String(date.getDate());
    const today_day = String(day_index[date.getDay()]);
    
    dateInfo.innerText = `${Month}월 ${today_date}일 ${today_day}요일`
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock,1000)