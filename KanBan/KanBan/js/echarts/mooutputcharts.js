function mochart2() {
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

    return {
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
                //color: 'rgba(255,255,255,.6)',
                color: '#fff',
                fontSize: 10
            }
        },
        series: [{
            type: 'bar',
            label: {
                normal: {
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
                normal: {
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

function mochar4() {
    return {
        grid: {
            top: '15%',
            left: '8%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        legend: {
            show: false,         
            position: 'top',
            textStyle: {
                color: '#fff',
                fontSize:12,
            },
            data: ['产量','良品率']
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },

        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            boundaryGap: true,
            axisTick: {
                alignWithLabel: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            min: 0,
            max: 250,
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
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        },
        {
            name: '良品率',
            type: 'value',
            min: 0,
            max: 100,
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
        }
        ],
        series: [{
            name: '产量',
            type: 'bar',
            data: [150, 160, 120, 120, 180, 40, 20,],
            barWidth: '35%',
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
        },
        {
            name: '良品率',
            type: 'line',
            yAxisIndex: 1,
            data: [84, 92, 94, 96, 90, 88, 100],
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
            },
            smooth: true,
        }
        ]
    };
}

function mochar1(value) {

    return {
        //backgroundColor: "#000",
        grid: {
            bottom: '5%',
        },
        xAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        series: [
            // 内圆
            {
                type: 'pie',
                radius: ['0', '50%'],
                center: ['50%', '47%'],
                z: 4,
                label: {
                    normal: {
                        position: "center",
                    }
                },
                hoverAnimation: false,
                data: [{
                    name: '工单总计',
                    value: 500,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#0069D3'
                            }, {
                                offset: 0.5,
                                color: '#00B8F8'
                            }, {
                                offset: 1,
                                color: '#0068D3'
                            }])
                        }

                    },
                    label: {
                        normal: {
                            rich: {
                                a: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 13,
                                    fontWeight: "normal"
                                },
                                b: {
                                    color: 'rgba(252,230,48,1)',
                                    align: 'center',
                                    fontSize: 28
                                },
                                c: {
                                    color: '#fff',
                                    align: 'center',
                                    fontSize: 15
                                }

                            },
                            formatter: function (params) {
                                return "{a|" + "工单总计" + "}\n\n" + "{b|" + params.value + "}" + "{c|个}";
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }

                    }
                }],
            },
            //进度图
            {
                type: 'gauge',
                radius: '60%',
                center: ['50%', '47%'],
                min: 0,
                max: 1000,
                z: 5,
                splitNumber: 0, //刻度数量
                startAngle: 220,
                endAngle: -40,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 6,
                        color: [
                            [
                                1, new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#0099FF'
                                    },
                                    {
                                        offset: 1,
                                        color: '#00FAFF'
                                    }
                                    ]
                                )
                            ]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: false,
                    offsetCenter: [0, '-20%'], // x, y，单位px
                    textStyle: {
                        color: '#ddd',
                        fontSize: 11
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: false,
                    offsetCenter: [0, '10%'],
                    color: '#ddd',
                    formatter: function (params) {
                        return params
                    },
                    textStyle: {
                        fontSize: 18
                    }
                },
                data: [{
                    name: "在线数量",
                    value: 111
                }]
            },
            //刻度尺
            {
                // name: "白色圈刻度",
                type: "gauge",
                radius: "67%",
                center: ['50%', '47%'],
                startAngle: 220,
                endAngle: -40,
                z: 2,
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#00FAFF',
                        width: 1
                    },
                    length: -4
                }, //刻度样式
                splitLine: {
                    show: true,
                    length: -10,
                    lineStyle: {
                        color: '#00FAFF'
                    }
                }, //分隔线样式
                axisLabel: {
                    color: 'rgba(255,255,255,0)',
                    fontSize: 12,
                }, //刻度节点文字颜色
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                title: {
                    show: true,
                    offsetCenter: [-65, '84%'], // x, y，单位px
                    textStyle: {
                        color: '#ddd',
                        fontSize: 11
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: false,
                    offsetCenter: [0, '84%'],
                    color: '#ddd',
                    formatter: function (params) {
                        return params
                    },
                    textStyle: {
                        fontSize: 18
                    }
                },
                data: []
            },
            // 刻度圈
            {
                "type": "pie",
                z: 1,
                "radius": ["0%", "77%"],
                "center": ["50%", "45%"],
                "avoidLabelOverlap": false,
                "label": {
                    "normal": {
                        "show": false,
                        "position": "center"
                    },
                    "emphasis": {
                        "show": false,
                        "textStyle": {
                            "fontWeight": "bold"
                        }
                    }
                },
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                "offset": 0.05,
                                "color": "rgba(32,36,107, 0.2)"
                            }, {
                                "offset": 0.5,
                                "color": "rgba(32,36,107,0.3)"
                            }, {
                                "offset": 0.95,
                                "color": "rgba(32,36,107, 0.2)"
                            }]
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 3235
                }]
            },
            
        ]
    }
}

