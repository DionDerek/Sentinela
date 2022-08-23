

var graf1=[]
var graf2=[]
var graf3=[]

  const d = new Date();
  let hour = d.getHours();
  let minutes= d.getMinutes();
  diaSemana=["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB","DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";

}

function fechar() {
  document.getElementById("tab").style.visibility  = "hidden";
  document.getElementById("chartTemp").style.visibility = "visible";
  document.getElementById("chartUmid").style.visibility = "visible";
  document.getElementById("chartPres").style.visibility = "visible";
  document.getElementById("chartDiv1").style.visibility = "visible";
  document.getElementById("chartDiv2").style.visibility = "visible";
  document.getElementById("chartDiv3").style.visibility = "visible";
  document.getElementById("chartDiv4").style.visibility = "visible";
  document.getElementById("chartDiv-solo-umid").style.visibility = "visible";
  document.getElementById("chartDiv-solo-uv").style.visibility = "visible";
  document.getElementById("chartDiv-solo-sol").style.visibility = "visible";

 

}
function mostrarTab() {
  document.getElementById("tab").style.visibility = "visible";
  document.getElementById("chartTemp").style.visibility = "hidden";
  document.getElementById("chartUmid").style.visibility = "hidden";
  document.getElementById("chartPres").style.visibility = "hidden";
  document.getElementById("chartDiv1").style.visibility = "hidden";
  document.getElementById("chartDiv2").style.visibility = "hidden";
  document.getElementById("chartDiv3").style.visibility = "hidden";
  document.getElementById("chartDiv4").style.visibility = "hidden";
  document.getElementById("chartDiv-solo-umid").style.visibility = "hidden";
  document.getElementById("chartDiv-solo-uv").style.visibility = "hidden";
  document.getElementById("chartDiv-solo-sol").style.visibility = "hidden";


}


function fazGet(url) {
   let request = new XMLHttpRequest()
   request.open("GET", url, false)
   request.send()
   return request.responseText
}

function crialinha(sensores){
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdHora = document.createElement("td");
  tdTemp = document.createElement("td");
  tdPress = document.createElement("td");
  tdUmid = document.createElement("td");
  tdChuva = document.createElement("td");
  vl_dia=sensores.created_at.slice(8,10);
  vl_hora=parseInt(sensores.created_at.slice(11,13))-3;

  if (vl_hora == -3) {
    vl_hora = 21;
    vl_dia=vl_dia-1;
  }else if(vl_hora == -2){
    vl_hora = 22;
    vl_dia=vl_dia-1;
  }else if (vl_hora == -1) {
    vl_hora = 23;
    vl_dia=vl_dia-1;
  }

  tdId.innerHTML = vl_dia+"/"+sensores.created_at.slice(5,7);
  tdHora.innerHTML = vl_hora+sensores.created_at.slice(13,16);
  tdTemp.innerHTML = sensores.field2+" ºC";
  tdPress.innerHTML = sensores.field3;
  tdUmid.innerHTML = sensores.field1+" %";
  tdChuva.innerHTML = sensores.field6+" mm";


  linha.appendChild(tdId);
  linha.appendChild(tdHora);
  linha.appendChild(tdTemp);
  linha.appendChild(tdPress);
  linha.appendChild(tdUmid);
  linha.appendChild(tdChuva);

  return linha;

}



function maini(){
  
  

  
  
  
  
  
   info = fazGet("http://dataservice.accuweather.com//forecasts/v1/daily/5day/44944?apikey=AtJ0WkGTEj2zvzvZTASsPTJXpAKJUlyH&language=pt-br&metric=true");
   info2 = fazGet("https://api.thingspeak.com/channels/1481576/feeds.json?results=50");
   info4 = fazGet("https://api.thingspeak.com/channels/1481576/feeds.json?results=141");
   info5 = fazGet("https://api.thingspeak.com/channels/1075478/feeds.json?results=2");
   info3 = fazGet("http://api.openweathermap.org/data/2.5/weather?q=araucaria&units=metric&appid=75ff6405fb7b261a5d04a3e35adab3ca");

   data = JSON.parse(info);
   sensores = JSON.parse(info2);
   tempo = JSON.parse(info3);
  sensoresTab =JSON.parse(info4);
  sensorSolo = JSON.parse(info5);


let chuvaDia = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];



