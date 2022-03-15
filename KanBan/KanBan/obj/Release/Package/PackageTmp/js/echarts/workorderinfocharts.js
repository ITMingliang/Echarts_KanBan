const { color } = require("./echarts");

function char0x() {
    return {
        title: {
            text: '',
            textStyle: {
                //color: '#07fff4',
                color: '#fff',
                fontSize: 24,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',

            },
            padding: 15,
            textAlign: 'left',
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
            top: "25%",
            left: "20%",
            bottom: "10%"
        },
        visualMap: {//区间内控制显示颜色
            top: 10,
            right: 10,
            show: false,
            dimension: 1,
            pieces: [{ min: parseFloat(20.0), max: parseFloat(28.0) }],
            outOfRange: {
                color: "red",
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'    //更改坐标轴颜色
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: false,
            },
            data: [],
        }],
        yAxis: [{
            type: 'value',
            min: 0,
            max: 35,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.4)' } },//左线色
            axisLabel: {
                formatter: '{value}℃',
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
                name: '℃',
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
                markLine: {
                    symbol: "none",           //去掉警戒线最后面的箭头
                    label: {
                        position: "end",  //三个值“start”,"middle","end"  开始  中点 结束
                    },
                    data: [
                        {
                            silent: false,    //鼠标悬停事件  true没有，false有
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                color: "red",
                                borderWidth: 8,
                                fontSize: 14,
                            },
                            label: { show: true, position: 'end', formatter: '报警值' + 28 },
                            yAxis: 28
                        },
                        {
                            silent: false,    //鼠标悬停事件  true没有，false有
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                color: "red",
                                borderWidth: 8,
                            },
                            label: { show: true, position: 'end', formatter: '报警值' + 20 },
                            yAxis: 20
                        },
                    ]
                },
                data: []
            }]
    }
}

//温度折线图
function char0y() {
    return {
        title: {
            text: '',
            textStyle: {
                //color: '#07fff4',
                color: '#fff',
                fontSize: 24,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',

            },
            padding: 15,
            textAlign: 'left',
        },
        tooltip: {
            //鼠标悬停提示内容
            trigger: 'axis', // 触发类型，默认数据触发，可选为：'axis' item

        },
        color: [],      //关键加上这句话，legend的颜色和折线的自定义颜色就一致了
        legend: {
            icon: 'rectangle',
            data: [],
            right: '8%',
            textStyle: {
                fontSize: 12,
                color: '#99ff66'
            }
        },
        grid: {
            top: "25%",
            left: "20%",
            bottom: "10%"
        },
        
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'    //更改坐标轴颜色
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: false,
            },
            data: [],
        }],
        yAxis: [{
            type: 'value',
            min: 10,
            max: 35,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.4)' } },//左线色
            axisLabel: {
                formatter: '{value}℃',
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        //显示坐标点值
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
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#0000ff",
                        }  
                    },

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
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
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
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#ccff33",
                        }
                      
                    },

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
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },
                // smooth: true, //是否平滑曲线显示
                // 		symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 6,
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#008000",
                        }
                        
                    },

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
               
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
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
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#ffff00",
                        } 
                    },

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
                markLine: {
                    symbol: "none",           //去掉警戒线最后面的箭头
                    data: [
                        {
                            yAxis: 28,
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                color: "#ff0000"
                            }
                           
                        },
                        {
                            yAxis: 20,
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                color: "#ff0000"
                            }  
                        },
                    ]
                },
                data: []
            }
        ]
    }
}

