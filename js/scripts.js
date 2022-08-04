

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
  
  
  const d = new Date();
  let hour = d.getHours();
  let minutes= d.getMinutes()
  
  
  
  
  
   info = fazGet("http://dataservice.accuweather.com//forecasts/v1/daily/5day/44944?apikey=AtJ0WkGTEj2zvzvZTASsPTJXpAKJUlyH&language=pt-br&metric=true");
   info2 = fazGet("https://api.thingspeak.com/channels/1481576/feeds.json?results=50");
   info3 = fazGet("http://api.openweathermap.org/data/2.5/weather?q=araucaria&units=metric&appid=75ff6405fb7b261a5d04a3e35adab3ca");

   data = JSON.parse(info);
   sensores = JSON.parse(info2);
   tempo = JSON.parse(info3);

   let temperatura = tempo.main.temp;
   let Temp = temperatura.toString().split(".");

   let vl_temp = sensores.feeds[49].field2;
   let TempAR = vl_temp.toString().split(".");

   let vl_chuva = sensores.feeds[49].field6;
   let vl_vento = sensores.feeds[49].field5;
   let vl_pressao = sensores.feeds[49].field3;
   let vl_umidAr = sensores.feeds[49].field1;
   let vl_dirVento = sensores.feeds[49].field4;   


   let vl_descriDia = data.DailyForecasts[0].Day.IconPhrase;
   let vl_descriNoite = data.DailyForecasts[0].Night.IconPhrase;
   let vl_iconDia = data.DailyForecasts[0].Day.Icon;
  let vl_iconNoite = data.DailyForecasts[0].Night.Icon;
   let vl_iconpd1 = data.DailyForecasts[1].Day.Icon;
   let vl_iconpd2 = data.DailyForecasts[2].Day.Icon;
   let vl_iconpd3 = data.DailyForecasts[3].Day.Icon;

   let vl_tempMax = data.DailyForecasts[0].Temperature.Maximum.Value;
   let vl_pd1 = data.DailyForecasts[1].Date;
   let vl_pd2 = data.DailyForecasts[2].Date;
   let vl_pd3 = data.DailyForecasts[3].Date;
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
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field2},
            {x: sensores.feeds[10].entry_id, y: sensores.feeds[10].field2},
            {x: sensores.feeds[15].entry_id, y: sensores.feeds[15].field2},
            {x: sensores.feeds[20].entry_id, y: sensores.feeds[20].field2},
            {x: sensores.feeds[25].entry_id, y: sensores.feeds[25].field2},
            {x: sensores.feeds[30].entry_id, y: sensores.feeds[30].field2},
            {x: sensores.feeds[35].entry_id, y: sensores.feeds[35].field2},
            {x: sensores.feeds[49].entry_id, y: sensores.feeds[49].field2}
         ];

 let graf2 =[
            {x: sensores.feeds[0].entry_id, y: sensores.feeds[0].field1},
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field1},
            {x: sensores.feeds[10].entry_id, y: sensores.feeds[10].field1},
            {x: sensores.feeds[15].entry_id, y: sensores.feeds[15].field1},
            {x: sensores.feeds[20].entry_id, y: sensores.feeds[20].field1},
            {x: sensores.feeds[25].entry_id, y: sensores.feeds[25].field1},
            {x: sensores.feeds[30].entry_id, y: sensores.feeds[30].field1},
            {x: sensores.feeds[35].entry_id, y: sensores.feeds[35].field1},
            {x: sensores.feeds[49].entry_id, y: sensores.feeds[49].field1}
         ];        


