const hours=document.querySelector(".hour")
const minutes=document.querySelector(".minute")
const seconds=document.querySelector(".second")

// function setDate(){
//     // const time =document.querySelector("#time");
//     // console.log(time)
//     const date=new Date();
//     const hour=date.getHours()
//     const minute=date.getMinutes();
//     const second=date.getSeconds();

//     const secondDegree=(second / 60) * 360;
//     seconds.style.transform=`rotate(${secondDegree}deg)`;

//     const minuteDegree=(minute / 60) * 360;
//     minutes.style.transform=`rotate(${minuteDegree}deg)`;

//     const hourDegree=(hour / 12) * 360;
//     seconds.style.transform=`rotate(${hourDegree}deg)`;
// }
// setInterval(setDate,1000)

    const hour = document.querySelector(".hour");
    const minute = document.querySelector(".minute");
    const second = document.querySelector(".second");

     setInterval(()=>{

      const now = new Date();
      const getSecond = now.getSeconds();
      const getMinute = now.getMinutes();
      const getHour = now.getHours();
      
      const secondDegree = (getSecond / 60) * 360;
      second.style.transform = `rotate(${secondDegree}deg)`;
      
      const minuteDegree = (getMinute / 60) * 360;
      minute.style.transform = `rotate(${minuteDegree}deg)`;

      const hourDegree = (getHour / 12) * 360;
      hour.style.transform = `rotate(${hourDegree}deg)`;
     })

 