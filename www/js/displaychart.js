//var diposit=30000,fPlanning=60000,insurance=10000;
//var customer="李先生";
//var bonusPremium=7000,insurancePremium=3000;
 //var test1=10;
 //var profits=[ [test1, 0, 1],[0, 5, 3],[0, 0, 16],[0, 0, 1]];
var insuranceProfits=[[5, 3, 4, 7],[2, 2, 3, 2],[3, 4, 4, 2]];

function refreshContainer(){
		var total=diposit+fPlanning+insurance;
		
		$('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
				enabled: true,
                alpha: 45
            }
        },
        credits:{
            enabled:false // 禁用版权信息
       },
        title: {
            text: customer+'资产配置建议'
        },		        
        plotOptions: {
            pie: {
                innerSize: 80,
                depth: 45
            }
        },
        series: [{
            name: '配置资金（单位：万元）',
            data: [
                ['储蓄 '+ Math.round(diposit/total*100)+'%', diposit],
                ['理财 '+ Math.round(fPlanning/total*100)+'%', fPlanning],
                ['保险 '+ Math.round(insurance/total*100)+'%', insurance]		                
            ]
        }]
    });
}
function refreshContainer2(){
	var total=insurancePremium+bonusPremium;
	
	$('#container2').highcharts({
        chart: {
            type: 'pie',
            options3d: {
				enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        credits:{
            enabled:false // 禁用版权信息
       },
        title: {
            text: '保险保障配置建议'
        },
        tooltip: {
            pointFormat: '{series.name}：{point.y}'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '配置份额',
            data: [
                ['意外或健康保障产品<br/>'+ Math.round(insurancePremium/total*100)+'%',   insurancePremium],	                
                {
                    name: '分红型产品<br/>'+ Math.round(bonusPremium/total*100)+'%',
                    y: bonusPremium,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    });	
}

function refreshContainer5(){
	var total=current_diposit+time_deposit;
	
	$('#container5').highcharts({
        chart: {
            type: 'pie',
            options3d: {
				enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        credits:{
            enabled:false // 禁用版权信息
       },
        title: {
            text: '储蓄存款配置建议'
        },
        tooltip: {
            pointFormat: '{series.name}：{point.y}'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: '配置份额',
            data: [
                ['活期<br/>'+ Math.round(current_diposit/total*100)+'%',   current_diposit],	                
                {
                    name: '一年或以上定期<br/>'+ Math.round(time_deposit/total*100)+'%',
                    y: time_deposit,
                    sliced: true,
                    selected: true
                }
            ]
        }]
    });	
}

function refreshContainer3(){
	$('#container3').highcharts({
	    
        chart: {
            type: 'column'
        },
        credits:{
            enabled:false // 禁用版权信息
       },
        title: {
            text: '理财方案对比'
        },
        xAxis: {
            categories: ['全额储蓄', '全额理财', '定制方案']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '收益（单位：万元）'
            }
        },
        colors: ['#dedede','#7cb5ec', '#90ed7d', '#f7a35c'],
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '保险保障',
            data: profits[3],
            stack: 'male'
        },{
            name: '保险分红',
            data: profits[2],
            stack: 'male'
        }, {
            name: '理财收益',
            data: profits[1],
            stack: 'male'
        }, {
            name: '储蓄利息',
            data: profits[0],
            stack: 'male'
        },/* {
            type: 'spline',
            name: '方案收益',            
            
            data: [profits[3][0]+profits[2][0]+profits[1][0]+profits[0][0], 
                   profits[3][1]+profits[2][1]+profits[1][1]+profits[0][1],
                   profits[3][2]+profits[2][2]+profits[1][2]+profits[0][2]],
            
            marker: {
            	lineWidth: 1,
            	lineColor: Highcharts.getOptions().colors[3],
            	fillColor: 'white',
            	symbol: null
            }
        } */ ]
    });
}
function refreshContainer4(){
	$('#container4').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '保险保障利益演示'
        },
        credits:{
            enabled:false // 禁用版权信息
        },
        xAxis: {
            categories: ['缴费期', '保单持续期',  '年金领取期', '保险期满']
        },
        yAxis: {
            min: 0,
            title: {
                text: '保障及收益（单位：万元）'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -70,
            verticalAlign: 'top',
            y: 15,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'<br/>'+
                    'Total: '+ this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: '生存年金',
            data: insuranceProfits[0]
        }, {
            name: '分红',
            data: insuranceProfits[1]
        }, {
            name: '满期给付',
            data: insuranceProfits[2]
        }]
    });
}