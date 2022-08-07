function fazGet(url) {
   let request = new XMLHttpRequest()
   request.open("GET", url, false)
   request.send()
   return request.responseText
}


function maini(){
  
  
  const d = new Date();
  let hour = d.getHours();
  let minutes= d.getMinutes()
  
  
  
  
  
   info = fazGet("http://dataservice.accuweather.com//forecasts/v1/daily/5day/44944?apikey=AtJ0WkGTEj2zvzvZTASsPTJXpAKJUlyH&language=pt-br&metric=true");
   info2 = fazGet("https://api.thingspeak.com/channels/1481576/feeds.json?results=50");
   info3 = fazGet("http://api.openweathermap.org/data/2.5/weather?q=araucaria&units=metric&appid=75ff6405fb7b261a5d04a3e35adab3ca");

   data = JSON.parse(info);
   sensores = JSON.parse(info2);
   tempo = JSON.parse(info3);




   

JSC.Chart('chartDiv', {
   type: 'line',
   legend_visible: false,
   defaultPoint_marker: { size: 3 },
   defaultAxis: {
    defaultTick_gridLine_visible: false,
    alternateGridFill: "none"
  },
   series: [

      {
         points: [
            {x: '12:00', y: 18},
            {x: '13:00', y: 18},
            {x: '14:00', y: 19},
            {x: '15:00', y: 19},
            {x: '16:00', y: 18},
            {x: '17:00', y: 21},
            {x: '18:00', y: 21},
            {x: '19:00', y: 22},
            {x: '20:00', y: 24}
         ]
      }
   ]
});



