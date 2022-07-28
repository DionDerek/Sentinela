


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
            {x: '05:00', y: 0},
            {x: '06:00', y: 5},
            {x: '07:00', y: 10},
            {x: '08:00', y: 10},
            {x: '09:00', y: 20},
            {x: '10:00', y: 25},
            {x: '11:00', y: 25},
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
            points: [{ y: value2 }]
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