//温度折线图
function char01() {
    return {
        title: {
            text: '',
            textStyle: {
                //color: '#07fff4',
                color: '#fff',
                fontSize: 24,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',

            },
            padding: 15,
            textAlign: 'left',
        },
        tooltip: {
            //鼠标悬停提示内容
            trigger: 'axis', // 触发类型，默认数据触发，可选为：'axis' item

        },
        color: [],      //关键加上这句话，legend的颜色和折线的自定义颜色就一致了
        legend: {
            icon: 'rectangle',
            data: [],
            right: '8%',
            textStyle: {
                fontSize: 12,
                color: '#99ff66'
            }
        },
      
        grid: {
            top: "25%",
            left: "20%",
            bottom: "10%"
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.4)'    //更改坐标轴颜色
                },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: false,
            },
            data: [],
        }],
        yAxis: [{
            type: 'value',
            min: 10,
            max: 35,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.4)' } },//左线色
            axisLabel: {
                formatter: '{value}℃',
                show: true,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                    fontSize: 14,     //更改坐标轴文字大小
                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        //显示坐标点值
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },
                showAllSymbol: true,
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#0000ff",
                        }
                    },

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
                markLine: {
                    symbol: "none",
                    name: "警戒线",
                    //color:"red",
                    //去掉警戒线最后面的箭头
                    data: [
                        {
                            yAxis: 28,
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                //为什么颜色不起作用
                                color: "#ff0000"
                            }

                        },
                        {
                            yAxis: 20,
                            lineStyle: {      //警戒线的样式  ，虚实  颜色
                                type: "dotted",   // type: 'solid'  //'dotted'虚线 'solid'实线
                                color: "#ff0000"
                            }
                        }
                    ]
                },
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },

                showAllSymbol: true,
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#ccff33",
                        }

                    },

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
               
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },
                // smooth: true, //是否平滑曲线显示
                // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#008000",
                        }
                    },

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
                data: []
            },
            {
                name: '℃',
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                        }
                    }
                },
                showAllSymbol: true,
                symbolSize: 6,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#ffff00",
                        }
                    },

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
                markLine: {
                    symbol: "none",           //去掉警戒线最后面的箭头
                    data: [
                        {
                            yAxis: 28,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: "dotted",
                                        color: "#ff0000",
                                    }
                                }


                            }
                        },
                        {
                            yAxis: 20,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: "dotted",
                                        color: "#ff0000",
                                    }
                                }


                            }
                        }
                    ]
                },
                data: []
            }
        ]
    }
}