let tabela = document.getElementById("tabela");
// console.log(novaInffo);

  sensoresTab.feeds.reverse().forEach(element =>{
    let linha =crialinha(element);
    tabela.appendChild(linha);

     });

   let temperatura = tempo.main.temp;
   let Temp = temperatura.toString().split(".");
   let tempSolo = sensorSolo.feeds[1].field2.split(".");
   let umidSolo = sensorSolo.feeds[1].field1;
   let condSolo = sensorSolo.feeds[1].field3;
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
            {x: sensores.feeds[5].entry_id, y: parseFloat(sensores.feeds[5].field2)},
            {x: sensores.feeds[10].entry_id, y: parseFloat(sensores.feeds[10].field2)},
            {x: sensores.feeds[15].entry_id, y: parseFloat(sensores.feeds[15].field2)},
            {x: sensores.feeds[20].entry_id, y: parseFloat(sensores.feeds[20].field2)},
            {x: sensores.feeds[25].entry_id, y: parseFloat(sensores.feeds[25].field2)},
            {x: sensores.feeds[30].entry_id, y: parseFloat(sensores.feeds[30].field2)},
            {x: sensores.feeds[35].entry_id, y: parseFloat(sensores.feeds[35].field2)},
            {x: sensores.feeds[40].entry_id, y: parseFloat(sensores.feeds[40].field2)},
            {x: sensores.feeds[49].entry_id, y: parseFloat(sensores.feeds[49].field2)}
         ];

 let graf2 =[
            {x: sensores.feeds[5].entry_id, y: parseFloat(sensores.feeds[5].field1)},
            {x: sensores.feeds[10].entry_id, y: parseFloat(sensores.feeds[10].field1)},
            {x: sensores.feeds[15].entry_id, y: parseFloat(sensores.feeds[15].field1)},
            {x: sensores.feeds[20].entry_id, y: parseFloat(sensores.feeds[20].field1)},
            {x: sensores.feeds[25].entry_id, y: parseFloat(sensores.feeds[25].field1)},
            {x: sensores.feeds[30].entry_id, y: parseFloat(sensores.feeds[30].field1)},
            {x: sensores.feeds[35].entry_id, y: parseFloat(sensores.feeds[35].field1)},
            {x: sensores.feeds[40].entry_id, y: parseFloat(sensores.feeds[40].field1)},
            {x: sensores.feeds[49].entry_id, y: parseFloat(sensores.feeds[49].field1)}
         ];        


let graf3 =[
            
            {x: sensores.feeds[5].entry_id, y: parseFloat(sensores.feeds[5].field3)},
            {x: sensores.feeds[10].entry_id, y: parseFloat(sensores.feeds[10].field3)},
            {x: sensores.feeds[15].entry_id, y: parseFloat(sensores.feeds[15].field3)},
            {x: sensores.feeds[20].entry_id, y: parseFloat(sensores.feeds[20].field3)},
            {x: sensores.feeds[25].entry_id, y: parseFloat(sensores.feeds[25].field3)},
            {x: sensores.feeds[30].entry_id, y: parseFloat(sensores.feeds[30].field3)},
            {x: sensores.feeds[35].entry_id, y: parseFloat(sensores.feeds[35].field3)},
            {x: sensores.feeds[40].entry_id, y: parseFloat(sensores.feeds[40].field3)},
            {x: sensores.feeds[49].entry_id, y: parseFloat(sensores.feeds[49].field3)}
         ];
// let graf4 =[
            
