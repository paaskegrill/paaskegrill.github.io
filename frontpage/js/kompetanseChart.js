$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

		
Highcharts.chart('container', {

    title: {
        text: 'Oversikt Poeng - kumulativ'
    },


    yAxis: {
        title: {
            text: 'Kumulativ poeng-score'
        }
    },
	    xAxis: {
			allowDecimals: false,

        title: {
            text: 'Runde'
			
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1
        }
    },

    series: [{
        name: 'lag 1',
        data: [3, 5, 9, 14]
    }, {
        name: 'lag 2',
        data: [1, 2, 3, 4]
    },  {
        name: 'lag 3',
        data: [2, 5, 8, 10]
    }]

});
    });
});