//湿度折线图
function char02() {
    return {
        title: {
            text: '',
            textStyle: {
                //color: '#07fff4',
                color: '#fff',
                fontSize: 24,
                fontFamily: 'sans-serif',
                fontWeight: 'bold',

            },
            padding: 15,
            textAlign: 'left',
        },
        tooltip: {
            //鼠标悬停提示内容
            trigger: 'axis', // 触发类型，默认数据触发，可选为：'axis' item

        },
        color: [],     //关键加上这句话，legend的颜色和折线的自定义颜色就一致了
        legend: {
            icon: 'rectangle',
            data: [],
            right: '8%',
            textStyle: {
                fontSize: 12,
                color: '#99ff66'
            }
        },
        grid: {
            top: "25%",
            left: "20%",
            bottom: "10%"
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
                    fontSize: 14,
                },
            },
            axisTick: {
                show: false,
            },
            data: [],
        }],
        yAxis: [{
            type: 'value',
            min: 30,
            max: 80,
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
                formatter: '{value}%',
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                    fontSize: 14,

                },
            },
            axisTick: {
                show: true,
            },
        }],
        series: [
            {
            name: '%',
            type: 'line',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        //color: '#fff',
                    }
                }
            },
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 6,
            //设置线条颜色
            //lineStyle: {
            //    normal: {
            //        color: "#53fdfe", // 线条颜色
            //    },
            //    borderColor: '#f0f'
            //},
            itemStyle: {
                normal: {
                    color: "#0000ff",
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
            data: []
            },
            {
                name: '%',
                type: 'line',
                label: {
                    normal: {
                        show: false,
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
                //设置线条颜色
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        color: "#ccff33",
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
                data: []
            },
            {
                name: '%',
                type: 'line',
                label: {
                    normal: {
                        show: false,
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
                //设置线条颜色
                //lineStyle: {
                //    normal: {
                //        color: "#53fdfe", // 线条颜色
                //    },
                //    borderColor: '#f0f'
                //},
                itemStyle: {
                    normal: {
                        color: "#008000",
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
                data: []
            },
            {
                name: '%',
                type: 'line',
                label: {
                    normal: {
                        show: false,
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
                
                itemStyle: {
                    normal: {
                        color: "#ffff00",
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
                markLine: {
                    symbol: "none",           //去掉警戒线最后面的箭头
                    label: {
                        position: "end"  //三个值“start”,"middle","end"  开始  中点 结束
                    },
                    data: [
                        {
                            yAxis: 45,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: "dotted",
                                        color: "#ff0000",
                                    }
                                    /*   label: { show: true, position: 'end', formatter: '报警值' + 45 },*/
                                }


                            }
                        },
                        {
                            yAxis: 75,
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        type: "dotted",
                                        color: "#ff0000",
                                    }
                                    /*                    label: { show: true, position: 'end', formatter: '报警值' + 75 },*/
                                }


                            }
                        }
                    ]
                },
                data: []
            
            }
        ]
    }
}


//水滴球
function char07(value) {

    // 指定图表的配置项和数据
    var data = value;
    var wave_color = "rgb(255, 0, 0)";
    if (data > 45 && data <75) {
        wave_color = "rgb(0, 204, 255)";
    }
    var option = {
        title: {
            text: '湿度',
            left: 'right',
            textStyle: {
                fontSize: 24,
                color:"green"
            }

        },
        series: [{
            type: 'liquidFill',
            data: [data / 100, (data - 2) / 100, (data - 4) / 100],
            //背景色
            //backgroundStyle: {
            //    color: "white"
            //},
            label: {
                normal: {
                    formatter: (value).toFixed(1) + "%",
                    color: wave_color
                },
                textStyle: {
                    fontSize: 14,
                    color: wave_color
                }
            },
            outline: {
                show: false
            },
            color: [wave_color]
        }]
    };

    return option;
}

//温度计
function char08(value) {
    var TP_value = value;
    var kd = [];
    var Gradient = [];
    var leftColor = '';
    var showValue = '';
    var boxPosition = [75, -40];//温度文字位置
    var TP_txt = ''
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (var i = 0, len = 110; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i) % 20 === 0) {
                kd.push('-2');
            } else if ((i - 10) % 4 === 0) {
                kd.push('-5');
            }
            else {
                kd.push('');
            }
        }

    }
    //中间线的渐变色和文本内容
    if (TP_value > 28) {

        TP_txt = '温度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'//浅绿
        }, {
            offset: 0.5,
            color: '#E4D225' //浅黄
        }, {
            offset: 1,
            color: '#E01F28'//红色
        })
    } else if (TP_value > 20) {

        TP_txt = '温度正常';
        Gradient.push({
            offset: 1,
            color: '#93FE94'
        })

      
    } else {

        TP_txt = '温度偏低';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
            offset: 0.5,
            color: '#E4D225'
        }, {
            offset: 1,
            color: '#E01F28'
        })
    }

    ////模拟水银柱
    //if (TP_value > 62) {
    //    showValue = 62
    //} else {
    //    if (TP_value < -60) {
    //        showValue = -60
    //    } else {
    //        showValue = TP_value
    //    }
    //}
    //if (TP_value < -10) {
    //    boxPosition = [65, -120];
    //}
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    var option = {
        backgroundColor: '',
        title: {
            text: '温度',
            show: true,
            //align: "center",
            left: 'left',
            textStyle: {
                fontSize: 24,
                color: "green"
            }
        },

        yAxis: [{
            show: false,
            data: [],
            min: 0,
            max: 135,
            axisLine: {
                show: false
            }
        }, {
            show: false,
            min: 0,
            max: 50,
        }, {
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', '°C'],
            position: 'left',
            offset: -80,
            axisLabel: {
                fontSize: 10,
                color: 'white'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        }],
        xAxis: [{
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -5,
            max: 80,

        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: (showValue + 30),
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        width: 20,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + '}',
                        rich: {
                            back: {
                                align: 'center',
                                lineHeight: 50,
                                fontSize: 30,
                                fontFamily: 'digifacewide',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微软雅黑',
                                fontSize: 15,
                                lineHeight: 50,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: 50,
                                fontSize: 25,
                                align: 'center',
                                color: '#fff'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: 10,
                    color: 'white',
                    fontSize: 14,
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 30 === 0) {
                                return params.dataIndex - 10;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: 'white',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
    return option;
}

//温度计备份
function char09(value) {
    var TP_value = value;
    var kd = [];
    var Gradient = [];
    var leftColor = '';
    var showValue = '';
    var boxPosition = [65, 0];
    var TP_txt = ''
    // 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
    for (var i = 0, len = 135; i <= len; i++) {
        if (i < 10 || i > 130) {
            kd.push('')
        } else {
            if ((i - 10) % 20 === 0) {
                kd.push('-2');
            } else if ((i - 10) % 4 === 0) {
                kd.push('-1');
            } else {
                kd.push('');
            }
        }

    }
    //中间线的渐变色和文本内容
    if (TP_value > 28) {
        TP_txt = '温度偏高';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
            offset: 0.5,
            color: '#E4D225'
        }, {
            offset: 1,
            color: '#E01F28'
        })
    } else if (TP_value > 20) {
        TP_txt = '温度正常';
        Gradient.push({
            offset: 0,
            color: '#93FE94'
        }, {
            offset: 1,
            color: '#E4D225'
        })
    } else {
        TP_txt = '温度偏低';
        Gradient.push({
            offset: 1,
            color: '#93FE94'
        })
    }
    if (TP_value > 62) {
        showValue = 62
    } else {
        if (TP_value < -60) {
            showValue = -60
        } else {
            showValue = TP_value
        }
    }
    if (TP_value < -10) {
        boxPosition = [65, -120];
    }
    leftColor = Gradient[Gradient.length - 1].color;
    // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
    var option = {
        backgroundColor: '',
        title: {
            text: '温度',
            show: true,
            //align: "center",
            left: 'left',
            textStyle: {
                fontSize: 24,
                color: "green"
            }
        },

        yAxis: [{
            show: false,
            data: [],
            min: 0,
            max: 135,
            axisLine: {
                show: false
            }
        }, {
            show: false,
            min: 0,
            max: 50,
        }, {
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', '°C'],
            position: 'left',
            offset: -80,
            axisLabel: {
                fontSize: 10,
                color: 'white'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        }],
        xAxis: [{
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -10,
            max: 80,
            data: []
        }, {
            show: false,
            min: -5,
            max: 80,

        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: (showValue + 30),
                label: {
                    normal: {
                        show: true,
                        position: boxPosition,
                        width: 20,
                        height: 100,
                        formatter: '{back| ' + TP_value + ' }{unit|°C}\n{downTxt|' + '}',
                        rich: {
                            back: {
                                align: 'center',
                                lineHeight: 50,
                                fontSize: 30,
                                fontFamily: 'digifacewide',
                                color: leftColor
                            },
                            unit: {
                                fontFamily: '微软雅黑',
                                fontSize: 15,
                                lineHeight: 50,
                                color: leftColor
                            },
                            downTxt: {
                                lineHeight: 50,
                                fontSize: 25,
                                align: 'center',
                                color: '#fff'
                            }
                        }
                    }
                }
            }],

            barWidth: 18,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, Gradient)
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 28,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 48,
            itemStyle: {
                normal: {
                    color: '#93FE94',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 60,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 70,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: 10,
                    color: 'white',
                    fontSize: 14,
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 20 === 0) {
                                return params.dataIndex - 30;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: 'white',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    };
    return option;
}



