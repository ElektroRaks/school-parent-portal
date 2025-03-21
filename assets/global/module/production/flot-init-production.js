$(function() {
    'use strict';

    
    /**************** PIE CHART *******************/
    var piedata = [{
            label: "Series 1",
            data: [
                [1, 50]
            ],
            color: '#e1e8f0'
        },
        {
            label: "Series 2",
            data: [
                [1, 90]
            ],
            color: '#7571F9'
        },
        {
            label: "Series 3",
            data: [
                [1, 50]
            ],
            color: '#ff5e5e'
        },
        {
            label: "Series 4",
            data: [
                [1, 70]
            ],
            color: '#e62739'
        },
        {
            label: "Series 5",
            data: [
                [1, 30]
            ],
            color: '#9097c4'
        }
    ];

    $.plot('#flotPie1', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    $.plot('#flotPie2', piedata, {
        series: {
            pie: {
                show: true,
                radius: 1,
                innerRadius: 0.5,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        }
    });

    function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

});