//             {x: "00:00", y: parseFloat(sensoresTab.feeds[5].field6)},
//             {x: "01:00", y: parseFloat(sensoresTab.feeds[10].field6)},
//             {x: "02:00", y: parseFloat(sensoresTab.feeds[15].field6)},
//             {x: "03:00", y: parseFloat(sensoresTab.feeds[20].field6)},
//             {x: "04:00", y: parseFloat(sensoresTab.feeds[25].field6)},
//             {x: "05:00", y: parseFloat(sensoresTab.feeds[30].field6)},
//             {x: "06:00", y: parseFloat(sensoresTab.feeds[35].field6)},
//             {x: "07:00", y: parseFloat(sensoresTab.feeds[40].field6)},
//             {x: "08:00", y: parseFloat(sensoresTab.feeds[45].field6)},
//             {x: "09:00", y: parseFloat(sensoresTab.feeds[50].field6)},
//             {x: "10:00", y: parseFloat(sensoresTab.feeds[55].field6)},
//             {x: "11:00", y: parseFloat(sensoresTab.feeds[60].field6)},
//             {x: "12:00", y: parseFloat(sensoresTab.feeds[65].field6)},
//             {x: "13:00", y: parseFloat(sensoresTab.feeds[70].field6)},
//             {x: "14:00", y: parseFloat(sensoresTab.feeds[75].field6)},
//             {x: "15:00", y: parseFloat(sensoresTab.feeds[80].field6)},
//             {x: "16:00", y: parseFloat(sensoresTab.feeds[85].field6)},
//             {x: "17:00", y: parseFloat(sensoresTab.feeds[90].field6)},
//             {x: "18:00", y: parseFloat(sensoresTab.feeds[95].field6)},
//             {x: "19:00", y: parseFloat(sensoresTab.feeds[100].field6)},
//             {x: "20:00", y: parseFloat(sensoresTab.feeds[105].field6)},
//             {x: "21:00", y: parseFloat(sensoresTab.feeds[110].field6)},
//             {x: "22:00", y: parseFloat(sensoresTab.feeds[115].field6)},
//             {x: "23:00", y: parseFloat(sensoresTab.feeds[120].field6)},
//             ];
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


// JSC.Chart('chartChuva', {
//    type: 'column',
//    legend_visible: false,
//    box:{boxVisible:true},
//    yAxis: {visible:false},
//     xAxis: {visible:true},
//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//         points: graf4
//       }
//    ]
// });

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
  document.documentElement.setAttribute("data-theme", "dark");
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
   document.getElementById("pd1").innerHTML = diaSemana[d.getDay()+1];
   document.getElementById("pd2").innerHTML = diaSemana[d.getDay()+2];
   document.getElementById("pd3").innerHTML = diaSemana[d.getDay()+3];

   document.getElementById("txcondSolo").innerHTML = condSolo; 
   document.getElementById("txtempSolo").innerHTML = tempSolo[0] + "ºC"; 




   let imgpd1 = document.getElementById("icon_pd1");
   imgpd1.src = "imagens/" + vl_iconpd1 + ".png";
   let imgpd2 = document.getElementById("icon_pd2");
   imgpd2.src = "imagens/" + vl_iconpd2 + ".png";
   let imgpd3 = document.getElementById("icon_pd3");
   imgpd3.src = "imagens/" + vl_iconpd3 + ".png";

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
            points: [['B', parseFloat(umidSolo)]]
          },

        ]
      });





   
console.log(vl_iconpd3);
   

   
   


}


maini()




// JSC.Chart('chartDiv-solo-sol', {
//   box:{boxVisible:false},
//    type: 'area spline',
//    legend_visible: false,
//    yAxis: {visible:false},
//     xAxis: {visible:false},

//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//          points: [
//             {x: '05:00', y: null},
//             {x: '06:00', y: null},
//             {x: '07:00', y: null},
//             {x: '08:00', y: null},
//             {x: '09:00', y: null},
//             {x: '10:00', y: null},
//             {x: '11:00', y: null},
//             {x: '12:00', y: null},
//             {x: '13:00', y: null},
//             {x: '14:00', y: null},
//             {x: '15:00', y: null},
//             {x: '16:00', y: null},
//             {x: '17:00', y: null},
//             {x: '18:00', y: null},
//             {x: '19:00', y: null}
//          ]
//       }
//    ]
// });

// // JS
      
//       var value2 = Math.round(Math.random() * 10);
      
