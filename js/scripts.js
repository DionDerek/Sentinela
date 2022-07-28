

var graf1=[]
var graf2=[]
var graf3=[]


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";

}






function fazGet(url) {
   let request = new XMLHttpRequest()
   request.open("GET", url, false)
   request.send()
   return request.responseText
}


function maini(){

   info = fazGet("http://dataservice.accuweather.com//forecasts/v1/daily/5day/44944?apikey=AtJ0WkGTEj2zvzvZTASsPTJXpAKJUlyH&language=pt-br&metric=true");
   info2 = fazGet("https://api.thingspeak.com/channels/1481576/feeds.json?results=10");
   info3 = fazGet("http://api.openweathermap.org/data/2.5/weather?q=curitiba&units=metric&appid=75ff6405fb7b261a5d04a3e35adab3ca");

   data = JSON.parse(info);
   sensores = JSON.parse(info2);
   tempo = JSON.parse(info3);

   let temperatura = tempo.main.temp;
   let Temp = temperatura.toString().split(".");

   let vl_temp = sensores.feeds[8].field2;
   let TempAR = vl_temp.toString().split(".");

   let vl_chuva = sensores.feeds[8].field6;
   let vl_vento = sensores.feeds[8].field5;
   let vl_pressao = sensores.feeds[8].field3;
   let vl_umidAr = sensores.feeds[8].field1;
   


   let vl_descri = data.DailyForecasts[0].Day.IconPhrase;

   let vl_tempMax = data.DailyForecasts[0].Temperature.Maximum.Value;
   let vl_tempMin = data.DailyForecasts[0].Temperature.Minimum.Value;
   let TempMax = vl_tempMax.toString().split(".");
   let TempMin = vl_tempMin.toString().split(".");

   let vl_tempMax1 = data.DailyForecasts[1].Temperature.Maximum.Value;
   let vl_tempMin1 = data.DailyForecasts[1].Temperature.Minimum.Value;
   let TempMax1 = vl_tempMax1.toString().split(".");
   let TempMin1 = vl_tempMin1.toString().split(".");

   let vl_tempMax2 = data.DailyForecasts[2].Temperature.Maximum.Value;
   let vl_tempMin2 = data.DailyForecasts[2].Temperature.Minimum.Value;
   let TempMax2 = vl_tempMax2.toString().split(".");
   let TempMin2 = vl_tempMin2.toString().split(".");

   let vl_tempMax3 = data.DailyForecasts[3].Temperature.Maximum.Value;
   let vl_tempMin3 = data.DailyForecasts[3].Temperature.Minimum.Value;
   let TempMax3 = vl_tempMax3.toString().split(".");
   let TempMin3 = vl_tempMin3.toString().split(".");


let graf1 =[
            {x: sensores.feeds[0].entry_id, y: sensores.feeds[0].field2},
            {x: sensores.feeds[1].entry_id, y: sensores.feeds[1].field2},
            {x: sensores.feeds[2].entry_id, y: sensores.feeds[2].field2},
            {x: sensores.feeds[3].entry_id, y: sensores.feeds[3].field2},
            {x: sensores.feeds[4].entry_id, y: sensores.feeds[4].field2},
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field2},
            {x: sensores.feeds[6].entry_id, y: sensores.feeds[6].field2},
            {x: sensores.feeds[7].entry_id, y: sensores.feeds[7].field2},
            {x: sensores.feeds[8].entry_id, y: sensores.feeds[8].field2}
         ];

 let graf2 =[
            {x: sensores.feeds[0].entry_id, y: sensores.feeds[0].field1},
            {x: sensores.feeds[1].entry_id, y: sensores.feeds[1].field1},
            {x: sensores.feeds[2].entry_id, y: sensores.feeds[2].field1},
            {x: sensores.feeds[3].entry_id, y: sensores.feeds[3].field1},
            {x: sensores.feeds[4].entry_id, y: sensores.feeds[4].field1},
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field1},
            {x: sensores.feeds[6].entry_id, y: sensores.feeds[6].field1},
            {x: sensores.feeds[7].entry_id, y: sensores.feeds[7].field1},
            {x: sensores.feeds[8].entry_id, y: sensores.feeds[8].field1}
         ];        