function mochar3() {
    return {
        grid: {
            left: '5%',
            right: '4%',
            bottom: '10%',
            containLabel: true
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },
        legend: {
            data: [{ name: '外壳打码' }, { name: '卷芯入壳' }, { name: '高温烘烤' }, { name: '注液' }],
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
                    fontSize: 12
                },
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
            name: '外壳打码',
            type: 'bar',
            data: [150, 160, 120, 120, 180, 140, 120,],
            barWidth: '14%',
            itemStyle: {
                normal: {
                    color: '#00c2ff',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize:8,
                }
            }
        }, {
            name: '卷芯入壳',
            type: 'bar',
            //stack: 'p',
            data: [70, 85, 95, 70, 85, 110, 90],
            barWidth: '14%',
            itemStyle: {
                normal: {
                    color: '#47D8BE',
                    
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 8,
                }
            }
        }, {
            name: '高温烘烤',
            //type决定图表类型
            type: 'bar',
            //stack: 'p',
            data: [25, 15, 25, 10, 15, 30, 40],
            barWidth: '14%',
            itemStyle: {
                normal: {
                    color: "#F1667A",
                   
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 8,
                }
            }
        }, {
            name: '注液',
            //type决定图表类型
            type: 'bar',
            //stack: 'p',
            data: [5, 5, 5, 10, 5, 3, 4],
            barWidth: '14%',
            itemStyle: {
                normal: {
                    color: "#25f3e6"
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 8,
                }
            }
        }]
    };

}

function mochar5() {
    return {
        grid: {
            top: '15%',
            left: '8%',
            right: '4%',
            bottom: '10%',
            containLabel: true
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },

        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
        },
        yAxis: [
        {
            name: '良品率',
            type: 'value',
            min: 0,
            max: 100,
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
                    show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }
        ],
        series: [
        {
            name: '良品率',
            type: 'line',
                yAxisIndex: 0,
                symbolSize:8,
            data: [84, 92, 94, 96, 90, 88, 100],
            itemStyle: {
                normal: {
                  color: '#FC30EE',

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
        }
        ]
    };
}

function mochar6() {

    var myColor = ['#45eda2', '#00baff', '#23eff8', '#ff7d63'];
    wenduTextStyle = { rich: { white: { color: "#fff", fontSize: 20 }, smallwhite: { color: "#fff", fontSize: 16 } } };
    return {
        title: {
            text: '70%',
            left: '11%',
            top: '23%',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 18 ,
                align: 'center'
            }
        },
        grid: [{
            x: '54%',
            y: '16%',
            width: '28%',
            height: '40%'
        }],
        xAxis: [{
            show: false,
        }],
        yAxis: [{
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '14',
                }
            },
            data: ['设备稼动率', '时间利用率', '良率']
        }, {
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '18',
                }
                },
                data: ['80%', '60%', '90%'],
            //data: [{ value: "{white| 100}", textStyle: wenduTextStyle }, { value: "{white| 45}", textStyle: wenduTextStyle }, { value: "{white| 62.3}", textStyle: wenduTextStyle }],
            },
            //{
            //name: '单位：件',
            //nameGap: '50',
            //nameTextStyle: {
            //    color: '#ffffff',
            //    fontSize: '18',
            //},
            //axisLine: {
            //    lineStyle: {
            //        color: 'rgba(0,0,0,0)'
            //    }
            //},
            //data: [],
            //}
        ],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: ['80', '60', '90'],
            label: {
                normal: {
                    show: false,
                    position: 'right',
                    distance: 20,
                    color: '#ffffff',
                    fontSize: '18',

                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        },
        {
            name: "OEE",
            center: ['15%', '33%'],
            radius: ['32%', '38%'],
            type: 'pie',
            startAngle: 45,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    formatter: function (params, i) {
                        return params.percent + "%";
                    },
                    color: "#fff",
                    fontSize: 18,                 
                },
                position: 'outside',
                show: true,
            },
            data: [{
                value: 80,
                itemStyle: {
                    normal: {
                        color: '#ff7d63'
                    }
                }
            }]
        }
        ]
    };
}