let graf3 =[
            {x: sensores.feeds[0].entry_id, y: sensores.feeds[0].field3},
            {x: sensores.feeds[5].entry_id, y: sensores.feeds[5].field3},
            {x: sensores.feeds[10].entry_id, y: sensores.feeds[10].field3},
            {x: sensores.feeds[15].entry_id, y: sensores.feeds[15].field3},
            {x: sensores.feeds[20].entry_id, y: sensores.feeds[20].field3},
            {x: sensores.feeds[25].entry_id, y: sensores.feeds[25].field3},
            {x: sensores.feeds[30].entry_id, y: sensores.feeds[30].field3},
            {x: sensores.feeds[35].entry_id, y: sensores.feeds[35].field3},
            {x: sensores.feeds[49].entry_id, y: sensores.feeds[49].field3}
         ];
    JSC.Chart('chartTemp', {
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


JSC.Chart('chartUmid', {
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

JSC.Chart('chartPres', {
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

if (hour < 18) {
     let img = document.getElementById("icon");
   img.src = "imagens/" + vl_iconDia + ".png";
   document.getElementById("tx_descri").innerHTML = vl_descriDia;
 }else{
     let img = document.getElementById("icon");
   img.src = "imagens/" + vl_iconNoite + ".png";
  document.getElementById("tx_descri").innerHTML = vl_descriNoite;
 }

  
  if(vl_dirVento < 22 ){
  document.getElementById("tx_dirVento").innerHTML = "N";
} else if(vl_dirVento < 67){
  document.getElementById("tx_dirVento").innerHTML = "NE";
}else if(vl_dirVento< 112){
  document.getElementById("tx_dirVento").innerHTML = "L";
}else if(vl_dirVento< 157){
  document.getElementById("tx_dirVento").innerHTML = "SE";
}else if(vl_dirVento< 202){
  document.getElementById("tx_dirVento").innerHTML = "S";
}else if(vl_dirVento< 247){
  document.getElementById("tx_dirVento").innerHTML = "SO";
}else if(vl_dirVento< 292){
  document.getElementById("tx_dirVento").innerHTML = "O";
}else if(vl_dirVento< 337){
  document.getElementById("tx_dirVento").innerHTML = "NO";
}else if(vl_dirVento< 360){
  document.getElementById("tx_dirVento").innerHTML = "N";
}
  
  
  
   document.getElementById("tx_temp").innerHTML =  TempAR[0] + "°";
   document.getElementById("tx_temp-graf").innerHTML =  TempAR[0] + "°";
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
   document.getElementById("pd1").innerHTML = vl_pd1.slice(8,10)+"/"+vl_pd1.slice(5,7);
   document.getElementById("pd2").innerHTML = vl_pd2.slice(8,10)+"/"+vl_pd2.slice(5,7);
   document.getElementById("pd3").innerHTML = vl_pd3.slice(8,10)+"/"+vl_pd3.slice(5,7);




   let imgpd1 = document.getElementById("icon_pd1");
   imgpd1.src = "imagens/" + vl_iconpd1 + ".png";
   let imgpd2 = document.getElementById("icon_pd2");
   imgpd2.src = "imagens/" + vl_iconpd2 + ".png";
   let imgpd3 = document.getElementById("icon_pd3");
   imgpd3.src = "imagens/" + vl_iconpd3 + ".png";





   
console.log(vl_iconpd3);
   

   
   


}


maini()




JSC.Chart('chartDiv-solo-sol', {
  box:{boxVisible:false},
   type: 'area spline',
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
         points: [
            {x: '05:00', y: null},
            {x: '06:00', y: null},
            {x: '07:00', y: null},
            {x: '08:00', y: null},
            {x: '09:00', y: null},
            {x: '10:00', y: null},
            {x: '11:00', y: null},
            {x: '12:00', y: null},
            {x: '13:00', y: null},
            {x: '14:00', y: null},
            {x: '15:00', y: null},
            {x: '16:00', y: null},
            {x: '17:00', y: null},
            {x: '18:00', y: null},
            {x: '19:00', y: null}
         ]
      }
   ]
});

// JS
      
      var value2 = Math.round(Math.random() * 10);
      
      var green = '#1ec079',
        red = '#ff5c57',
        yellow = '#ffc531';
      var colorMarkers = {
        'G-Y-R': [
          { value: [0, 3], color: green, opacity: 1 },
          { value: [3, 7], color: yellow, opacity: 1 },
          { value: [7, 11], color: red, opacity: 1 }
        ]
      };

      var chart = JSC.chart('chartDiv-solo-uv', {
        debug: true,
        box:{boxVisible:false},
        legend_visible: false,
        chartArea_boxVisible: false,
        xAxis: { scale: { range: [0, 1] } },
        defaultAxis: {
          defaultTick: {
            line: { visible: false },
            label_visible: false
          }
        },
        yAxis: [

          {
            id: 'y2',
            scale_range: [0, 11],
            defaultTick_line_length: 20,
            markers: colorMarkers['G-Y-R']
          },
      
        ],
        defaultSeries: {
          type: 'gauge',
          opacity: 1,
          defaultPoint: { marker_color: 'black' },
          mouseTracking_enabled: false,
          shape: {
            fill: 'none',
            outline: { width: 0 },
            label: {
              text: 'médio',
              style_fontSize: 20,
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        },
        series: [

          {
            yAxis: 'y2',
            points: [{ y: 5 }]
          },
 
        ]
      });


       var chart = JSC.chart('chartDiv-solo-umid', {
        box:{boxVisible:false},
        defaultSeries_type: 'gaugeLinearHorizontal',
        legend_visible: false,
        title: {
          visible:false,
        },
        xAxis: { spacingPercentage: 0.2 },
        yAxis: { scale_range: [0, 100] },
        defaultSeries_shape: { label: { visible:false} },
        defaultPoint_label_visible: true,
        series: [
          {
            type: 'column aqua',
            name: 'Umidade do solo',
            points: [['B', 37]]
          },

        ]
      });

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
         points: [
            {x: '12:00', y: null},
            {x: '13:00', y: null},
            {x: '14:00', y: null},
            {x: '15:00', y: null},
            {x: '16:00', y: null},
            {x: '17:00', y: null},
            {x: '18:00', y: null},
            {x: '19:00', y: null},
            {x: '20:00', y: null}
         ]
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
         points: [
            {x: '12:00', y: null},
            {x: '13:00', y: null},
            {x: '14:00', y: null},
            {x: '15:00', y: null},
            {x: '16:00', y: null},
            {x: '17:00', y: null},
            {x: '18:00', y: null},
            {x: '19:00', y: null},
            {x: '20:00', y: null}
         ]
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

JSC.Chart('chartDiv4', {
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