let graf3 =[
            {x: sensores.feeds[0].entry_id, y: sensores.feeds[0].field3},
            {x: sensores.feeds[1].entry_id, y: sensores.feeds[1].field3},
            {x: sensores.feeds[2].entry_id, y: sensores.feeds[2].field3},
            {x: sensores.feeds[3].entry_id, y: sensores.feeds[3].field3},
            {x: sensores.feeds[4].entry_id, y: sensores.feeds[4].field3},
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field3},
            {x: sensores.feeds[6].entry_id, y: sensores.feeds[6].field3},
            {x: sensores.feeds[7].entry_id, y: sensores.feeds[7].field3},
            {x: sensores.feeds[8].entry_id, y: sensores.feeds[8].field3}
         ];
    JSC.Chart('chartDiv1', {
   type: 'line spline',
   box:{boxVisible:false},
   legend_visible: false,
   yAxis: {visible:false},
    xAxis: {visible:false},
   defaultPoint_marker: { size: 3 },
   defaultAxis: {
    defaultTick_gridLine_visible: false,
    alternateGridFill: "none"
  },
   series: [

      {
         points: graf1
      }
   ]
});


JSC.Chart('chartDiv2', {
   type: 'line spline',
   legend_visible: false,
   box:{boxVisible:false},
   yAxis: {visible:false},
    xAxis: {visible:false},
   defaultPoint_marker: { size: 3 },
   defaultAxis: {
    defaultTick_gridLine_visible: false,
    alternateGridFill: "none"
  },
   series: [

      {
        points: graf2
      }
   ]
});

JSC.Chart('chartDiv3', {
   type: 'line spline',
   legend_visible: false,
   box:{boxVisible:false},
   yAxis: {visible:false},
    xAxis: {visible:false},
   defaultPoint_marker: { size: 3 },
   defaultAxis: {
    defaultTick_gridLine_visible: false,
    alternateGridFill: "none"
  },
   series: [

      {
         points: graf3
      }
   ]
});


   document.getElementById("tx_descri").innerHTML = vl_descri;
   document.getElementById("tx_temp").innerHTML = Temp[0] + "°";
   document.getElementById("tx_temp-graf").innerHTML = Temp[0] + "°";
   document.getElementById("tx_umidadeAr").innerHTML = vl_umidAr + " %";
   document.getElementById("tx_umid-graf").innerHTML = vl_umidAr + " %";
   document.getElementById("tx_pressao").innerHTML = vl_pressao + " hPa";
   document.getElementById("tx_pressao-graf").innerHTML = vl_pressao + " hPa";
   document.getElementById("tx_vento").innerHTML = vl_vento + " m/s";   
   document.getElementById("tx_chuva").innerHTML = vl_chuva + "mm"; 
   document.getElementById("tx_tempAr").innerHTML = TempAR[0] + "°";
   document.getElementById("tx_temp-max").innerHTML = TempMax[0] + "°";
   document.getElementById("tx_temp-min").innerHTML = TempMin[0] + "°";
   document.getElementById("tx_temp-max1").innerHTML = TempMax1[0] + "°";
   document.getElementById("tx_temp-min1").innerHTML = TempMin1[0] + "°";
   document.getElementById("tx_temp-max2").innerHTML = TempMax2[0] + "°";
   document.getElementById("tx_temp-min2").innerHTML = TempMin2[0] + "°";
   document.getElementById("tx_temp-max3").innerHTML = TempMax3[0] + "°";
   document.getElementById("tx_temp-min3").innerHTML = TempMin3[0] + "°";





   

   

   console.log(graf1);
   


}


maini()