function sectionchar1(data) {

    var markArr = [],
        temObj = null;
    data.forEach(function (v, i) {
        if (v > 40) {
            temObj = {
                value: v,
                xAxis: i,
                yAxis: v,
                itemStyle: {
                    color: '#FF0B00',
                }
            }
        } else {
            temObj = {
                value: v,
                xAxis: i,
                yAxis: v
            }
        }
        markArr.push(temObj)
    });

    return {
        grid: {
            top: '12%',
            left: '7%',
            right: '3%',
            bottom: '25%',
            containLabel: true
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },

        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00','20:00','21:00','22:00']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            min: 0,
            max: 250,
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
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        },
        {
            name: '良品率',
            type: 'value',
            min: 0,
            max: 100,
            position: 'right',
            show: false,
            axisLabel: {
                show: false,
                color: '#ffffff',
                formatter: '{value}%',
            },
            axisLine: {
                show: false,
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
        }
        ],
        series: [{
            name: '产量',
            type: 'bar',
            data: [150, 160, 120, 120, 180, 140, 120, 151, 165, 122, 153, 165, 128, 128,156,165],
            barWidth: '35%',
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
        },
        {
            name: '良品率',
            type: 'line',
            yAxisIndex: 1,
            data: data,            
            label: {
                normal: {
                    show: false,
                    fontSize:8,
                    position: 'top',
                    formatter: '{c}%',
                }
            },
            smooth: true,
            itemStyle: { 
                show: true,
                normal: {
                    color: 'green',                    
                }               
            },
            markPoint: {
                show: true,
                symbolSize:30,
                itemStyle: {                   
                    normal: {
                        color: 'green',
                        show: true,
                    }
                },
                label: {
                    normal: {
                        fontSize:8,
                    }
                },
                data: markArr
            }
        }
        ]
    };
}

function sectionchar2() {
    return {
        //title: {
        //    text: '异常信息',
        //    subtext: '前10项',
        //    left: 'left',
        //    top: '5%',
        //    textStyle: {
        //        color: '#fff',
        //    }
        //},
        
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c}"
        },
        toolbox: {
            orient: 'vertical',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        legend: {
            orient: 'vertical',
            left: '5%',
            top: '5%',
            textStyle: {
                color: '#fff',
            },
            data: ['异常1', '异常2', '异常3', '异常4', '异常5', '异常6', '异常7', '异常8', '异常9', '异常10']
        },
        calculable: true,
        series: [
            {
                name: '漏斗图',
                type: 'funnel',
                width: '40%',
                height: '75%',
                left: '35%',
                top: '5%',
                label: {
                    normal: {
                        position: 'center',
                        formatter: "{b} : {c}"
                    }
                },
                data: [
                    { value: 60, name: '异常1' },
                    { value: 30, name: '异常2' },
                    { value: 10, name: '异常3' },
                    { value: 80, name: '异常4' },
                    { value: 100, name: '异常5' },
                    { value: 60, name: '异常6' },
                    { value: 30, name: '异常7' },
                    { value: 10, name: '异常8' },
                    { value: 80, name: '异常9' },
                    { value: 100, name: '异常10' }
                ]
            }
        ]
    };

}

