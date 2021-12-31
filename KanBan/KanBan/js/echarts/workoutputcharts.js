var p1 = 30;
var p2 = 70;

function char1() {
    return {
        series: [{
            type: 'pie',
            radius: ['88%', '98%'],
            color: '#49bcf7', 
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: p1,
                name: '已完成',
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14,
                            color: '#fff',
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'lightblue'
                    }
                }
            }, {
                value: p2,
                name: '未完成',
                label: {
                    normal: {
                        formatter: function (params) {
                            return '占比' + Math.round(p1 / (p1 + p2) * 100) + '%'
                        },
                        textStyle: {
                            color: '#aaa',
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,.2)'
                    },
                    emphasis: {
                        color: '#fff'
                    }
                },
            }]
        }]
    };
}

function char2() {
    return {
        grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        title: {
            text: '工单产量',
            textStyle: {
                color: '#fef000'
            }
        },
        // tooltip（提示框组件）
        tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'shadow'
            },
            //使用字符串模板自定义显示
            formatter: '{a0}：{c0}<br/>{a1}：{c1}<br/>{a2}：{c2}<br/>{a3} : {c3}%'
        },
        legend: {
            data: [{ name: '已完成' }, { name: '生产中' }, { name: '待生产' }, { name: '达成率' }],
            top: '3%',
            show: true,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },
        },
        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 10
                },
            },
            data: ['PT001-1', 'PT001-2', 'PT001-3', 'PT001-4', 'PT001-5', 'PT001-6', 'PT001-7', 'PT001-8', 'PT001-9', 'PT001-10']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                color: '#e2e9ff',
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }, {
            name: '达成率',
            type: 'value',
            position: 'right',
            axisLabel: {
                show: true,
                color: '#e2e9ff',
                formatter: '{value}%',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            name: '已完成',
            type: 'bar',
            data: [150, 160, 120, 120, 180, 40, 20, 10, 20, 15],
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '#00c2ff',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            }
        }, {
            name: '生产中',
            type: 'bar',
            //stack: 'p',
            data: [20, 15, 25, 10, 15, 30, 40, 80, 90, 120],
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '#47D8BE',
                }
            },
            label: {
                normal: {
                    show: true,
                }
            }
        }, {
            name: '待生产',
            //type决定图表类型
            type: 'bar',
            //stack: 'p',
            data: [5, 15, 25, 10, 15, 30, 80, 10, 0, 0],
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: "#F1667A"
                }
            },
            label: {
                normal: {
                    show: true,
                }
            }
        }, {
            name: '达成率',
            type: 'line',
            yAxisIndex: 1,
            data: [24, 22, 24, 26, 30, 88, 80, 10, 25, 17],
            itemStyle: {
                normal: {
                    color: 'rgba(252,230,48,1)'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            }
        }]
    };
}

function char3() {
    return {
        grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            containLabel: true
        },
        title: {
            text: '工段进度',
            textStyle: {
                color: '#fef000',
            }
        },
        // tooltip（提示框组件）
        tooltip: {
            //trigger(触发类型)，可选'item','axis','none'
            trigger: 'axis',
            axisPointer: {
                //指示器类型,可选'line','shadow','cross'
                type: 'shadow'
            },
            //使用字符串模板自定义显示
            formatter: '{a0}：{c0}<br/>{a1}：{c1}<br/>{a2}：{c2}'
        },
        legend: {
            data: [{ name: '已完成' }, { name: '生产中' }, { name: '待生产' }],
            top: '3%',
            show: true,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },
        },
        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 10
                },
            },
            data: ['极片', '组装', '化工', '包装']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                color: '#e2e9ff',
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            name: '已完成',
            type: 'bar',
            stack: 'mo',
            data: [2, 2, 3, 3],
            barWidth: '33%',
            itemStyle: {
                normal: {
                    color: '#00c2ff',
                }
            },
            label: {
                normal: {
                    show: true,
                }
            }
        }, {
            name: '生产中',

            type: 'bar',
            stack: 'mo',
            data: [5, 5, 5, 5],
            barWidth: '33%',
            itemStyle: {
                normal: {
                    color: '#47D8BE',
                }
            },
            label: {
                normal: {
                    show: true,
                }
            }
        }, {
            name: '待生产',
            //type决定图表类型
            type: 'bar',
            stack: 'mo',
            data: [3, 3, 2, 2],
            barWidth: '33%',
            itemStyle: {
                normal: {
                    color: "#F1667A"
                }
            },
            label: {
                normal: {
                    show: true,
                }
            }
        }]
    };
}

function progressChar1() { 
    // 颜色
    var lightBlue = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(41, 121, 255, 1)'
        }, {
            offset: 1,
            color: 'rgba(0, 192, 255, 1)'
        }],
        globalCoord: false
    }

    return  {
        tooltip: {
            show: false
        },
        grid: {
            top: '5%',
            left: '20%',
            right: '14%',
            bottom: '10%',
        },
        xAxis: {
            min: 0,
            max: 100,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            data: ['字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称', '字段名称'],
            //offset: 15,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 10
            }
        },
        series: [{
            type: 'bar',
            label: {
                normal:{
                    show: true,
                    zlevel: 10000,
                    position: 'right',
                    //padding: 10,
                    color: '#49bcf7',
                    fontSize: 10,
                    formatter: '{c}%'
                }               

            },
            itemStyle: {
                normal: {
                    color: '#49bcf7'
                }
                
            },
            barWidth: '10',
            data: [49, 80, 67, 99, 12, 19, 39, 84, 28, 47, 57, 100],
            z: 10
        }, {
            type: 'bar',
            barGap: '-100%',
                itemStyle: {
                    normal:{
                        color: '#fff',
                        opacity: 0.1
                    }               
            },
            barWidth: '10',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            z: 5
        }],
    };
    
}