//       var green = '#1ec079',
//         red = '#ff5c57',
//         yellow = '#ffc531';
//       var colorMarkers = {
//         'G-Y-R': [
//           { value: [0, 3], color: green, opacity: 1 },
//           { value: [3, 7], color: yellow, opacity: 1 },
//           { value: [7, 11], color: red, opacity: 1 }
//         ]
//       };

//       var chart = JSC.chart('chartDiv-solo-uv', {
//         debug: true,
//         box:{boxVisible:false},
//         legend_visible: false,
//         chartArea_boxVisible: false,
//         xAxis: { scale: { range: [0, 1] } },
//         defaultAxis: {
//           defaultTick: {
//             line: { visible: false },
//             label_visible: false
//           }
//         },
//         yAxis: [

//           {
//             id: 'y2',
//             scale_range: [0, 11],
//             defaultTick_line_length: 20,
//             markers: colorMarkers['G-Y-R']
//           },
      
//         ],
//         defaultSeries: {
//           type: 'gauge',
//           opacity: 1,
//           defaultPoint: { marker_color: 'black' },
//           mouseTracking_enabled: false,
//           shape: {
//             fill: 'none',
//             outline: { width: 0 },
//             label: {
//               text: 'médio',
//               style_fontSize: 20,
//               align: 'center',
//               verticalAlign: 'bottom'
//             }
//           }
//         },
//         series: [

//           {
//             yAxis: 'y2',
//             points: [{ y: 5 }]
//           },
 
//         ]
//       });


//        

//        JSC.Chart('chartDiv1', {
//    type: 'line spline',
//    box:{boxVisible:false},
//    legend_visible: false,
//    yAxis: {visible:false},
//     xAxis: {visible:false},
//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//          points: [
//             {x: '12:00', y: null},
//             {x: '13:00', y: null},
//             {x: '14:00', y: null},
//             {x: '15:00', y: null},
//             {x: '16:00', y: null},
//             {x: '17:00', y: null},
//             {x: '18:00', y: null},
//             {x: '19:00', y: null},
//             {x: '20:00', y: null}
//          ]
//       }
//    ]
// });

// JSC.Chart('chartDiv2', {
//    type: 'line spline',
//    legend_visible: false,
//    box:{boxVisible:false},
//    yAxis: {visible:false},
//     xAxis: {visible:false},
//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//          points: [
//             {x: '12:00', y: null},
//             {x: '13:00', y: null},
//             {x: '14:00', y: null},
//             {x: '15:00', y: null},
//             {x: '16:00', y: null},
//             {x: '17:00', y: null},
//             {x: '18:00', y: null},
//             {x: '19:00', y: null},
//             {x: '20:00', y: null}
//          ]
//       }
//    ]
// });

// JSC.Chart('chartDiv3', {
//    type: 'line spline',
//    legend_visible: false,
//    box:{boxVisible:false},
//    yAxis: {visible:false},
//     xAxis: {visible:false},
//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//          points: [
//             {x: '12:00', y: 18},
//             {x: '13:00', y: 18},
//             {x: '14:00', y: 19},
//             {x: '15:00', y: 19},
//             {x: '16:00', y: 18},
//             {x: '17:00', y: 21},
//             {x: '18:00', y: 21},
//             {x: '19:00', y: 22},
//             {x: '20:00', y: 24}
//          ]
//       }
//    ]
// });

// JSC.Chart('chartDiv4', {
//    type: 'line spline',
//    box:{boxVisible:false},
//    legend_visible: false,
//    yAxis: {visible:false},
//     xAxis: {visible:false},
//    defaultPoint_marker: { size: 3 },
//    defaultAxis: {
//     defaultTick_gridLine_visible: false,
//     alternateGridFill: "none"
//   },
//    series: [

//       {
//          points: [
//             {x: '12:00', y: 18},
//             {x: '13:00', y: 18},
//             {x: '14:00', y: 19},
//             {x: '15:00', y: 19},
//             {x: '16:00', y: 18},
//             {x: '17:00', y: 21},
//             {x: '18:00', y: 21},
//             {x: '19:00', y: 22},
//             {x: '20:00', y: 24}
//          ]
//       }
//    ]
// });