function sectionchar3(data) {

    var markArr = [],
        temObj = null;
    data.forEach(function (v, i) {
        if (v > 50) {
            temObj = {
                value: v,
                xAxis: i,
                yAxis: v,
                itemStyle: {
                    color: '#FF0B00'
                }
            }
        } else {
            temObj = {
                value: v,
                xAxis: i,
                yAxis: v
            }
        }
        markArr.push(temObj)
    });

    return {
        grid: {
            top: '15%',
            left: '5%',
            right: '3%',
            bottom: '18%',
            containLabel: true
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },

        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            min: 0,
            max: 300,
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
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        },
        {
            name: '良品率',
            type: 'value',
            min: 0,
            max: 100,
            position: 'right',
            show: false,
            axisLabel: {
                show: false,
                color: '#ffffff',
                formatter: '{value}%',
            },
            axisLine: {
                show: false,
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
        }
        ],
        series: [{
            name: '产量',
            type: 'bar',
            data: [150, 160, 120, 120, 180, 140, 120, 151, 165, 122, 153, 165, 128, 128, 156, 165],
            barWidth: '45%',
            itemStyle: {
                normal: {
                    color: '#00c2ff',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize:8,
                }
            }
        },
        {
            name: '良品率',
            type: 'line',
            yAxisIndex: 1,
            data: data,
            label: {
                normal: {
                    show: true,
                    fontSize: 8,
                    position: 'top',
                    formatter: '{c}%'
                }
            },
            smooth: true,
            itemStyle: {
                show: true,
                normal: {
                    color: 'orange',
                    
                }
            },           
        }
        ]
    };
}

function sectionchar4() {
    return {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '7%',
            bottom: '10%',
            containLabel: true
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7'],
                axisTick: {
                    show: true //X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff" //X轴文字颜色
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: "pcs",
                nameTextStyle: {
                    color: "#ebf8ac"
                }, 
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        formatter: '{value}%'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
            }
        ],
        series: [
            {
                name: '产量',
                type: 'line',
                min: 10,
                max: 40,
                data: [25, 22, 26, 28, 27, 26, 23],
                markPoint: {
                    data: [
                        { name: '产量1', value: 25, xAxis: 0, yAxis: 25 },
                        { name: '产量2', value: 22, xAxis: 1, yAxis: 22 },
                        { name: '产量3', value: 26, xAxis: 2, yAxis: 26 },
                        { name: '产量4', value: 28, xAxis: 3, yAxis: 28 },
                        { name: '产量5', value: 27, xAxis: 4, yAxis: 27 },
                        { name: '产量6', value: 26, xAxis: 5, yAxis: 26 },
                        { name: '产量7', value: 23, xAxis: 6, yAxis: 23 },
                    ]
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                offset: 0,
                                color: '#AAF487' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetY: 7
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#AAF487',
                        borderWidth: 5,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#AAF487"
                    }
                },
                smooth: true,
               
            }
        ]
    };


}

function sectionchar5() {
    return {
        title: {
            show: true,
            text: '外壳打码',
            textStyle: {
                //color: '#07fff4',
                color: '#fff',
                fontSize: 18,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',

            },
            padding: 15,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255,255,255,0)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(255,255,255,1)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,255,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            },

        },
        grid: {
            top: "10%",
            left: "15%",
            bottom: "20%"
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: ["6日", "7日", "8日", "9日", "10日"],
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.4)' } },//左线色
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',

                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [{
            name: 'pcs',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                }
            },
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 6,
            lineStyle: {
                normal: {
                    color: "#53fdfe", // 线条颜色
                },
                borderColor: '#f0f'
            },
            itemStyle: {
                normal: {
                    color: "rgba(255,255,255,1)",
                }
            },
            tooltip: {
                show: true
            },
            areaStyle: { //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,253,252,0)'
                    }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
            },
            //markLine: {
            //    lineStyle: {
            //        color: 'rgba(128, 128, 128, 0.5)',
            //    },
            //    data: [
            //        { type: 'average', name: '平均值' }
            //    ]
            //},
            data: [3300, 3500, 2750, 3000, 1350]
        }]
    }
}

