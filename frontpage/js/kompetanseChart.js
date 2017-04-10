$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

		
Highcharts.chart('container', {
    chart: {
        type: 'bar',
		                zoomType:'xy',
                panning:true,
				
    },
    title: {
        text: 'Oversikt poengsum'
    },
    xAxis: {
        categories: ['Lag 1', 'Lag 2', 'Lag 3']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Poeng'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Runde 1',
        data: [5, 3, 4]
    }, {
        name: 'Runde 2',
        data: [2, 2, 3]
    }, {
        name: 'Runde 3',
        data: [3, 4, 4]
    }]
});
    });
});