function sectionchar6() {
    return {        
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                fontSize: 12,
                color: '#fff'
            },
            data: ['搅拌', '涂布', '辊压', '分切']
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '15%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            },
            axisLabel: {
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 12
                },
            },
            data: ['2019-07-01', '2019-07-02', '2019-07-03', '2019-07-04', '2019-07-05']
        },
        yAxis: {
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
        },
        series: [
            {
                name: '搅拌',
                type: 'line',
                //stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '涂布',
                type: 'line',
                //stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '辊压',
                type: 'line',
                //stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '分切',
                type: 'line',
                //stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };
}

function sectionchar7() {
    return {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '10%',
            bottom: '15%',
            containLabel: true
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
                axisTick: {
                    show: true, //X轴刻度
                    //alignWithLabel: true,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff" //X轴文字颜色
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: "pcs",
                nameTextStyle: {
                    color: "#fff"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        formatter: '{value}%'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
            }
        ],
        series: [
            {
                name: '产量',
                type: 'line',
                min: 10,
                max: 40,
                data: [25, 22, 26, 28, 27, 26, 23],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ],
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        color: {
                            type: 'linear',

                            colorStops: [{
                                offset: 0,
                                color: '#AAF487' // 0% 处的颜色
                            },
                            {
                                offset: 0.4,
                                color: '#47D8BE' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#47D8BE' // 100% 处的颜色
                            }
                            ],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetY: 7
                    }
                        
                },
                itemStyle: {
                    normal:{
                        color: '#AAF487',
                        borderWidth: 3,
                        /*shadowColor: 'rgba(72,216,191, 0.3)',
                         shadowBlur: 100,*/
                        borderColor: "#AAF487"
                    }
                        
                },
                smooth: true,
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                    ]
                }
            }
        ]
    };


}

function sectionchar8() {
    return {
        grid: {
            top: '15%',
            left: '8%',
            right: '4%',
            bottom: '10%',
            containLabel: true
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
            formatter: '{a0}：{c0}<br/>{a1}：{c1}%'
        },

        xAxis: {
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                alignWithLabel: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日']
        },
        yAxis: [{
            name: 'pcs',
            type: 'value',
            min: 0,
            max: 400,
            splitNumber: 6,
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
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        },
        {
            name: '产能',
            type: 'value',
            min: 0,
            max: 100,
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
        }
        ],
        series: [{
            name: '目标产量',
            type: 'bar',
            data: [180, 180, 180, 180, 180, 80, 80,],
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#00c2ff',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize:10,

                }
            }
        },
            {
                name: '实际产量',
                type: 'bar',
                data: [150, 160, 120, 120, 180, 40, 20,],
                barWidth: '30%',
                itemStyle: {
                    normal: {
                        color: '#5BC49F',
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 10,
                    }
                },
                barGap: 0,
            },
        {
            name: '产成率',
            type: 'line',
            yAxisIndex: 1,
            data: [84, 92, 94, 96, 90, 88, 100],
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
            },
            smooth: true,
        }
        ]
    };
}

function spcchar1(data) {
    return {
        grid: {
            top: '15%',
            left: '5%',
            right: '8%',
            bottom: '20%',
            containLabel: true
        },        
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            axisTick: {
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(0,253,255,0.6)'
                }
            },
            axisLabel: {
                margin: 10,
                color: 'rgb(0,253,255,0.6)',
                textStyle: {
                    fontSize: 14
                },
            },
            data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00']
        },
        yAxis: {
            name: '（数值）',
            nameGap:20,
            min: 0,
            max: 160,
            interval: 20,
            axisTick: {
                inside: true,
            },
            axisLabel: {
                show: true,
                color: 'rgb(0,253,255,0.6)',
                formatter: '{value}',
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
        },
        series: [{
            type: 'line',
            data: data,
            label: {
                normal: {
                    show: true,
                }
            }, 
            lineStyle: {
                normal: {
                    color: '#F02FC2',
                },
            },
            markLine: {
                symbol:'none',
                data: [
                    {
                        name: 'Y 轴值为 160 的水平线',
                        yAxis: 160,
                        lineStyle: {
                            normal: {
                                color: '#d0a00e',
                                type: 'dashed',                                
                            },  
                        },
                        label: {
                            normal: {
                                show: false,
                            }                           
                        },                           
                    },
                    {
                        name: 'Y 轴值为 90 的水平线',
                        yAxis: 90, 
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                color: 'lightgreen',
                                type: 'solid',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        }, 
                    },
                    {
                        name: 'Y 轴值为 20 的水平线',
                        yAxis: 20,
                        lineStyle: {
                            normal: {
                                color: '#d0a00e',
                                type: 'dashed',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                            }
                        },    
                    }
                ]
            },
            markPoint: {                  
                data: [{
                    symbol: 'triangle',
                    symbolSize: 10,
                    symbolRotate: 180,
                    symbolOffset: [25, -8],
                    name: '某个坐标',
                    coord: [6, 160],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal:{
                            color: '#d0a00e',
                        }
                       
                    }
                }, {
                        symbol: 'triangle',
                        symbolSize: 10,                       
                        symbolOffset: [25, 8],
                        name: '某个坐标',
                        coord: [6, 20],
                        label: {
                            normal: {
                                show: false,
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#d0a00e',
                            }

                        }
                    }]
            }

        }]
    };
}

function charCenter2() {
    var scaleData = [
        {
            'name': '产品编号',
            'value': '2001020012'
        },
        {
            'name': '工单号',
            'value': 'M020189004859001'
        },
        {
            'name': '产品数量',
            'value': 2000
        }

    ];
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 0
        }
    };
    var data = [];
    var color = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)'];
    var colorBorder = ['rgba(255, 153, 153, 0.4)', 'rgba(255, 176, 63, 0.4)', 'rgba(61, 186, 45, 0.4)', 'rgba(43, 166, 254, 0.4)'];
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            data: scaleData[i].value,
            value: 20,
            name: scaleData[i].name,
            itemStyle: {
                normal: {
                    color: color[i],
                    borderWidth: 20,
                    borderColor: colorBorder[i]
                }
            }
        }, {
                value: 8,
                name: '',
                itemStyle: placeHolderStyle
            });
    }
    data.push({
        value: 30,
        name: '',
        itemStyle: placeHolderStyle
    })
    var seriesObj = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [80, 110],
        hoverAnimation: false,
        startAngle: -30,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'inner',
                    fontSize: 12,
                    lineHeight: 15,
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            // return params.name + '\n' + params.data.data;
                            if (params.name.length > 4) {
                                return params.name.slice(0, 3) + '\n' + params.name.slice(3);
                            } else {
                                return params.name;
                            }

                        } else {
                            return '';
                        }
                    }
                },
                labelLine: {
                    length: 10,
                    length2: 20,
                    show: true
                }
            }
        },
        data: data
    }, {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [80, 110],
        hoverAnimation: false,
        startAngle: -30,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    fontSize: 12,
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.data.data;
                        } else {
                            return '';
                        }
                    }
                },
                labelLine: {
                    length: 10,
                    length2: 20,
                    show: true
                }
            }
        },
        data: data
        }];
    return {
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        series: seriesObj,
        graphic: [{
            type: 'group',
            left: 'center',
            top: 'middle',
            children: [{
                type: 'text',
                z: 100,
                left: 'center',
                top: '0',
                style: {
                    fill: '#fff',
                    text: [
                        '智能电表'
                    ],
                    font: '28px Microsoft YaHei'
                }
            },
            {
                type: 'text',
                z: 100,
                left: 'center',
                top: '32',
                style: {
                    fill: 'red',
                    text: [
                        '80%'
                    ],
                    font: '24px Microsoft YaHei'
                }
            }
            ]
        }]
    }
}

