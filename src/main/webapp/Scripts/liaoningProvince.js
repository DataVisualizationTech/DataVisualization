var dom = document.getElementById("liaoningProvince");
var liaoningChart = echarts.init(dom);
var geoCoordMap = {
    '河北省': [119.495371,39.959675],
    '葫芦岛市': [120.221315,40.277841],
    '锦州市': [121.275923,41.058355],
    '盘锦市': [121.920595,41.230863],
    '鞍山市': [122.466273,41.443348],
    '沈阳市': [123.111128,41.740731],
    '抚顺市': [124.433988,41.974686],
    '吉林省': [125.499015,42.501976]
};
//出发地
var fromcity1='河北省';
var fromcity2='葫芦岛市';
var fromcity3='锦州市';
var fromcity4='盘锦市';
var fromcity5='鞍山市';
var fromcity6='沈阳市';
var fromcity7='抚顺市';
var BJCity1 = [
    [
        {name:fromcity1},
        {
            name:'葫芦岛市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity2 = [
    [
        {name:fromcity2},
        {
            name:'锦州市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity3 = [
    [
        {name:fromcity3},
        {
            name:'盘锦市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity4 = [
    [
        {name:fromcity4},
        {
            name:'鞍山市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity5 = [
    [
        {name:fromcity5},
        {
            name:'沈阳市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity6 = [
    [
        {name:fromcity6},
        {
            name:'抚顺市',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var BJCity7 = [
    [
        {name:fromcity7},
        {
            name:'吉林省',
            value:'HXD3C1004',//车号
            state:'故障',//状态
            baojing:10,//报警
            guzhang:728,//故障
            tips:0,//提示
            shiyan:1,//试验
            zhidong:56230,//制动
            zouhang:85120,//走行
            fanghuo:23200,//防火
            video:23561,//视频
            jueyuan:56230,//绝缘
            jiankong:51020,//监控
            liegong:56230,//列供
            weiji:16132,//微机
        }
    ],
];
var planePath = 'path://M694.098884 627.138756 694.098884 377.263158c0-37.562998-31.030303-68.593301-68.593301-68.593301l-228.644338 0c-37.562998 0-68.593301 31.030303-68.593301 68.593301l0 249.875598c0 34.296651 26.130781 63.69378 58.794258 68.593301l-60.427432 75.125997L391.961722 770.858054l65.326954-73.492823L571.610845 697.365231l60.427432 73.492823 62.060606 0-55.527911-75.125997C669.601276 689.199362 694.098884 661.435407 694.098884 627.138756zM400.127592 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C431.157895 643.470494 418.092504 658.169059 400.127592 658.169059zM618.972887 658.169059c-16.331738 0-31.030303-13.065391-31.030303-31.030303 0-16.331738 13.065391-31.030303 31.030303-31.030303 16.331738 0 31.030303 13.065391 31.030303 31.030303C650.00319 643.470494 636.937799 658.169059 618.972887 658.169059zM664.701754 493.218501c0 19.598086-14.698565 34.296651-34.296651 34.296651L393.594896 527.515152c-19.598086 0-34.296651-14.698565-34.296651-34.296651l0-75.125997c0-19.598086 14.698565-34.296651 34.296651-34.296651l235.177033 0c19.598086 0 34.296651 14.698565 34.296651 34.296651L663.068581 493.218501z" p-id="2471"></path><path d="M470.354067 292.338118l83.291866 0c13.065391 0 24.497608-11.432217 24.497608-24.497608 0-13.065391-11.432217-24.497608-24.497608-24.497608l-83.291866 0c-13.065391 0-24.497608 11.432217-24.497608 24.497608C445.856459 280.905901 457.288676 292.338118 470.354067 292.338118z';
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;

};
var color = ['#f6d23b'];
var series = [];
[[fromcity1, BJCity1]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity2, BJCity2]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity3, BJCity3]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity4, BJCity4]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity5, BJCity5]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity6, BJCity6]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
[[fromcity7, BJCity7]].forEach(function (item, i) {
    series.push({
            name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: 'arrow',
                symbolSize: 8
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.6,
                    curveness:0.2//维度
                }
            },
            data: convertData(item[1])
        },
        {
            name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize:10, // function (val) {return val[2] / 8; },

            itemStyle: {
                normal: {
                    areaColor:'#fff',
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                    state: geoCoordMap[dataItem[1].name].concat([dataItem[1].state]),
                    baojing: geoCoordMap[dataItem[1].name].concat([dataItem[1].baojing]),
                    guzhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].guzhang]),
                    tips: geoCoordMap[dataItem[1].name].concat([dataItem[1].tips]),
                    shiyan: geoCoordMap[dataItem[1].name].concat([dataItem[1].shiyan]),
                    zhidong: geoCoordMap[dataItem[1].name].concat([dataItem[1].zhidong]),
                    zouhang: geoCoordMap[dataItem[1].name].concat([dataItem[1].zouhang]),
                    fanghuo: geoCoordMap[dataItem[1].name].concat([dataItem[1].fanghuo]),
                    video: geoCoordMap[dataItem[1].name].concat([dataItem[1].video]),
                    jueyuan: geoCoordMap[dataItem[1].name].concat([dataItem[1].jueyuan]),
                    jiankong: geoCoordMap[dataItem[1].name].concat([dataItem[1].jiankong]),
                    liegong: geoCoordMap[dataItem[1].name].concat([dataItem[1].liegong]),
                    weiji: geoCoordMap[dataItem[1].name].concat([dataItem[1].weiji]),


                };
            })
        });
});
var liaoningOption = {
    backgroundColor: '#fff',
    geo: {
        map: '辽宁',
        zoom:1,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#000002',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series,
};
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('辽宁', {"type":"FeatureCollection","features":[{"id":"210100","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MDGFSKGAACC@EEIAECG@AACCKDAFEDABC@ADKBEGAAACA@IIEFSACDC@CACGCBAAG@U]E@ABAA@BACC@AACDI@@DCCBDAACBDD@FCB@CADC@CEADCBAFGGKBAECBCDABKA@BBDCFFFGFEAEBBDFDABKAC@@JE@CD@DFBABKDCECAAB@F@@CC@E@@E@EFA@EEA@CDADEDAFADDBADK@BC@AMDG@GGCB@FHDCFE@MECDI@CBCAEBCDC@@CBCGADEE@EBI@AFEBEHEBAFKDOBBDDDABKEQBCAIHHBGPYBCDCCMD@@ABCECABDA@CAGDEAMBBFCDBDEBFFEDB@AAIF@BBBGAFFQ@@NUAA@C@CC@@@BCBEGC@ACCBCACCCABEJGIGMHC@CCODCECBCECB@CE@CEHD@AIISD@@G@@EQB@HCBAA@DCDBDE@BDABH@@DABBDODCB@BMBCAA@HP@FC@DTF@ABE@ALLHBDDCDBBJD@BFABNTQJICKJCBEC@BAC@EBEAEQKIKAAMG@CDEAEACEACC@ADEAA@CE@@ECEFC@CGAEEGCMAKCSAKGCEBEEIEM@CECCG@EQQCCKCG@MLAFEBYGcAECKKAC@CCCRCFCDFCBDFVECGIGFCAEBACE@AQECCIDAABEAG]N@BIDHHJDO@IECC@OACJCCEDCEGFCBFDACCB@KQ]NEEDCHCLBGKMIIIrKAAQDCADECCE@AAGAGEGDCAABG@@DIGIFKEEDFJKCIMIAEBEFAJABC@OIGGDIA_CGGICAAMaCYGSBIMc@GCEIA@CBADDH@DK@ACQO@GMEAEAEBOAIBGU@GCAECAYAACNK@C@AICSCIKKE@CNU@GAAMEAACEAGAE_KAKCIIEEE@MBIAIFIEIMMOEGBGDI@CCCICEUEEDGLAJCFDD@DC@@BDJKBBFG@@FC@ENILMFUEe@OJBFBDRNNNFPHHf\\MFBJBBHBZ@BB@HKNBFH@PALBDDFJHL|rAFABWCCBCB@JDNDXAHJL@H]RCFAN@DBBDBL@JFDF@JCFC@[CA@ED@BNBDBDDCVQfAHBBNFFDDHCFSJCDBFPHJJ@BABGDABDJDD@FABSHgOKB@`GJYBSJEDGJMFIBYGiI]IULCFBBCBBHHD@FFB@HKDAFFABJSIBFIFADC@ADDDABGDFFDCH@BFJFCDFDIBEJHDBFCDABJPABFDHBBBABFB@BC@FNADDBFCFAD@FFF@@DAB@DFH@DDBAD@FABDBD@HFBFUFBhTALKJBZPCRBVNTVFPJEXHHIHBFADHTNLNFPJHFGJCB[CCBG@KBGCE@GHDF@FD@ARMFAKUFDFGPUJBDABYJBHM@DHIEBDDDKBABBFCBKEABCB@DA@MF@B[H@BC@BDYHDHCB@DABAL@HDTENELSPCJDJZHdBhC`BRIJ@@F@FGHADFJEFCP@HHHCBW@DFCFCNCFCLDFCJBNGJBDEJAHBDBFBNQ^MTYL@BDFNJAJE@CCC@O@EDADBLAJI@@FMFBFHHDH[BCBCD@PHBRDDB@DCBGFCBQCEAE@DJHHDHJDFDFBBB@HA@G@EBAD@FDBBCFDFADBABEDIBIAMBINCNBDJABBFCHBB@ADEDNNBCHBFEPCtVZNNDhTdP^LZHRH`FBEJEZV@ADF@@BDB@@FBDCDBDEHBB@ABBDCBBBRBDED@DCBBH@tVVJPNHJh@HPHL@\\JBBLFZDlXDBLP`VXB\\RBBJF@DZA\\FdBBDBDIJCLAJCBAAE@A@K@IDDHI@DLHL@DB@ADB@CBMCADMH@B@FGPCAACMBE@@A@C@AABCCC@GDCAABE@CDABCD@DADBBHDBDAD@BQEAAC@GDDJ@DB@@BJ@BBCBDDCBPDGLCCABEAC@FHF@BNEDDDAD@BGHFJCB@FCD@BDFEHBBE@BBBDADFFB@DHD@@DM@ABFBDBVJRFzHV@BCFBFCVCF@BFJCBBABBDAPFD@LJ@BB@JCDLPnZLEBB@@HFBADBLRFABJLBBBGF@JEBYHEFKB@BGB@BWHADCB@FG@BFABLJED@@]JQJSIC@CBEBEACBCE@BCDCCC@KJINiZBBCDB@GRDDB@DDIBADEA@@C@A@@BCAIDEA@AE@@AODaCCBBPCHWNAHSJYDOPEBLFALVPLDBDB@L@FBFFFLLAFHPFBB\\MLAHABBVCDEBJJ@DDB@DCCEDEEGRCDJKFLNBHRLRRCBLNHC@NKABPJHDLDB^B\\@\\BFCNQNOFLHID@NDTJFDIHDDRRRBBAJABCJBFAFBDEHDFABCHAFBFCF@FCJBVFDCFAL@BD@DNBJJLDNPHCHHHAPJJ@TN^BhN^DNHDDLDCH@@RFRAR@VFLCJL@BE@IHMDUJQDGFC@CCE@IFKFAJ@HRdFJJFBFBPI|FFJNFDJJNRHDR@HFNJHHAFNVHDbZfHFXJD@HBZBhHXH@DhHJFHJXBLCL@NHNN^BRFJATKFGHKNCDDJCRHEC@CRGLKJABCIA@AJ@DCD@X@PFBGHABEACAEFC@IFEGEQ@OOR_JKFAJGNAP@DE@GHCJCVS@CGIGAO@GM@EDCJERCDIAAC@@K[MCEBGCABEJCZEDA@A@CACSMMI@EBCNABECCBCJIJC@EFAIEKAGEFICCBIDEFGAEBCDABCCEGACEVU@GACGASFE@OGAEBCHGHC@MAAEAGBEAESOQKG@E@ATODIJGJ@DC@GCCMGI@AABCDCZGJGDICCA@IFA@EGLCFEFKDCLDHHBBBJDFHDF@HAREBGCGBIGG@CEEDGJIXKBCPCXIJCFEAA@CQGGACA@CBARBFAHKDGLEHARBLBH@JIBEACA@Q@CCHYLAH@HDH@DE@ICIZBJEDC@CCCEEHGJ@DBHJFB^IBCAEKK_AOGEAOEGDUMggCBEJMAADADG@CBMBBFHADBHLGD@DADBHC@HJEBDDB@CHOBBAG@@AGBABKB_OBA@CB@AAGDBKC@AGSDBCCMJCO_qFAADAAEB@ACAESDEDCA@CBAEGEFICGIA@@ACAEB@AFAC@A@BAIBEAEEECCGE@CJICA@AFA@EIDBAAACBAAABCABCDCACA@CCCCG@AE@OEEEI@CDIAIBMIBGGCCIIEGCAAECAEFACCBENCDEACBCD@DC@CD@JEBCFAFKG@EC@CEK@AFAEIEA@CBAAGEEHEBCLCFCFA@GJITADDBEFE@CDA@AH@B@DGDBBCD@@AB@BCFA@EBA@CL@@WAKC@SoKKU_KEABGDEACC@BCCBCCCCAFAACG@ACEABEA@ISRaWECSG@EIC@CGA@CMJA@EHAACBAAAFB@AHCAGJADCCCBGFBRCL@JDJJPJJBN@JC`SH@DBCuCADA@EDAAETGJDBCFEH@BAPGDEF@HCF@BABBFANGF@LGF@BCXGDADABEF@@C@AF@CCHACCBCF@@DF@FEFBBABBB@FEF@CCD@BAHBAABAB@BDFCBBDAFDDCBDF@A@@BD@@BF@DAF@TAFCFEL@BKD@@AB@JAFEJAFEF@LI@EFGJDFCF@HC@CFADCEEACHADEF@ACBADAFDD@DEF@LAFEB@BEBFFC@HDBBFDBABBDCFDBHLJ@FABCACFC@CF@BAF@BCACBAAEGCCABGHEDCEOGA@AAA@CABCEABDDCB@CAC@DAAECBECDGA@DGD@FGCBBIFADCAIBEEMEDECGB@@ABAAAACCABE@C@AD@JFBGDAAABCD@HDBCAABAVGAAEAAE@GIGCCCACGA@CDGBG@@ABA@@GDCACACBEACDSKABI@KIAE@CLEECACKGBGFCDC@CBADE@ACCDDB@@CAA@AE@@AFAAEDBBA@AFD@EHFDC@AA@BAICIEBGCEC@CCBA@@BAAMEAGAEAABBAGEJIPEJEH@DABIB@AABAAGBAFBICBGMEQQcSMCU@YE@GEADE@A@ADADCDBBGEADCDADM@AEB@CEABEGAMACCAEE@@EDBBA@KC@JGFB@CNA@ADAHHDA@AJ@AID@@AHBHBBA@ADDJA@ADB@BDAHB@ACAFEBBNBDBJBPHJFBCB@DAD@BAFB@ACABAHFFGFB@DABADBHGDDDEADDCADFGADFB@D@DAHFF@HEFBBCFDDCDKFKI@CCBGCAICAALIFB@BDAB@@ADADB@EAABA@CEAAABCBAA@AAAACEDCDA@EBA@CDCFIHCDE@GHBBACEBE@EHCDEBB@@HKIKDGAEMIGBACC@CGCABE@EJ@AIADEGACECA@EIBEC@GIEAEAEFA@ACEEBCAGKAECEACICCD@BEDABEAED@FMHADBDABIBABGFAH@DAF@JKJA@CKE@AIE@CAAGAEBMAGEC@CE@AAAC@ABI@EAIEC@CAGGK@KE@IFOHBDED@FCMIBGBAD@@DB@LGHMBEFEEIBCACEAE@CAS@AEIA@CC@@AI@C@@DEDG@CDADABBDCBA@@B@BEDEBEAECBEIACBEBCD@JK@AAC@CAC@KFECBEKIE@AAWFCDG@AABACACGI@IG@EBCA@KEM@FEACMII@CC"],"encodeOffsets":[[126558,42490]]},"properties":{"cp":[123.429096,41.796767],"name":"沈阳市","childNum":1}},{"id":"210200","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@DAGBD@"],["@@B@@CCAADDB"],["@@HAGACBBBB@"],["@@B@AAABB@"],["@@B@A@@@"],["@@DDD@A@@EEA@D"],["@@ABD@BAB@@AA@ABA@"],["@@B@CA@BB@"],["@@CAA@BFCFFBBFD@@CDCAAFA@AACI@"],["@@ADEB@BCDDFGLFJCFFANBDGAEEAA@AI@ELIAAE@AA"],["@@@BB@AA"],["@@DABAD@BEGBED@BC@FB"],["@@BDD@AEDAC@CD"],["@@@DBAAA"],["@@A@CDFBBCAA"],["@@@BB@ABF@BACA@CCD"],["@@C@CFD@@CDBAABA@@"],["@@CBCNDFDACCFA@CDAEC@C@@"],["@@CD@BHDBEEC"],["@@A@BB@A"],["@@BAAB"],["@@EFBBHECA"],["@@QDJBJC@@AA"],["@@GDBBBAD@@A@A"],["@@C@EFH@LCAAG@"],["@@IBCDLADAAA"],["@@YFGFAFVHDDD@JAL@HABGK@BGAAMG"],["@@BDLHBBRJFALADAC@@CFEB@DAGEEDEAAAMABCACCB@HCBC@CBCEGB"],["@@G@CFEBADJDDAB@BHCFBBF@@HDADEDADDCB@DFDDAFEACDA@GIGKCI@DECA"],["@@BBBAAAAB"],["@@BBD@CECBBB"],["@@A@BBBAA@"],["@@@@BAA@@B"],["@@DBACAB"],["@@CBF@AA"],["@@EDAFEB@FDDN@FFFBDE@EC@ECCAAKC@"],["@@IBCD@HKFKJMDCCA@GF@@FBJADBF@J@DIFCTEDEFIIA"],["@@DEIDC@@CCDA@@DZH@AECCC"],["@@AB@DE@@B@BF@FCBCEA"],["@@DBACA@@B"],["@@B@@AC@BB"],["@@BCC@EBE@ABC@GFAAIBC@ABBDF@B@@BD@FBDEDB@CDABCF@@AF@"],["@@F@FCCCEBAB@D"],["@@@BD@HAEAEB"],["@@MBKLGLAL@HJTDN@FCFIFCFAHDPBFF@VA\\GH@DBBFAFIJ@F@DF@TEHE@IEE@EBEVEHELS@KAIGKGG]MYYECM@"],["@@EBCD@FDFTHJGF@@ICCG@ADA@A@CCGC"],["@@B@@EFCCCC@ABBBCFDD"],["@@A@AB@AC@DDDAB@AA"],["@@DBP@@CCCECCDGB@BABD@"],["@@@FAHC@@BHDJ@@BAFKBABJD@DCDDBTABAAC@AGIAC@CDABEHEBCIECE@AIECDBBABIBDBED@BD@DB"],["@@HA@AG@CBDB"],["@@DB@AAAC@CDBBBCB@"],["@@DCACA@A@AFDB"],["@@@BFDDCAAG@"],["@@D@BAGCADDB"],["@@BDBBFGCCEB@D"],["@@DCEG@BBDAB@B@BB@"],["@@@DB@DACCA@@B"],["@@DBDACACB"],["@@@DD@JGAAAAC@ABBDABCA@B"],["@@D@AC@EACE@AHHF"],["@@HBBCGCCBBD"],["@@BDF@HEAA@AAAIDAD"],["@@FBBA@GAACDAB@D"],["@@CACBDBDA"],["@@DDB@@E@AED"],["@@JDLCDCM@MCA@GFLB"],["@@ACEAKBAD@PH@FAHG@E"],["@@@CACE@C@ADALDBHAB@BG"],["@@CBDA"],["@@A@BB@A"],["@@C@@ACA@ADAACBA@AG@@CE@@AEA@ACBA@A@BCEEEACBCCADE@EFBBA@ADC@@DEHGFIBBBADBB@DEFDDFB@DMTT@XDDD@BDFJBFDCHEFBBJBDAVAXDLFAF@BH@TFJDBDBAD@BDFAF@AEECC@@CK@ABABGAEI@CDA@@IAAI@@B@@AAA@CAA@EHEFABEHMCIDEDB@ADA@EH@@AEACCC@@DC@I@@B@@CDIDCA@CA@GDD@BDFB@FABIDCAEAABA@EAEC@CBAD@AGF@CE"],["@@BAC@@@BB"],["@@BAA@CDDA"],["@@ABBBFAAAC@"],["@@DAAACDB@"],["@@B@DGGB@BBD"],["@@QBCNCBE@AGC@KLEJIF@DBDABDFADCBBBJAJCXE^AVKDC@CC@OBE@GC@IDMCA"],["@@BCED@BDA"],["@@BAAAABBB"],["@@JCCCBAAAC@BBABE@BDA@@BDB"],["@@J@FABAJANDV@FC@AAAEA@CCAODI@CCEAACAAI@IF@BDDABCAACC@ELDBLD"],["@@EB@BBBHBBAACCA"],["@@E@A@BBCBBDDFFCDC@AEC"],["@@CBBDDBDACCAA"],["@@ACIAFFF@"],["@@ABG@AFC@ACCBDDABC@@FDDF@DDBBADB@JCNFNBHEBDD@LAB@D@JA@BH@@D@@J@@ALAHBBDDBH@LAFBBBHALBBAACFA@BHFHBDADBFADDDA@GDA@EFENEBACEA@K@CEE@@CCA@DE@@CCCA@@FIBCEFG@CGCAACBEBGBGAEEBECDEABEEACBACG@ACA@@CCC@DDF@DBDC@ADFBBDFD@DBABBBDADDBDDHBAHEFGBACEAABBDC@A@@CE@BDABI@AAIC@@DC@AGAABBBADEBCDE@CAEAACC@AFE@AACBAAE@AEC@BECACD@BC@@@@EE@"],["@@@ACACBAA@BBBF@B@"],["@@F@B@HABE@GE@AJCDEAADB@"],["@@ABDDAE"],["@@CFOCCFOHAHFFJBDDLABCL@JBJAFEF@H@XFFABAAMMCECKAGAGDCAE@CAK@"],["@@BB@CA@@B"],["@@D@@@CA@B"],["@@FCHAFB@BDB@CDAFGLAFBBA@AFA@AHA@AAAC@KACCABA@BDABGBABIF@DG@ADS@DFDB"],["@@BAAC@ACBAA@FBBD@"],["@@DA@ACB@B"],["@@D@F@BDBGOOC@ABDDABGBCB@BEBBFCB@BBBDAD@FCDBFC"],["@@TCDKCEGIGCKFCCKGUBABH`@BHBF@JCPF"],["@@E@@DH@FBJC@@CAI@C@"],["@@BA@CAAA@BH"],["@@BBPEJKBGAAC@CAEB@AE@ACE@CCOH@DFD@DAB@BD@FAD@DDB@@BCH"],["@@BAH@BAFDBADELC@AECEBAAEAADKDAFCB@DD@"],["@@B@ACDA@@BABADAFBDACACADCAEAACBCHM@GH@FBBHBBBDA"],["@@DBB@@CC@AB"],["@@DACACBADD@BA"],["@@FBNEJGBGEGC@QHCHAFBF"],["@@D@BEC@CDBB"],["@@A@DB@AA@"],["@@FADABGF@BADEDE@ASSEMEAAA@BCA@CACAAGBACIEAIG@CEGCGHKA@CAAGDEDI@AFBJ@FGDBH@DAB]FC@ECIB@DDDADHNJL@DDFFABBFHCFBBNHADLHJ@BGDEDA\\ED@JFJABCFCJAJC"],["@@CKEDKBABBDCBCDBDADCFCDGBADBBPAJGDBBDB@B@BED@DADDF@DA@C@EC@@GGBAE"],["@@G@CBAB@BNDHCJ@AAG@AEEB"],["@@B@B@AAAB"],["@@CDADDRALWpADBLADCBwNGACCAEBGNKBCAEECoMSAaDKBADHHADKDCA@GACWDIAKHEBC@EIIAM@AABAfIDC@EAI]mG@KECGA@UBCCAGEC[C@ABEDMFCF@pTJ@NC^GBMDCNEQHG@YEIAECAKODG@CGK@EKAAC@CIEEAAHIAAF@HC@EADDCDA@CID@BEIEAEAAA@EDI@OEKBI@GAQBCAA@AFKACBC@IAEBAFE@AFQFKBq@EDC@EMEC]EJ@BABCACGCCGE@MIOMCECKGKQO_IE@AB@DFF@DCBABoOM@_BMAOIC@}DkLcHUCQCSICE@KCGUOKEIAWBYEWCQBmm[OACCSCGIMIIUOIAU@FIDMELW\\AHBHDFHDPDFF@LGNIJKXAJEpBVDHDF\\PBD@DGH@HCFsDGBIHCHALBLDRFLTRTLLRLLHD¬BNCLCHEFGHOBAb@LDJTHHxHLDDDHPJD\\BR@JCHEF@XDJJPDFDDJE\\ADCBWCC@EDEP@JBDFBJCFDBDBLDDTDDDADCD@D@DFFNHTAFBDFDPDFFDHBL@FCFODEhUDCDKFEbAvJDAFAFIF@PvftXHNHFJBTBHDjnZ`NHXBNIAI}CG@CBADANJHBRARDBB@BAHDDhPF@JGB@F@`^FH@HGPULEJEBCFATABEBIAEBCTA@GAABANGD@GFERIPGHAH@HBHDDVHBD@BCDQJENBDDFHBPB|I@FABOHADDFJBLGDBJF@DABCDK@GBGCKBIREDEDGAECEIAAC@EFGX@HBJDHFDHBfAF@FPF@dMF@PJF@FAHGHEH@LDPJBF@FCFEDE@SEEBEBALLJAJ@FDBz\\JBTOHAFFB^CDMD@HV\\DJ@F@FEBICWQYICGEC]B_IiKSQIC¥IIDIAECEGAIkYQKaAHSJAPDVIHkHGD@^EZILMH_IG@KDYNyNK@[GKCI@EBCDA\\GFM@_GAQ@CBERQHCB@DAHBBHHPJBFCHMJCF@JBDHB\\ADBDDBDCT@FFJTNZZNPFL@LGDKJKRCHC@C@IMIIAQGGO@EDIVEHQHMHORCV@RFhPVzp`TfNJ@^GRAvP@XDPD^PFBfBVFHJDF@H@FCDKBEDAJBJLFj@VDRLHJFNGXDFDJFFBHAFEFSPQVeXCDAHBDDDjPJFDJ@XCJWTCJAVDJBFFBZDNFXVJJJR\\PFPBRBFJDH@LC^MJ@dF~VNFLPBRBFDDJFL@RCNB\\\\JLNLXLPB`C|@XENDJFFJHfDFLH^JlLNHRTLHBDBDCDuGSBGJELJL^TBHCNFDNDTBNEHBFDDLLJ\\ALDFFpbFHPfFJJNTP^\\RGROR[NWBGAIMI@GFWLMJEb@VLpJFDADDBDBPGFAPHFG@IDEH@BAH@BCBGBC@CFCDIJDBDH@DBTANBPCBA@CF@BGH@BCF@BCRDBDD@BDJADCHAXKACDCBEBAFGACNGD@DBLGBGDCACL@DAPFH@RNHD@HJBJJBFB@LGBKHANIDCCG@GBACE@EPIDA@CBC@ADABCHEFIFCD@BBRNTJnLP@TC\\[FAN@LCFDF@JBJ@BAHDHBDBDCAA@CFAJFRFDAAEaZOPG^IL@BIFA@CJCLIB@FBCBCFAD@FJJVLNBdENBFD@FABSNADN\\@JCDSGG@AB@BFNDTAFC@MBMDOFAD@JJJBHHDRBDADED@HDHL@HIDIDKHAHEHCJ@DLRDH@BDBH@PIJDF@DA@GFADCD@@AD@JD@BFFLCBBDAFBNCVANPDBDFF@DALAJBH@RBJDBCNCJFFAJFJ@NDLBBBJ@^EJFAJDFJDFFJFBFHLNDHAFDNJFBJBFFFDHAPFHCJ@TEDEBAH@DAHBH@DFAFBFDBBFLJLDJEJBJFDABBDBBBDF@BBFBBFBCNMF@D@FADBH@BB@DAD@JJ@B@DFF@FFD@BDDCDJHAFJDJBDHBLFDFBFDHLG]BGVE^CV@JAHCFGBKAC@QDMHQ`gRI\\@LCAGKSLWLSbQNCTKpGHA^cFCD@N^RRLFFJFDDBDCNEB@CEBALCHF@FHBBD@FFBDDFBD@HCDIBAR@PEPAJFFELEV@_bYrFJSLQHGJELBHDFPNBJBzMFIPILEBEHEJ@FDJ@HEDBBFPPJDLCFABCFA@IDE@CMIBIACBA@GMAGEEEICMCNUBEA@DEP@BC@EDB@GCDEEFAEI@GFBJEGGBCDCDBLDDLH@JCJBLGFABEHADEBDHBDFJ@@ECEFABHHBADFBBEFB@AHCGGC@BCB@B@FDD@HHBBFKNSRMBICCOIEIACCAAC@IFOLQRERIHQES@IFQVKFKBS@y_@CABMCAOECBKHGCACCUCEC@_BECOYA@GDoEECoIGDENHvAJKDWAACCUC@ABATCBE@ICCEAMACG@C@EJCB_EiAIBGHEBU@ME@CPSACMGE@OFMNOFICACBCBCDALBVGZU@CIGCMFGL@BCJEDEBEE@CEBEG@IFC@ECEACCWEA@EJCBgFSAEAAC@IBCDANADCBCAKCAICEMEAGHCBg@KF_BIEKOM[EEGCI@GBCB@DBN@BIHcZMHC@CEHS@CCAI@MDEGOFAJAB[CAAAEQCCBAJA@SEGEDIDCNEDCBCCEUAEDAF@FCPEBUCKE@A@EVO@CCC_EIGMMUKCE@[CGGGIAGFGFGZEDG@IAWE@OHsCSFE@E@KEAABIKGACHUAGMIcOEDGPGJIBKAs]IKECMEUAeMG@O@I@ECgsEEEAE@IBOJIDG@OCECCCGcGMGGIEKCeGGCQO[Ksuoc]KKAS@OGCIEAmAOFOLDMCeIEEC@ED]@ECCE@EBMTEFI@GAsqGIgGGIEç}IEGGMWECIAY@G@ECAEBELEBC@EI]@QBEFC[FC@E@ECEGAcDUCQCMGMIsqEAGAoBIAECAEAGDIFIfcDEAKEGEAI@ZK@cGICCEaCCG@G@jQNIFC@OM@KZCFERcBECGKGM@OJADDHADGDWCG@qTIBE@ECAE@EHGjYpUJEBCGQ@G@KDGVEJBDA@CSM]CIEk[ECI@mJMFGDAFBHFH@FCFEBMIK@OH"],["@@I@OBOJMBKJG@CDC@Q@IDEBQJGLB@BAB@B@BBCBB@BAF@BCJDBCHBBBADF@BDHCAADC@AHAFDAB@DJAHF@BAB@BF@BAF@@ADCA@@CJEAAC@@CFGCABCFEFBAFBFLFCBBFDABEDABCJGJIXGLC`@DDL@DANBFB@BFF@FDAFBBCF@B@@DB@@CFA@EHENCBCRGD@DDD@@EDCHABBDBJADBBDBBBAAEMACCEACECACEKCA@EHGDSHYASDCCKHODU@ECAB@BG@C@EEHEH@EA@CC@GE@CBA@EFCCAABAJA@EA@BABEADDEBBDEDHFAHGDMD"],["@@@ADE@AKIWHKBCBC@ADEEA@ABC@@DCDEA@BDBABIA@DGHGCABCF@BFAHBBAD@BDADE@BDC@ABDBC@CFIB@DED@BFBDABBFA@ADABDCFDBDB@BDB@CD@DBBEACBAB@BAD@@EAB@E@CD@@CHAH@DD@BBDBAHAHADGCABAAAHCCEB@@ABA@BFAF@AFBB@CFC@E"]],"encodeOffsets":[[[124520,40833]],[[124383,40756]],[[126004,40598]],[[126034,40592]],[[126165,40585]],[[125997,40498]],[[126000,40479]],[[125604,40466]],[[126062,40455]],[[126019,40435]],[[126066,40453]],[[126046,40452]],[[126034,40434]],[[126023,40434]],[[125999,40432]],[[126035,40427]],[[126043,40422]],[[126048,40413]],[[126052,40407]],[[126062,40384]],[[126066,40383]],[[125507,40245]],[[126001,40217]],[[125943,40216]],[[125960,40214]],[[125981,40210]],[[125957,40191]],[[125357,40167]],[[125540,40148]],[[125441,40165]],[[125387,40163]],[[125441,40163]],[[125749,40161]],[[125352,40153]],[[125545,40150]],[[124409,40135]],[[124393,40128]],[[125244,40142]],[[125535,40141]],[[125356,40140]],[[124506,40125]],[[125364,40115]],[[125365,40112]],[[125243,40092]],[[126117,39963]],[[124072,40023]],[[125369,40344]],[[125122,40106]],[[124756,39852]],[[124751,39807]],[[124640,39820]],[[124549,39785]],[[124542,39790]],[[124534,39769]],[[124519,39728]],[[124438,39756]],[[124446,39754]],[[124450,39753]],[[124457,39755]],[[124030,39815]],[[124224,39938]],[[124241,39937]],[[124530,40104]],[[124525,40194]],[[124588,40250]],[[124594,40229]],[[123937,39805]],[[124743,39803]],[[125762,40195]],[[125967,40214]],[[125974,40213]],[[125303,40103]],[[126039,40610]],[[126035,40605]],[[125896,40502]],[[125898,40494]],[[125885,40462]],[[126041,40374]],[[125724,40191]],[[125718,40180]],[[125715,40179]],[[125725,40174]],[[125710,40167]],[[125708,40173]],[[125699,40166]],[[125693,40166]],[[125584,40168]],[[125685,40197]],[[125435,40192]],[[125464,40187]],[[125453,40165]],[[125398,40201]],[[125399,40200]],[[125362,40214]],[[125395,40160]],[[125296,40179]],[[125232,40220]],[[125280,40291]],[[126177,39975]],[[125772,39977]],[[125774,39997]],[[125729,40018]],[[125757,40020]],[[124961,39970]],[[124919,39901]],[[123880,39896]],[[124096,40033]],[[124415,40183]],[[125976,40496]],[[125822,39993]],[[124141,40044]],[[125663,40220]],[[124731,39905]],[[125509,40217]],[[125709,39956]]]},"properties":{"cp":[121.618622,38.91459],"name":"大连市","childNum":115}},{"id":"210300","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@E@GDE@SEECIACABCFCBEHC@C@CGELIJATGPG\\UPEVEhOLOPKHILEPCEPEJCl_jIPEHAFDB@@AAC@CDAHFHCAB@FAFBBADHLDFFCFFAHDDDFDABBB@FBBAHHGFFFGFDDA@GHJHBFA@BDGBNLDANDBBC@FJDDBCHLCBBBOHRNTGJJL@BFDF@HDHHLD@@DD@BBFAAEH@@DD@@DHCDDFDHCDBBAFDDCA@FAAA@@NJBAXEAECADADHFADFB@NPDB\\CEGJ@@CBEAE@ADAHBDAHDDAFBFDD@CHFBFBAHDBBBHBBFJA@CFA@DJB@BBBDABDLAB@@CJ@BAB@HC@EH@DB@CGAHCCCABCEFAAED@AEDBB@CCBANBDAJDHENADAJ@LCFDHDHFDAFBHABMBAF@NE@G@CBCB@@CH@ACDC@CD@LED@DA@CBAAECAC@BAAAC@BGC@CA@ED@BCHABE@CEAEEHQACB@BI@CKADEDCVHDCBCFEJAFBF@BBH@JLD@JABEN@DBDGFADDAABABDJABCCGFEAAAECACKNCFCFADED@JED@BA@CEC@ACGBE@AHGHCEEEAI@IEG@CEQ@ACGEAEDCDIHCBCHE@CKKBAECAECEUIAEDA@EBCCAEAEDKBABKAU@UICBUFOFEHI@MAm_IEGEAE@O\\gAOMKmEMCLKPUBG@III]QCIIODQHGDACIGOHSfHNCJCJGbMBC@EEECIUSWKIGCMAIDQLQLM`]TMREVILM@KLFJLFDVEbSr\\ZLbD\\CNLFJHDfJNDHFTXdPJAPA@AZ@^JjAZNLJR`HHHBfGZ@hLTDb@XDTFrVVKHIRSf]LIFIBGAIEGIEQEMS@EGE@CAC@EAADACIBAACBEAA@CGCFGHBD@AGBAAA@AFAFBLAFEJABEBA@EEGDCCGDEFET@dLNBNBDCVAx_`I`GRINI^ELIHKBOJUPQ@IMIUEKGOMHKLELEFCDE@SFaKUJEBG@ACCAEBEDCCGDCACBCEGNCHBBAHGHBJ@JEDCBIGQSYBGRUDKBMEKKMQMGMHMTM@ACKO[YgQOW]COOMEK@ML[MGOBKEEEGBECAG@CACICCIC@OKG@CCAEMIG@IHGBMK@EEE@CCCG@@CQKM@ABIAEBCA@CCEBECMAAGAEGAGEGGQQSMIBERYXOL@ZHLCBQK[U_BCECGACGGCGGC@AACBECEIACBCAEM@EEA@GBCFSBOA@CEAG@CEEAGCBE@AWGIA@CCCE@CCE@IGC@CAEELYACDKGCGA@EAAABADA@@EEECB@BC@BLELGFSARADGFWDCLCFBDIDASBO@EBCDKDGACCKAC@I@CCE@CAEKAAE@ACQQ@CCCC@ADEBMDGCOOAEAAIFI@ECG@IFAFKFOJEJyNIAMAEOGCKAIFGHKRITqEaZ`U@KFEFIEOBOFQ@ABCJGDC@EACCEA@EACGA@EGEKDABDFA@MFCDCAECEIKEQQM]C@ED]dGBoHSLMDaRKTKXLTBHKD[@QJ_hGRCN@RBDALEHGDIBU@]DUFAHH^DDAF@DDD@DABBBAFCDAFA@@PCBIB@DEHBDEHB@@FGJ@DEBAHDFEJBBDBBF@BBF@FFFAFFDABAHDFAD@FAB@FLLLH@DADFBDDJFHBBBJFJBLH@FH@BHLDBDBDADBDGLDRFNALBJEZHZFFDDJDtBRFLHHFFPA^IR@JLRNJ_TO\\CJIH]LIB[ZOJACCBEDC@KFCAC@K@EB@BI@EEE@AAECAAI@CEIACDK@GCABIHI@GDKBC@EBC@EBEA@BEBAFANGHCB@DCFK@GZSPKBiCYD]LYEIBIFcZKBK@KKGAC@AAODIBGAEEBCDAEIOBATG@BDE@ADGBGFEBADMFHBD@H@HBDBF@BDDFHBBD@DBB@DDDADBBGHGBCHFDJADFBDBDAFC@BFD@BHDHTHDH@B@DADGCADE@@ACAKAE@IC@CA@IGECAHCA@@BDCFGBIBABADBD@JEFHFEHBBDBBDJFBDH@JJHBBFFDDF@hAH@LCJCFMBFYEM@[TUFuDBDCB[@FFNVPRDFBADDCBFFB@BB@BGDFJABAJDJDFGBC@@BABBBKDGAGBADBD@LC@@HMDDPOBCAC@CAGB]HJPABTTJD@NSHATBNLNJRF\\CD_JUAYBKBEDE@GBKAIB@@@EECC@AGG@G@GCGIKD@DKECCC@OA@BE@@BMBEACE@CC@@S[AEJCDGBQCECBCEEICA@CFCBS@EB@@BBNDDFADOJAD@DDDF@JEJEJ@HDBHIR@F@FFFRFBF@DED[HKFEJ@DFBVELBLBPJLXCDCAQKEAIACBCDBFBF\\VLFF@FCLMFCHCTC@TBDFBF@DALODAFB^lQTGLCTDTFRA\\D\\GNMFOPARBTKJKPBx[DGJCTDLVRZJR@LFJHFRjBXDddTTTHJJOHcBKO[DgFAYQJKLIGMOOOEOaMEMIGeETKUQWH_ISF]KMHQIQVWAgJOFW^SNHFlHPHLDLNAfJbFLNPFdPVAJCH@BHBDDDF@HDBBBED@HCDFJABiV[P[\\GLW^clB@GLJNGDDDMFPRKDPV\\^`N`PbLCR@dN\\Jx`PBTF`DhBBdP\\NHDTJAIEBBELC@GEA@EGCAGDAAADEVK^JjJZHJANEHIFCTIZAHI@_LAhPTGBGCCCIBAHCBA@AIIOGAEDCTIDECGECMEAABGReDUCCCAMA@AFCB@\\DD@DE@ICEIEK@CAAA@CBMDE^Q@GIKBGCWCM@IDADAXDBABE{qGKEICCKAOBG@AELM@GAAY@GAAAAINEe[GGEOMMQMACAEPIf@VFNEJKFMD@@EH@AELACI@AD@@CCCDEBIHKFC"],"encodeOffsets":[[125566,42189]]},"properties":{"cp":[122.995632,41.110626],"name":"鞍山市","childNum":1}},{"id":"210400","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@FEN@TCFALCDA@EJINEAOEAKG@ABANCJCZGLEL@HAJKBC@CDGCIHEJADECGAECGIECE@ADC@ACIBANELABEFE@ISMOBECUGC@CDAA@GHCBCJA@KAGLO@CEACGGGBOBEF@F@HCDBD@TCHEH@LCDBDDFED@HBDJPDNJDADCPCF@JJD@BABKDAFCB@@BB@@CBBD@DGDEPEJBFCAEL@AGA@E@EKACGCCEMCCC@CBEDCDABGJEDKBCAECECKI@CECAPAPERIH@DAFBBCF@ACCACCEESE@AB@LDH@BGBCACA@ECG@AADCAC@@AAKAAEBC@CECDC@AGACCAGGADA@CH@FFN@DBNRDHJNBFLLED@BD@DC@CEACGFEAKGECGDKEIHGBEMK@GEKBEDADBDEDDFE\\@HDDDREXFFLKBCB@BDHFRANCHHBD@DDNDLGTCHGBIHCJ@FGJCBCJADAJCTAHCHBRAPFDFFFHABCFADCFC@AFADC@EJ@HGBGJCGKCAMEACDC@CGBOGAKI@GDBEAEAA@ECCE@CEGAGDCAGHECO@IBI@EA@CFC@EDEHADCBKACBCGEAGBCCICAMCAEGE@EAC]YEGICEGOMKI@@DCBGBE@GDC]EGCIFI@AE@A@GGKQEIAIKGAKBECMAAKGECMPAFENBJOFEXCHC^CFG@EDGI@WDICKBIAGCQCAE@ICA@CBKBAEIBC@GCEGCAEAABGCEDCAA@CFEACFC@ACC@CCC@ABAAC@AD@@@AAAAICAABEAEBC@ABAAEB@AADCD@EEDCACBGACDEBAFMBADKDIPCBCDA@CDCAEBCAEDADC@CAABAAAA@DAAABCAALCDBBAJBDABEDABBBCHADCCCEAEAEEECFICABCHGOSBGDIBKCKOSBKMW@ECGHIFABALHJAJ@FAHJDBTBHCNHBBNJJBTADBBBDBHBHCNFZWHEFABAL@JAHDHCAIBA@EBAHABAACGE@ADCBIFEDGTCDCEMGECCOKAMEEDGEE@C@IDCBIDCDAPOGMDIIMAMCGEAQ@CBEAW@QKE@]FMPKHKFEAAGGICQGI[M__SIAMIOWEQ@KAKBKBG@MDGDCAQNEB@GGECCBCCEBAAGEBCCKEE@EBGACCIAA@ADABEAOBCHDDIHBDEH@DABKA@CACOASEAGEEcFmZGBI@WEMGOCI@SB]A@IBI@MCES@yZSFGFIDWFSAeJUTERIEOSGEQCI@AAGACCEABAAGKEACGGAIEGGAI@IAE@IEBAJK@GFEGGEOIAOFCCGC@GEIFCAADACC@CEAEBCACIJGAIHK@CDEGGCA@EAGBAFA@C@ACEAGAGZIAEEAAGHEDGBAHBBACGCAGYBEBCD@BEOES@]ECKGKcO[GUIOGOO[M}KiMS@eFM@KSc_IAOLCLBTMH_B_@MDUTOJSJQTKPKJGFWD[JaZYHWCIAWMCMRW@CGCWAWD]PCDCXMZgLCJELA^gPONMPKPEPA^DNJLNNVPTLLLINOLcCYDQDCF@JDJGBEFG@CDEACBIBEFFD@HF@FFD@BFCDADMDCDCJCTEJSJOBsEgRO@UKGGKEOC]DQAISGIK@aGKBYOYGOZETMN[CYESAQBeRQNZWD_GGCQIOCIBKPEPEHCiIMQACB[BKCOUIoKeKOAO@GDKHLX@RAJEHG@OCSGUKCEC@EHAFGNCBADEBA@@CC@ABAHNJEDC@CFGAEP@JLFL@HHDBD@JFFBJ@BAD@BB@BDFD@HFNBFAHBBB@DJF@BLF@DIBILE@CBG@EBAHABAJCBCAGBENC@BFAFCBAFCBDBDJFBFDLBBHADFFBDB@FEFBFBHJD@AFFJB@FDBDFHBCBJI@@FAFDBDHD@BDHANJBFCHJLGL@@AACFGD@FAFDFABGA@HCFGDEJCD@DAB@FCBCDDFBBBBB@ABADBBFB@DABBB@FCACB@BA@CB@AEAKJBBJDDBAHDDJ@ELCJCFECADEAEBADC@IECBG@AEHBCEDBCCFBCCHCAGBCBA@CA@C@EFGEABDB@BEAABC@CBA@ADIEOGIACAMAAAEFDB@BGACB@ACA@BIBCC@BABGAGA@BC@BJI@@BCBEGCBABMB@DEAIHD@@LABCA@FF@BFDDNBHBAFFB@DFA@BCNCBCDFBAHCACDCB@B@BCFFB@HZFV@NDdTRRNFAHJDEAABBHABBBA@AJCBG@IFOFIJHFABBAFBHBFBBNAB@@ABDDD@DFAHJFJDABB@@BCDGE@FEC@BABCABFEB@BF@@BBB@DA@CCDD@BCFAB@DCDCBCF@DLHBDDDIF@BBHJHLBBATLDCFBDADBDBHC@@AB@BH@F@DED@DHDBDDJH@HBFFBBBB@VJHHHLTPJFHB`PRBpJJHR@B@H@DCJ@BCHDHCFEPEDEHA\\JH@H@DCBEMM@GVE\\AdBXFNFLBPAL@JFJJFRFd`XZNXD`PZATCpEVGZMLClHNARE\\BZDhRVCHUBOD@JE@G@CBCDAFGDADA@AEGCEBA@EDGAECAACNAP@HDLBNJRDdBJOJDHBHFTHDBFBABGFBHBF@BJAFDLBHAHFNDFFXFBB@DB@FFLBFBXPFFTJ¦XbJLFjlNLFHCHMRDLHLJFPRBJ@HQNONINERQTEPANOhDHHHLHRTRNPJPZD\\BHX`DJIREXDB@B@HFHJCDDHAPBXKPBL@JDFADBLC@CA@@EAAGAEIBIACVGB@BGL@HGH@FBFAF@DBJ@FBH@JDH@DCVAVND@JBH@DBF@HAFHBHDBBDLFD@PBFAPFDDF@HGPENDJD@FHH@DBD@HJJSLDHC@BNCDBDCDOCGFFDC@ELDH@BDHHB@DHFDDBDJFRFLBDCPAHEDJ@FjIHARARGHDVBP@@CDADEAGLEFBDAFBDAFB@AFAJB@AP@D@BFJFF@VCDEFA@CDGBCF@HEDC@AEE@EEC@CBA@AHANAD@LADJDDHBDFNCAIRHHCDD@DCFCJCD@FCBHNFFFAHDF@BBRCJHP@FD@DDF@BAFA@AFCB@LABBBAJADDFDBD@HHFANFHBHFBDH@NDFHFB@JAFFD^RBDJALD"],"encodeOffsets":[[128111,43499]]},"properties":{"cp":[123.921109,41.875956],"name":"抚顺市","childNum":1}},{"id":"210500","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DDJ@NJBDEFN@LFB@AD@FJHJ@DHDBABBBH@DCXEBBF@LJAFFDLED@DBD@BBL@@IDCLCHB@B@DDDFBLE@A@AB@DAACBABCREBEL@@BD@@DJBBFT@DBF@FBBDADFHD@DFVLTHPDH@FGBI@QKWLGHCP@PBfLpLVJDPALA\\BDNRjJDFGFOLOJAPDRJHD`HXCYRMfQRATBZF\\DNMFSPYZHZPLAbHL@HJJTRB^CPDLFHHVLP@hQtFPATIFIDSDIDCNCBCDCAEC@EEE@@GECFEJADAFBDCH@FEHACI@IDERCZCdDPKJMKKSKUOMMIKCMB]FOLONOPMhOB]FKDIhKNYDWDC^OXCXBHD@DQXDNXNJBXDZGbY\\IXCHELILORSTIPIVSNC`@`ANGASDKPKJBd`LTN@fET@jN~L\\NPPPHVJ\\HdPHLDL^FT@PFAFC@ADAFHZDBDHABGAABCHGFBHFBBFYJBHBHDF@B@DEBABBH@FDBHHCF@DGLBJIHDJDBFAFB@DDDCBBBEDFJ@HHDDDPEJBFPHHEF@HILABJFF@JBJ@HBFHBJHHBDLFBHABFBDDHBBBJ@RDHFPTJFFQVSfITBXEJCHETEzYT@DF@NAJ@J^BTAJ@PDNHXFJ@HAnYdEFFBHTFPBBD@DLBBA@CFGACJGCCDGPAFBBABCB@JBDDHBFAF@LFDDFABHABDFADDDHF@HFARMDBHCNCH@LALALBR@XFJPBNTJ``\\NHJDRHJBHFBLELGNOdERLX@FBDAR@FBDHBNJNLEHGD@FCAEHMECDABCHA@CRKRALCCCAOGCK@AEAIDEACBAJELCBGJEDEJI@ICA@GP@JAHBBALOFCEGBKAAAAAKCE@GFCDIEC@ECAACHIDIHBDABGHA@CBEEE@CAE@AJ@JEJAV@FBHABAFSFGACMK@MDGPGJALHVDTGbaFKAMEKIGWGFGLIDEJAACDALK@IGOBIHGBGDEBEFA^HBFJD@FJDREDC@CJYBGBAACBECCFCRFTBNIV@LDFAFBP@HQHABC@AGGBGACKEAGEEKSBEEABEEEFM@ODAFBHAREFCLAJ@LCPDPIBAQMEGI@EEGCCCAGIKAEBEEEKCGGK@EDKAEEAEICACCEACAEKECK@EV@HADAF@DAFAFEBEGGBEGE@KCIIGBCAC@EWSIOCACEKCGGOCGGAIBEBGIEDIEE@CDEACHMCC@GC@AEIEEBIFGAGEKCECCEBIKM@GBCKEEIIBEAGBQAcQOCBEDGCIACCDCAKPOLI@WIM]IEIAOAGBKH_fIRDJDB`PLLLd@JCHMFiAOCGGCGBETKHGBEAICGK@WHeJQNCJDNPPFJADGLCL@JBJAHGJGFQFMAEE@C@OCMA@GASFS@OFKBMCAC@EJK@EACIAMB]CIBG@EHINE@EB@BBDBFDDDNNFDFGNCBWECBEBEJGHOACCE@CDLJBHSVC\\ELGF]LEDADEBGFE@EGK@CDG@KHiVMBKCkUAAKFiFmGSI}OE@iN}fODA@EGMCO@GCGBEAIE@IEACCG@IACFGDIJMFQFUFE@GBIECB[DQ@GDI@GAIDIBGBE@E@GF[HeRYAMBYJS@UMQE_BMDODIHSTEBUDIKGAEEGCCGBA@IAAI@ACGEKEODKAKDGCAG@GKG@EAE@AAIFEEGE@YEACGBC@G@CBCDMBABE@ECC@ECEBOE@BGFG@MHI@KHCAIBECO@ACQGGDA@AAAEMAECAOECDIUOUGAMMMMByXQASF[JaPKB]KYMSQOEI@IFQTODKFIBICWQSI]CKD@RLrCNEDMDcBWEKOQICECC@GHGCCCICCBGCKFCIIAIAAC@CBK@IACFKDEKCAEKYME@ULojIDQCAEECGAIBGCAAHK]CKBMAECJSRSVmTQ@MDO@EJI\\I@KWaGSA_LKHENMDGAEACMIAOFK@GAGEEICOAUBYOI@GF@RSFJW@CCMEEBGCEBE@OBK@GDIHM@GMGG@EBASEIEGAEMK@OUI@ECEBEFI@ADGFGAIEC@CBIABHGJECGDG@IDIACCKD@DEFWLEJIAAEEBCAEBGLGBADABAAEIE@GECBCDSAOGCCGBEDG@CDE@E@AIE@ACI@CBKBK@CBI@AEGC@CACCKCKUAEGGAAIIAMEMCED@BBBE@CHAFBNCB]OQBKFGJQLAB@DCDI@ADE@MDGF[DIBKD_BPJTPJFFJBL@PD@RJJNBFCD@HJFHPHFBBJDF@FHBFFDCDFH@FLLEHGDGLJNDBDDC@@BCAAB@HADDHEL@HAD@JCH@DHFALJBBAFDD@AP@DBDAFBDAFBBAFF@JDF@FBDBDBHBDDDBBDDF@FDDABGFABCBEHG@CDE@@BCD@HAFML@RKFBHAB@FEFAFBHDFDTBDDBDHHFCJIDCJIFAFMDIBBL@HC@CDBF@FCB@FCB@DEB@BIF@DADBHAFC@EFUBEBA@@@@BECCFJFCHDD@BBBBFF@GLGLCDC@@BBHDD@BLHFDADBBLFDDAEHKJAXBXJ@CJHNDPHFDDJMF@FCR@FKFCL@LHDBDDBADABDJCDFF@DADAJEA@DIFBD@LFFABDLEBCF@DABDHCH@LDDBHCBCHCBBHCBHHSJGTIJETNR^\\@VGJIHcJeH@LCFKJ@HBDCBEA@FEACBBFAB"],"encodeOffsets":[[126558,42490]]},"properties":{"cp":[123.770519,41.297909],"name":"本溪市","childNum":1}},{"id":"210600","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@A@@DDA@AA@"],["@@@B@BB@@AAA"],["@@AB@DDBB@@C@ACA"],["@@HLD@@GCEKE@BDF"],["@@F@@@ACC@@D"],["@@I@ADJPLFCHBBVFNAJ@LCJGFIAGEAOBU@OCSE"],["@@CB@BH@@CC@"],["@@B@@CAB@B"],["@@IFCACAE@IBABBDJHHBP@AIFEACA@"],["@@@SCKB@@CAEWMB@QMC@CCCB@AA@KEMEAAM[E£YK@GN@PXvGJKWIME§SG@P_TOD_AcBsF[@iFmLO@Q@aQcAGUI@GBEFCPGJGFSJM@KCOKAMD]GKe]UMWE]AEDCDAJABE@ECEGAOEGECMAIC@CAAIBEHAFLF@RCJEDCHIFC@GEK@CCAUACCA@zATELULER@JFTGRQJQFKREP@JBDDBBDFJRLBDAHQNMTCJCBGIC@ECA@A@ADD@HHGD@BEAAFEABCGAAGEBDF@FI@CEGAACCFGBAFEBKHIAIDG@CKKCCACDADHHIFEA@HFJEBFFDC@HCA@FADO@CFB@AFMVNDJDFFHFNB@HABBDAJNL@FCB@HADDB@FRRBDF@BBFLDBF@DDJ@D@LBDDHBLCDCFAP@TACBCJEAKDCDEXCHQBTBHEFKAKD@@ADAFF@FB@BCBABB@FHBHDCLBDKZFFDBD@JHF@DDF@DD@DJBXH@BAFHDFBDFH@FB@DPBTADEHAB@FFN@BFADBDFJFDDABBD@HHHDDHHBFDADV`L\\ARKDYGK@WPQZAFNJRTHRFHBHFHHBBBDNAFDF@DDBFAJBBAN@RL@DH@DD@DFF@FNLHAJGH@NJBFDDH@PLD@DJJDBD@DBHFDHAFFLFPANHK\\@NFLPNDPX^RPZhP\\DL@BSNGNHNRNLNFLANCLQVAHTZHRAJCDIFI@GAGHABGAMDFHADBDCDDHCDAFBFDD@BAHIFLVEb@TCFEDKFKFGLPNLHVFNJ@JORIVAPGLKJ]FMJQJ_H_Jw`UBCDMAMAcKS@EFCFDHCDFH@FABAFIBEFKBEAEB@BBBABBHC@GAEHHD@DBBAFBDABDJCBBB@FBD@DHF@FNTRFJFFHBJAHEJKJe^QTGJULJHBHCZ@HFNHF~GPB`ALCJA\\CHENCF@BCJADA@CBARKHILERA^PDAAMBEDGF@AA@AFCNDNFJBBJHBFHVBDLDLBD@DHDBFJ@DAL@LADAJ@BDF@BJF@F@DCH@FCHADDPHTBDCDAHFF@FJBBBABCHAHKFADBFABFJBFIXKFE@CLCDDJBJCH@HCFDHIAGJBDAD@JFHBHEBCJ@FEFAFDJ@PVL@FNHBJFTFAB@FHHHNN@JGHCL@PAF@FAHDFANFDDX@ITE@QHEJ@ZPVAPBJDFFBH@HELBPNJBDBFCHMNGFKLB`HTXb@L[JIJ@FCP@NSRUnQTITFDNBLA^DGLBBHDJAHBFDBFRDJCpiVKF@ZNFLDBFLLCDEJBL@DAD@BBBJJJEDDLAHDDDJDDGH@HDDDFRJLPXFdANCFCDMKq@QLC^DTJXRJDJALEPCRSJEJ@PFTRZN^LLAbO\\ITERBzWNANNBNVHVPCJFDBPFDNBBFBBB@HCRHBDP@FDJADBLGJ@NGH@HE@APFFAFDD@FDF@BANADCDAH@D@HABDZFF@FHEFBJ@BBF@FLH@HBHHDLCLBPCLFHFBDJ@BB@JABDHHDFFHBJLVCFATSJGPCNC`ARFVNT@ZINAZBfQ\\GHEF@F@HAJAJCHBJ@HCR@\\CDAJFHAF@VERENEJIHCDEJBH@DDFB@JJFFBHAHDP@NDFHB@PC~ejMF@~PTJnHjELEBBlVLDNAjULGH@DCL@FHF@HEFABCFC^KHEFKD[TUAGKIDCF@DDPBHGDE@CBAF@DAZFDCFKCEMECMCCAEAC@AFAF@JMFGH@JA^DNAJBBD@FIL@FBDNDLAPET@TEHBB@DN@P@DFFNBREHEHIBGAI@IDKHKBCEIOOCMDIRMfIXGL@DHBJAFGHSLAFDHHHPDjBNEDG@IKcKK_OCACIJQLMNQHGJEPARDJFN^XJJ@PKLOBEAEKKCIAEBEDEJAF@pV^HJBVAJ@BDBLDBFBFAHANMHCZIJE`iDEDOSQGAI@DEACQUKIaOUEKMKUDKFG^KjINGJOAICCKAmBSAeEUCYHKHEF@B@JBRW@KEMIa[IKAMBQEWGIOE_D_CSFSCMGKMQIGGC_EK@OCAeAM@SEGM@INYB[CAYCYVW\\ODYKKAEAWMOAIBe^KFmKMEEGE[@IIMCEWC[AOB]DsKOGOGocuYUOiIaC_K[KWOSCOGaoFaPGJA\\BBEAGBAXABGBUAEWEOBAFDLAFGAEEKAGBKFEBOBKCOMaO_GY@UDKHCJ@TAJEDGBGAKI_mIIgcKO[M@CEECAG@]UQIKCQAAAGAA@BBEAYEgUKIIMGeAIEWGKGGMGMCGAABCC}WCAkOcCUCKEEEA@GGOIMEEECCQMMGKIQIEEKKYKQCECAAAADCAAECMCAEGMCK@BSSIKCKGAE@KEMA[CIGA@@@CAGGBCCGOOKOEEUASMIICKGGOQYMQMMMSQGGEMGIGOAIDMHGFAT@NGJKLY@KI]OSI[II@\\BFiOCCBAGGQIOAIBABE@CC@AAAGAGC@ADE@ECIAA@CBAFBJCCGGEAGEGI@QDIBeGUIKGMQCOGGCMCC@IAG"]],"encodeOffsets":[[[126761,40743]],[[126805,40737]],[[126567,40718]],[[127350,41055]],[[126729,40706]],[[126686,40700]],[[126543,40731]],[[126786,40742]],[[126798,40742]],[[127197,40842]]]},"properties":{"cp":[124.383044,40.124296],"name":"丹东市","childNum":10}},{"id":"210700","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@@AC@EBDBFA"],["@@FABC@KBC@AEDEP@BBB"],["@@FGNAJBJAFCBACAEBECADCA@EBCFAH@B@@GAAEAECICCGGGCIF@FBRDDAHEDA@CCAQCGA@ODCDA\\ACGGGAENE@EJ@BIAKBCFCP@D@DDF@BIMICGBAXINSR]AMAEACBGFIACHIAMDICEDKDEDMDECERBJC@AGE@IDMFEEG@CLKAC@EC@E@QJ_AgDcAYGCIDITOFKFMCS@GBKBA@CDACGZGACD@@A\\G@ANEB@@CDABALFDAAEBALACCACJFCGN@AGZIBAACVIHOCEVEBLNEBQC@@ECEHGF@HDLAH@DA\\DDAHIGEOIMEMKGSBCAEJGGGFWOIUEMSAUDQYOIAKLSBAgVEAEGEC@CABA@EBCCA@CEG@CBA@CE@EEC@EBEDCABCEMD@@AEABAAAGAECBAIOBADCAEGCFIJAECDCIEAEG@CDEEHCBACCBCD@BCJEAEGC[McOAgAQAqIw_[IcMQ@KDa_O_M[]YcGGOFOQEDQOiOLMqQECEGGEQII@@CAA@EKG}SCAWIGEGAUBCPGFSHCeDKI@GACGCBEAAWABAAAKCEDKEAEOIQAHGAECCCEFG@CQKUQ_PAVkXeAuEKGMQGEeC]AK@GHMCKGOSGCOBOC_U}]IGYKSIMGKK]Q[GMGEQAOBMBMDEVMXDdI@KC[EI[A}}GIAWXeNOtIvAzEbB\\JHA@BH@\\AFBD@@FjAGPr]GAAUSBAGD@HM@@FE@AEO@CDC@@FGB@BC@@CIC@CQADML@gB[HEDIRgAQCMMKCSCKBWQEKIACBOAEMQQ_GKE@M@ICGEICYMOQQSIOEQYQGBM@MCUFMLAJgbcFA¥JcJgNcF»]WGWCEGGaOQi@_Po^SFmAQCSG[iOKOECEAADIKOEEQCAAACTcAEG@EDIB]IMDK@KEUCcGbAHBJFLRJPZFFDLANDTINLB@JDD@BGBABBDICABAACHLFDCBFHD@FCDHBG@H@GBBBCDCAAACBGABJA@@F@BCGA@@F@@CMEACHEDBJG@BHJBDD@H@BC@BRI@BHB@BRDJBPHVFLDNNXBNALDHG@EGE@GEEAI@MMYCE@ADMDCDABDBBHEDKCWJA@IGG@CDCDGDCRHXAFFT@JITEXDPCBADCBE@EICAMFCDICCFG@AEEDIHEBADDDFBBDLBB@BFAD@BEF@DE@CBACEBECBFAB@DGCCBCFKAKJKECCBAC@EAACGC@GCAIBC@EE@CIGC@E@CAC@CF@BEFCBC@@DG@ABIBSHCHBF@HIA@DIDMBAJC@AB@FHLHDFH@D@BCB@DCHCFELADA@G@SQEAE@AB@DJPADGJWFGJKFKEC@KDGAK@CFFDADDDHBDDBAFBHH@BDBDHJBH@FDHADFHBHDFBFAAHEBBFCDBBEFMAAD@FA@ADA@EAIBDDGBBDEB@EC@GBADADBJDF@FBDD@FDD@JBBD@BC@DHLFAHEF@DDBCB@FCB@DCBDHADBBDB@B@DFJDFGJBDHHA@DHABBHL@DBDADB@HFBDJMD@B@BFBAD@DFDDCHDJHFHADBFFBDHJAJBHDDHJBFBBD@DAFGDBDCDGDAB@DF@@FF@@BBBFABCFABA@GDCBE@EDCDGFED@DEFBBBHJD@BDCH@FBF@BABBB@BD@BDDADD@@F@HKHCHBBBJD@DH@@CFALFBDCF@BCBAFEH@BD@BFEFBD@DBHADA@DHAHDFCDBJCFBD@DHBBBFEBBBBHCFBAGJADBDDFNCDG@CH@@BFFFAHDH@F@NADDHFDBB@DADNFBDVEDLHAJBB@DFDBBDABHDH@BBDBFAHBAHD@AFDBNJBBABHBDHJHJDMNHDCJEFBHABDFCHDD@DF@DDFAJGHHDA@EF@FF@DJHPBDCBAB@FFE@CDABNCJB@DJB@GFB@DFBBBDBFAFFFBABALFEAA@CDA@HBEBCDAFDCF@CE@AHCBBFD@@@BA@BDB@BB@JE@CBA@LLFHE@EIIH@BEHC@BDBABBBHAFBNCD@NFJLHCDC@AF@BFFF@DDDFFF@CB@FAD@DLBBFBADBDFDAFDHAHDCHBD@FBBEFHDDBDDDB@DDBHBPIHFBFDDFEAIBABAFJVL@BDDHABCBBD@@EDB@DFAHFDCHDFAHBB@FLADDBABGBCAEDLTH@DF@FEBABDFBFFDA@BBDJGD@DADMB@FEBBDEF@DABDLLHFHADEDBBBFB@BDNDFDF@FBHA@DBDDBF@HABBF@BFGDAD@DDBBFAD@BFHDBBDH@JCLELIpQHG@ADBBABBH@B@@BHCF@@BFBFCFBNE@KCEDCACDKACACMCEELOFCfKNAPDTJTJRB\\@hIb[FQFEAKDECEHBFADCBAHBD@FD@FCFBHDFBHPNPDRGH@JBHDBFANGJ@JIB@BBFJJ@ZBDNAFLFBRDFBBDGBHNDBJDFABABDFAªFrGLMLC\\BRCP@H@X^TVNHHBNIPGBrTVCRCRKJKVOH@HBHDBBVZTPNLSAWDMFEHDPJHJHLRXBfCFBZ@VLNLHBQHBDD@H@JA@BD@LCDDBBKB@FJAAFF@DHDCDFJEBHFAPFN@BBEBDDA@FF@HMDDJDBBED@@GB@BHH@@BD@DEDFD@BDDBAFHA@FB@@CF@NLJJGAFFCFGFFFBA@FDHHDH@TIJ@@FP@PDPJEFDHDBAD@BJHD@ZXDLADFDFKHFH@BBHCJFPL@BABDDFB@DC@@DADJDJFDAFDBBCBDBBB@@DFD@FDDADABBBGDBADBAJBBFHHDHABAF@DDDHDPEBBH@@BEBKJHHDHPEH@JCDBB@HC@DFAPBCFPB@BJBHCDD@DJBABBLD@@CL@IFDJPAACF@@BDBF@BCRJAB@DD@@ANDBBVJ`LlXP@XHpVTLRDXLXHTPFRJ"]],"encodeOffsets":[[[124009,41817]],[[123988,41794]],[[125365,43141]]]},"properties":{"cp":[121.135742,41.119269],"name":"锦州市","childNum":3}},{"id":"210800","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@@BD@@DBDFDPA@AF@BARBDDLF@CLCHJHDH@H@BHD@FD@F@@JALBHAF@FCLAZAVB`IDCE[IQKMAMBSTG@MICSSBAIO^GHADBD@DBPACONC@GD@@KACBCHAHBLCAABA@AD@HACECIBIBAEIHC@AAAA@EEDACCABCEOQMUEE\\@DAACvCVE\\SN@ZFENADEDI@KBG@gCEECAEGAIIG@ACIEACCAAAFGGEFE@IACBCBAJAHADEAC@@DBBGFDJHB@@DJDF@LBDB@BF@BCHDBC@C@ACGSGCGAGC@AED@BEACACCEIBECDGHAHGAABCCC@CAA@CACGACEACE@CAGAG@C@GANEBCFAHEHABCF@ACH@BSPAFJCBADFFHBJAPCBBD@HBLLL@LAdYJEJAZF^KZCjDLATOHYL@DE@CDAHGBMBEFA@AFBFAD@FAD@LAHCJ@JGBAHDL@DCJBDFJ@BBFDBBF@FFJ@@AFAL@D@DBLED@FCDABDPI\\YJA^KJGDIP[`SMIKQ@IJQB]EOGEKGQEsAICCCEEGYFYAIBKEMCQHKACBCACACKCAGG@@EKGIAIEAAGAIECCEABC@CKGKK@EBA@EBCCEBGBAECBEEE@EAE@AAECAAAFICEBGFA@CHI@EA@FGACFG@CJADA@OB@BEDCBEAABA@CCC@CBEKOECEAECAKCGIAICBEIGDCCC@AEC@EEE@C@AIIC@CBA@@AAGBC@E@CNEDMEAAAAE@ACGEAAACBIEIAIFKCKIAECAAEBECEG@GACBG@ABCFSFI@GDOEIBCCEEIAEAMIECGBMCGKAEIEEEICCEBIIE]FI@AAKAMCI@IEEBIEMDADICQAG@IAKBCBE@CECAMOUBMDEACBAAKDEE@AICC@@BC@CDEB@HCBE@ICOJI@AA@AGOGI@CDIFGBGLGJCJC@GGKGCC@CFCBQAGCAGII@IBCPENCNAD@BECSEM@ABAH@THDC@IM[BCTMBA@EECMAcFMAUKII@EBCDEDAEAA@KJID@DEBAJK@]JOHYPbBFCBQEIEEB@DBBCDCAGAGCABI@IAE@ECKDM@EB[\\SDO@mKSIQMAAC@EDEJGFADCB@BAD@DCBOJ@FDFAB@HDHCDMJGBALKHA@AEIIIA@GGCQMG@OECBK@BDCDAHKHCAC@MHBDEHABAFCDBDWLGBCDIBACC@ACQCADE@ADG@AHE@@DABODMASBCAG@ACICCJED@DADAHADG@ABG@CF@JEHOGEBOHCACABCECoIUKa@IFKNEX@HNJBJAHMXQ\\QPQHJLJ@D@^SLAJDJF^nBHERGR_AKBojQX]HJÔDPCNDTTFLGD\\DP`HrPRCJMPQFANBJHLNbZCBMBePIPJXZPXCbaXB^N@FIJIFAF@FHLJB`MN@BF@HAHKTIVATBFFFFDJB\\EZIH@^ZNRANQRBHdXLFH@PIDBBDAJGDO@SDYCGHSbDJ\\JAJāÌKNUhANBLJHZlDL@HAHIJL\\CXBJDJHFHDF@NCLGTSY^@rVFD@B@LAFCDGFQB£AGBEDNNDNAPEJOFI@SHGHgRjgPWPADBFHHz\\LHZ`HFJB\\KTCFAHDBDAJORELAHBRDJBDFDH@FCZ[PKPEJ@JTBBFBXBVJPBLAJIDCD@BBLL\\VPRHNBF@LHFL@HC@CEIAEDAZCBBBD@RLDFFADFDRDHADCFI\\B@R"],"encodeOffsets":[[125315,41901]]},"properties":{"cp":[122.235151,40.667432],"name":"营口市","childNum":1}},{"id":"210900","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DAFEHQH@FFNGLA@EBCZSRB@GCKCFUDAAGBKB[NAAOEEGKBEKEEEAIBCAACKCIEKIBKKEFAPOZCTIBGXMDGAOB@dBPC@BF@@BFBJCDB@AB@D@@@FBBCJACCA@CCHQA@DCAAjYJMLID@DDDC@ADFDAFBFADAD@TJRI^I@@FCKIBAAEH@@EDABCXG@AHA@ALAFEZGFA@IHEAAKAAIEBKQCAABGE@@AAKFmYKODC@IAAI@@KECBOACBAAAIDAEE@UDEDEAADU@yGQEUICAEABAN@@CC@CGA@EEBCACAAF@AAFGCE@ADC@EDAEIHG@ABCCCFCAME@EGD@FBBADDHKOCDACCDAAAI@@AA@@CCIHCD@BBRF@ABCACGCAABC@CDCBADCF@BADBHCD@DDBA@B@D@BF@NABDDBHO@E@ANGBCNDDAA@BCA@@CGKCKJ@CGJCL@B@F@BBDABIDKJICGcA[EYB@CIEAA[QWA_UKOCAkWYCKEAA[IK@OG@GgGIOMUIsUG@AACDC@CFQAAADAACBAA@GACFCACDEA@@CA@AE@BCU@FYFIEA_QGYG]KcOgSMCYMsUODEFGACDKMFCBCA@GAEDAAIBAABKFIQIYWGWKQCSKoUWGO@kW_KUIAAMC@BC@@CBAQIADE@CA@AE@BDOBCIJEK@@DC@AKBAIA@CCCGDIA@AOADEOAEB@CGDA@CAIDG@OFCGGGLIFA@AG@AAOFGCCC@CBEBACGGGAEIAABBCCAAHAACBCBECC@CE@@AACADAAAECCBIEICBC@CD@@CEACCBA@AOKIEGDAAG@GEELECBCCKYWC@IG@ABCCACGFEOIOCO@@EI@SJG@GCCG@EABEEHEDEEEHBIIMKE@@DA@@EGBBECAACC@CECFC@@AG@AGA@@HC@AFCACINC@GEEB@CCFAAAM@OEEBAGIFCECDCGE@BEIB@ELAAACCKDC@@AIBG@C@ACRGGAMKUKY@EAeDWAKQIGIGCOFGNEXCTBMKSOUYAAOEG@UPILQLQDUDqSAOHMJGAMGSUW]G@O@QD[AKDKNqH©EEBACABEBICCAGMHAACEAQCEAEKMBAC@YIIAE@AJA@IHIBMAEGCIAG@QHOCOMAGCEAGDE@EECC@GAEFEBGADFCFBLEFERa\\gJ[@QASISIOCMBeLEDKPFFNDBDBDCLBDCDDF@LMFEAEDEA@AE@GD@AA@G@AAABCA@BGHoRKJKFIDG@AFDDDFLBEH@DCDDDCHBJHJDAFD@DBBBHCFDAL@CBABDHAFD@BD@DBFDB@BBDFB@DNHDFCLCDBH@NMLeHUH[DUHWLQFIDGJAH@POfALILEJSHKFYH[@MEiIMGU@MDEBMDIFE@EDADA@ADC@A@@AABAAC@CA@BW@ICCDKDCPJL@JD@HNJZE\\IREVDPVPTJJ\\FbHJLHCTGXAHINAL@F@DIJ@DKNBDML@ZGJBJJTAXQVQJIDKL@BBADFHAHHMJbNPEHEJCH@FHHRVZDBXHFBDCDEPDN@BLRPDLNF@CACJBDAFDADBHF@@DDBED@FB@HDF@HDDBBDHBRLFBDDBD@FFFBFEHBHLFH@DBD@FDBDHBNF@DDB@JFDJDDCN@XDRFFBKF@DDBNGJ@NFFDTFLNTJHLFLBRAFRLCBGBEBCJHBHH`F\\LNJDLF@BGBAFBBHH@FANILCNABD@HADBFAR@DDD\\BX@FBDBENBBP@HEDIJEFBFAJFPAZHJHCDLJJJJCJ@PCHIBGDAH@HHBHBBFAFEJ@HIFDlLXCBCJ@RJ@DCF@BL@RJANN@BD@DLBBBDBB@DEBGCEMGDMDCPGFKPEHILHH@FIBC@GDOFCAIF@@EFAJOTKFBFDD@P@REVFPHD@TPJN@FXVFF@FDBFHDD@HFED@HDJAFF@BJDNDN@JHFLDFJFLJFCBGGK@EJATJBHDF@JFJAFJHBHFDL@FCDMDEHBJHBDANBDDDD@LGAKPC@DCFAJBD@DDFADBDFDbNJF@DJDDHDBDD@FAF@FDFADOHAFCB@BHDJABEBEHEJBFDAJIPFDHBFDMJIDEFCDEHDDVDHDBBADC@QBCCC@CD@DBHJDHAFGF@FD@DEFAHBFFHIJJFFHJHPIJBBF@FM\\FJJ@VAP@BDCPDFLBNAFCDABIBCNLDPHDRA\\IJ@FFDHVBXHBDAF@FXHF@REBECE@ABEJ@ZHFCHSF@RAZKNDH@DECGBAN@JCRCB@@FD@FABEB@DFADD@B@DCLALDXFH@BABCASDBJDDDBLAHDZFJAJELCRBDHCN@XEVQHMNERIBKBCFA`APAT@PCJAHQJDNBVIBEAIFCHBNLVF@DDBLBJAP@bBFFEN@XHNLFdNVNHJDJBPFDXHJDBFALEVCBSCE@IEOBaBkDS@OBEDKPGH@LEPETKT@HBJJHFDZBxDdF\\BP@VEX@vGf@HCNALCGTERI@AKS@AJKHKDMNENCJ@NEXEPKjLPHTAPAT@XFPCbH\\BDABMFKDCTGRBJI@CHCP@HADCLB@AHI"],"encodeOffsets":[[125737,43778]]},"properties":{"cp":[121.648962,42.011796],"name":"阜新市","childNum":1}},{"id":"211000","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@VFDFDJDDJ@HCHAPFNNFJEJBJAJ@NFFJFDJBL`LBFBHDFBBNFBB@HMV@DLFJLTDJD@B@DMLBDZBDBBFHDV@AHBJAPBFBFNF@HRPBDL@@CCGBCDAB@FJHDd@JNTAZHbDBNDBHJDHB`CJHHPJD@BABIFEFAJBJNLDEIFCLFJEJH@CH@BADBHCHFHBBBF@DDCFDBRCBBqLJJNJHLKAGDCDFF^MLRA@DDCBAEEDFHCDDFIDBD@PDDJFP@ICGGJC@A^MBHAFBBJCDDRF@BDFABBFEDJHDHUFCEDACEEDQDDD@DBDLLFDdBZHFABENKH@LDDDRR@FDHFD@DFNFJAFDFLHTBLDNBHDFFHB@DEDDF@FF@@DBBCF@BDDFBBDBFCF@DNHBBJLRLBFAF@FBD@AFDNIBAJDRIMSBAAEC@AICACDACKGBKF@BAE@CSD@@EGOB@DBNA@ADAPCACBA@CG@BAACF@ACDC@CBBDA@GRA@FH@@@TCJJ@BGCDFF@@DDADFDADFPCDDD@NGJHIHAFDBDDDBDABDD@FHDA@A@@DDD@B@VB@MR@EEHBAA@AJEBBA@FCEEFAACDCAENAFBHCDBB@ACDBDFBA@@NCDDDCZAHOGAJGDBRALFBACCACPALCBEFAFGFABEJ@FAF@CFHBAD@DD@DCFADBDAJ@DCRFFEGC@EDAHHH@NC@BADL@BCCABCBEFCBCDCB@FFB@FEF@@@@FBDB@@EBAHHB@LE@@EC@ADCF@@ID@JBD@@AECACFAFBHEEEDEAEB@JBHGD@@FLAHHBEDABCDFD@BC@DDA@ECCDABBACDD@CJ@DCBBD@BD@ABBBAFAFFPZH@BBDADHDBD@DCTBFEJJB@BDBBHHJABCD@BAFCBELCDDBBH@FDJBFFD@BDHBTLHENCBAAEDAFB@EFBDAAC@GLIDE@KfGVENCJGHI@U][MQFSJIHSTIGGDAAGDADGDAAGCC@KDGCGBA@CDEFACKBAEE@KACJE@CFBBIBC@CEEDCCIBABCCAACGC@KDKLE@EDQ@ENECIECOGMCIG@DWIWAIBGLBFCCKEAABCECKG@ACCAG@AD@DCHKHKE@AEAA@ACCDGIEDEFD@A@@B@FAVAFED@BEAGBC@CJE@AFA@CDA@EDA@EAEDCD@@GAKJANCBEJEDIJCDIGECGCAACCSCEAGBEFE@EBAAGLE@QNKBE@GDC@AF@DCH@FGDABAHEBACC@ECEACCACCGACACAEAE@ICE@BEAABEACBEAC@CBOC@ECABIABKGE@CDG@IBC@GFKCGBC@GBADB@AD@CCCAIMHKHCFGKK@EEGDCECAEEGE@ICAAGEGOIE@GDCCGCCCGKCEEC@@OAKEISKIIOIOA}HGEEM@GDYAGIGqUSEWCa@SCgKY@eHGAGGQ_KIYMiB]IY@@BOBIBcOSWGEMCeIGCEIMK[DaCYKq[aTUFECIKKE@LKNUJQFSN_^KNKRCRBJDNJHXLVTDJFFAJaNIHWHeGGTHPDJCBGHCRJPDJ^RJJ@JAHOVKLNDnFNLBP[h@PBFHFJFn`NBJ@FGPEVEDAVJV@LBBALAFCHD@D@FCBBFVJDFBFFDABLL@DGFADGDCJCDBFHFBDR@DFH@JFJ@FBFF@@GDGH@BAFDH@BFD@DABC@IFC@CFEBEDMDDLDBBFBBEFDHADEBC@ACABBBCCEBCHCAM@AFIBC@GIIAAAE@EAGBGFADCDUGGJLBALABBDGRFFFB@DAFGBADC@@FDBD@AHD@BBABD@DBBFAB@DCBC@KFC@@DCDBDG@@DA@AD@DAJKDE@ABANGBEAC@GCGCECKDI@CBMBGFICCBKACBDDA@CABFC@BFEBDFBADDGDHB@DCAG@@FGDA@ABI@@DA@KBACCBAA@AIA@CEB@DIBAEGAAACABGEAEADGC@ECEACBGCCBGACB@BBFAF@DI@FH[DCAMOA@CEEBCGCBDBBFWFABMI@@BBEBB@CDECABCAGDECCCGD@CC@@CG@BFEBAAC@@CC@KS@GCEAEK@IISHQMPGAADAGKADCCEID@AAMCCBMKHAACB@AEIGHGB@CCHEEEHEGGABEAA@AACBCECCBGEEEDCEGKBCAABE@EBAGDGECB@DBD@BA@ECGBOFiJk`IDOFFODKFGJOLKPgPUFOF[VOHSHIBKJHF@D@DGDAFEDADDBJBFDTFF@HCF@"],"encodeOffsets":[[125566,42189]]},"properties":{"cp":[123.18152,41.269402],"name":"辽阳市","childNum":1}},{"id":"211100","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@G@ECACCIAQBGFKPQBIACGCEBSD[LIAGEY_KGy[GGAEHGRKhOihQHGTGJ@PEFIBOCMMMFCHABhAHEDCBE@MWK_M]@ZSTKHGDK@GCGECIAIDWK[E@YIUQqMC_Jqj¡CuR_~KVnDVENKFBcFfONCHANFHFDDBCHEJEDSFMJKbG^EFOBWE]QaWQMACBWAEE@EBMREBAAAQCK[IgCIE@GCCSC@YFEH@JKFi@[GQ@KAMWYOICG@CBAFRVHP@DGPZRFRJPRTPRJFZLHFJDN@F@HLR`NRBFAPBDLJRFAXDLDTNLDNBRQhCJGFA\\hK@CNRB@DJD@DD@@AHA@ED@DCP@BFF@@EN@@GCBHTABVHBq^HOiB@EC@EA[BG@@AGB[IaAyFuBsJMPWfBXHJ~~\\BFJD\\@LcJWCUNCFANANBPFRNH\\H^RLLNHTJZLJH~^`VPDPAHDPTLHNDHGL@^BfDHFNRLHvFfBlWBU`OVRRL@DEHDFDDBFGHRBPJBFLFFCLDBBABXBBBAFHDBD@HLJfCDTGHEDOVAHBHFXJDB~TLH@FBB@DJ@RJHFFHFDrRKNjPRPFCPRPEHHJNLCOQNECCHCIMHKA@dkX]HK\\[\\OjUBAEIDC@GFCAACA@GCECCGA@ADGBIOUEcMOEKIaBeKMKCOGkGGETMX]PEhIXBRURJNG^LTE`JXGVRSLfFJHFNbNFPPPNPJHLKRIBZhE\\CLPdAPGIISGSSccWCiAEQIGKEQ@YIUQCKDSHI\\CAwLOLIASBQPONEHMC[B[EQCSDSHKRS]kEACBKPCBE@EAAC@SSDGDEDKNEDIAGC[UCIBCBAH@LBRLH@@CKUOIKAKAUFEA@CFILE\\GFC@EACQEEE@E@EJQAGGCI@IFIFE@CC@CBCPIBCCEMCAA@@FAT@DADE@I@GACCAWDCB@BBDFJ@DGDK@GE@KAEGMOQ[UKKEAMNKBOAUIWAEAAAGQECEBOFOLY\\ED"],"encodeOffsets":[[125119,41859]]},"properties":{"cp":[122.06957,41.124484],"name":"盘锦市","childNum":1}},{"id":"211200","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@VMPDZKFFNGBCHEECNIPEGEIMOI@EEE@EDICAAABCAA@CCADCBEAA@GREFCDIXEPCDAH@B@HKLICG@GCI@GCAFCXCHDJABBF@LCJGNEDBDADB@ALIXIEERKbaNOJEFAPODBROZQVNHBRBTF@FDDG@AIQNDFIBBADH@DCHCKOLKAECA@KCED@@EHADDLAF@@DAB@@D@@AF@CFBFB@DA@CDCFFLC@AF@FFFB@AECACHADFD@FCIABCJBLGF@@B@FBDLCCA@EDAD@@BFBBALFBA@ADCBB@DBDF@DCBFJBABBDF@F@JHFGAABCCA@ELBBAECCCDCDBBDFA@CDCACBAH@FDDCLAB@ADB@LFFACGDCDDDABB@FBDD@BAAABCCCDAFDBCDAJFF@BAAABEF@BBF@AABAE@BGAADECGBABEDEFEAACBGIBAGGFGAADAAABA@CACCAIIHCJ@GGJCCCHCCAbOOGDCBBPILLVMHALGJOLMPGRARCRQTOPQLG`OPCAABAFCBCB@¯¥mMMJEHGJCBCNI@CHA@ADA@AF@DAD@FEPA@AF@F@dB\\LDAJ@BA@EFAFIH@RMBECCAEDCAEBIOICKICI@ECIAAGI@GCCBCBACCABEAAKCGGIDABC@ACKGACKCAAFCAIAEBCFACKFCvAHCFDHAL@HCH@DEB@D@HJFDLEBC@EEKBAF@HAJGBACCFKDA@KCK@ADCAABCCE@EACFEVADDHDBBBHED@FEJBDCHHFBDHFHBDFJBPHDADCACF@FDCFBBHFJHF@BDFAF@BCF@PBHGF@BDBDCDHLAHDFXHPADHNH@DBDD@HABFNDBHDBFFBAFJNLDJEHLL\\HBBAFBHN@FBDFJF@BE@CDABBHALBBBFPFJBJAHEF@DFBJCFPHADH@ADBHLN@JBLCF@NCHBHDDDB@JNXNLRHBDHDXLZ@RCTDDDHDBJ@FDJ\\RLFLLDD@TBDLDF@HFF@JIJ@PFHHNAXHRGJGD@NBLHZTL@HED@BCCEBE@IOGIGACFC@CACGEJMBSAEBCHA@C]SKWUEBMCGLCBE@ACAQDM@IEAG@CJAJSNEDE@IFC@AIADGFA@CAC@ABAF@FADCBCB@@CE@ACDACC@EBEFAHGAACBAA@EG@ACBADBF@@CEACAH@FCIC@CC@AADCAAECDECIHCBACADCAE@CCAC@BCACFCAA@CGAEEDECCBEACIA@EECBECC@CF@BAACFEECICBGACJEAAC@@AFABCDCAABEEEDEAIDEAA@CBAF@DAEGBIAABCECBCAABCACDA@CBCBEDA@EBCHEBQFEBGDCLALDXEFBLJHRJDAF@NGDLDPCHHFAHIFA@ANADCDENBDAF@FAN@JEBGBCAEBACIHGBCLAHCFO@IGKEAABE@ACDEE@@CDAFBFARMEEBGGA@EECDE@CGAEDG@KIICDCJADC@AIC@ANG@EFEJCFKGQGAMC@CGCG@CC@AFGL@TD@BBBRAFC@GRCTE@CCA@CFIFABAKOFC@CGGEKJEBEJDJIF@@KBARADBFBDFLBHFHAFED@DBDDF@BDTBLAHCLA@EDG@CBAECMEAAHEDCBACCSKEILGBE@IFICC@CGA@AGC@EGAAA@ABCCODKAEAAI@GEBCHERGFILEDICCEBI@GEBGAAKCIADA@CbBPKFADANC@GJEACAC@AKCIBAC]QECBE@IEAEGMCG@ACGEGAMEEBGGC@CACEBCBIAABA@KDABEB@BE@ACE@CECO@IGQDAAE@GCEBEEGMDA@EDCDIDE@CCCGDQGBJMDCEGACCCIKBC@MBGB@BAB@DFD@FFF@BCDGFE@ADCH@DEBCFUDE@IEAEC@O@@BIAEB@BEACBEACBEAKFBHCFCB@DO@UAGCQHQBGBiJ@ECIGFOBCDKAQEIEACCCGE@CGACG@ACGFKD@ECHEPDDCACDCAMD@CGTKII@GAC@CGG@EICMCOFGHE@CCOEEBOAC@KEACCAAGEGGBE@CAG@IAC@UMUBCDG@ICG@EAI@CAE@EBEAG@GHK@AHA@UHBDAJFJHBBB@FB@@DKDCAEBICK@OAWLOAGBCCIDEG@G@ACAFWJQCIW_AGC[OYOIQMQSKGGGCGPgBMFORSFQJMPMRM@GAIOQIEGKCKNQDGEGMKikKEaI¥WSIEEWOEAKAEEA@@CAAWEEEMCGEGBKAECIB@AAEAGHEBAEACASGGEGAICIPM@UAMAEAKIKAGCO@MBBDDBBFCH@FABDFFH@BCBCBEHCBAD@D@HIFC@APGVUDgQYC[AQFMBkGKDYNUHoFSDYB_OWCYM_WEcEQIIIEK@OBKAMEWEcA[BUF@HNNAFCDG@G@SGGAGBCFOFEFGDGCADI@CDGAABGBIAIGoIQA_OGASMIGGKGGUIABUFABBBADGCC@ADBBCBAHKEAB@DAFBBB@BDBBAB@BA@DHCFNFFFN@BCJEAAHD@EHC@CHBBCBBADFDBB@CBD@DDACCBADFBA@DBB@BH@FRCDEDCHDDHFBDABBDADE@ABE@@DEDBDADEBK@EKCADGAABACAAECAAGCD@CAAAFA@EFKBE@CFC@ECCBABBDE@CFGBBDFFCDEB@DGDE@EDICEH@FKJE@EFIBEFIBA@@BC@ALK@EFEDSBE@CBE@@AC@@AB@E@ACCDECCBAAEDACA@ABBBGAABC@DDE@EFA@AAABEAEFE@@CE@ADDDGBDDE@@B@DE@AFCBCBWHADE@KHE@MHEBAAABE@GDE@CFOHABG@EFADICSHBFCB@FCBDBDvCAG@_TIDM@IAOIIIICK@QDEAAHDDCDIBBHGD@BEABBABBDGB@FIBDNB@DHD@FJH@DTXFQbJTB@AFFBBDH@BDEBDBDDADDD@ADDFBHCBAHDZbLLTpD@BdK@@DAB@FEBADA@@BC@ADCACHA@G@@BCB@DEFAFCCSBIJ@HEBEDKDADGF@BFDBHAB@DFBFJEB@BFL@DFDH@ELEBADIFC@@DCDC@ADBDCFMDAFDDEBBFFDBBHDJFDJHDAHNJJAJBDCJ@FFPFF@@BDHDD@DDBDBDCBAADBBABBDBBCAFJB@BEB@JDDIF@DHFDFFFBJAABB@D@EB@BFADB@BB@HJJDFEFHAB@DDBFCTCBFBDA@BFCBBBrEP`IDDNADTCBHD@ALHCBBA@@DAB`PLABAHA@BH@ABPADGA@CCFAGID@AGBC@CHCGKCAGBAENADAH@BCBCNBFIDAhhVNHCPFFBPH`BHHFH@DAB]JEAGICAI@GHFFDD@DCDIFYADJ@JCFG@GCG@KBGZDDR@B@BDAFIJG@KAQAGBKFCHGLEBQAAB@DDBHBRH@DBBEFIDWJODADWLIJCHFF@DHHAJDHAHQFGBE@GCCEAIAAGGKCCDELEFKDFHB@JEB@DDCJIHYHCDADBBJ@NHDD@HCDI@IHCJSP@B@FLHPRFTFBHAFBBB@NGDGHADBFPHF@TEHBBD@HUVDFHBDFADCBADBFEHCFAJDDEJHFLBJFEB@FIDIJADDDAFMBAD@FNJTNBD@D@BCBYFIDAFDBAHDF\\N@LD@BBCJQDIFCD@FHNP@HBHJ@DUTIDGD@HCFO@GBGBGFEBILQ`PPR@HFEF@JEDBFBDAFBDDBD@BIFADDCHBDF@P@HDDF@BIDEDBBHFILBND@FGHADDDLDBHDFDJBHHADCDQFEDAB@FBBL@DBBHDDNF@FBDTDDBAJFDDBEL@HADDBBHDBBLCFCLDBBDF@FBDFEDCN@FBFNDDDBJDD@DHDDF@FKJ@F@FDDDBPCBFJDFDCHDD@FGHK@GBAJKH@DCF@JHHRJF@FAN@JDBDADIH@BGHB@FDBDFBBDELGJ@BGHAH@FDFHDBBL@FBBDLHD@HGLCJBDD@FMBEFDNCH@DJFD@BB@DEH@FAB@FD@J@T@DDDF@FABOAGDCDEHBBPDFFBDCBK@EB@D@BAFDFHCFBBDGJ@BDDNBDDB@WBQEG@ABLFFJ@JAFDF@DKBCB@FDDR@BBCFABKBABBFJHENJ@FB@BGFBBHFCHFDFAJJJBPCBB@BI@CDABBBBBHAD@PPHDHDIDCDDBJ@@BGFABDHJB@BAFDDBJMHADBDNBHDHJFAD@DFHD@@@CDCBBD@F@DADBFALNAHB@JAPK@AA@VI"],"encodeOffsets":[[126787,44522]]},"properties":{"cp":[123.844279,42.290585],"name":"铁岭市","childNum":1}},{"id":"211300","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@BHHJDBLBdCJ@\\DVFJVBLJHJABM@ECGDEDCFCLDFNDJGTQ\\AJDDLFDDFRkVEFAHJFZ@vJTLLJLCJDDD@FED@LCD@D@FF\\FJZRTFFHBN@LGXCHN@BDCJMNGJEACDEE@FEAAB@FBF@FEBGHI@AJG@BHK@@BJHGD@DLDMR@BBBLAJBHCVDHELA@DFCDHRIF@JJ@D@FGHIJRBGRWFKHWBMNMBCB@BCBS@IFIDCBEDCBBFCFEHOJAHIFBBDD@BG@ADC@IIE@AHCHDJGLBFHFBFCLDRSXBHCHEFALBDJJBFZN@HCJILC@MACBAB@BJFBDLDBLDB@DFJCDEDSHIBIHENFRFBBFHDJFNJBDDLHdEF@DFJNT@DAD@FFDFFFN@FMJ@LCDCH@BLHHHFPEL@DLNDD@DADEHGDG@EBEHBFHH@DDDAJBJCLGH@DFJFHNDDFTNJNJHNVJJHJDJ@HBDALJFBHAJFF@JGFCB@H@JDJHFBXCFIFENBDABEDGAGDYVEBaAOCSFILIFAB@RJL@DEFKFSBEBAFBLGHAJGBEFDP@DCBMBEDaACD@DADKDED@DBDRHBBHXBDd^FHDHF^BFBFHDRDVBLFj\\LNBFVLPFN@PGH@PHPHFBnDFFHFTBDDJTDDXDVJhTJHV`DRBTBFFENCLKTKJCNKLFDCJ@JCPANCAEDCAM@YIEBACEECSCBCFGGCSSBECAEK@EDCPDH@BIB@FA@DFAJJLKEIJERJ@EBEFCJBdC@@GCLGBEDE@MFKF@FDBAFDHGF@DAFGDCBA@CDALAPDLCTDFEFDD@BCF@CCHEHCJ@HIFBDIbLDCEIBCN@JDDAFCJABC@EBC^FDALB@ACCJANFNELBBB@DBB`CDJ@FCFGBGBWDUAMAKWcGGC[BGHKDIAECEBUBGDEFClWLKHIFMBWDCHGVCFIKUBEFGHEPIRCJKDQAICEAEDCBAbKNKHKDKBKAGHW@EIYCCBEHIFCbINGJKDGBKAU@GFGBEVKFKRwFID@@MBADDTDNHD@BFDDDAACMMDODEAEDAEIAE@QAAMC@ABAGCFCHADBBGVBIIEC@GMAAME@FECAE@ACBAHEEEC@AEIGBAJAIAVSCK@EBCBCAGB@H@H@NGXERGrALFFF@DFFFB@DFFLDNJJDBFJFBBMPMjAJDLDJlhTVJLPJNNJL@`JL\\D^FJFNTZPVVpAZEHJNBDDIFGLIDMBGAC@SFGFFDNDELDNHBAFH@HGBITDABKBGLD@DFDDBHTDBADGHFD@AGD@AECEIABCJDHFDFDFLB@JOFBHCHBDHHHBHFRFJFCFFFAD@DEF@BJBJCH@JDFBBFFFL@FFFB@FHBdORCVAVDB@CF@DABQJNDJFLLXALJJ@LH@BINDPAF@HAH@DCPBB@JBBHADBDADBH@DFL@LFH@DBFBHFDHMRGJLABBDBF@DBDFABIFC@ABCAGEC@CAKFIHCNLLRJZHjXTHXJ^FRJPHPRRNfKNG^ETJbVdNjVPTtLXVHNPDP@`AREZA\\PbDLFE@HHGH@DHLDLLIJBLDFCD@JLDBDAAEBAFAHDB@\\ONAB@BDGBBFF@DLEABHEBAHGHBB@FDEDDADHBRGN@FBHFbDHJBB^GJ@JCFEAE@ADAH@FEFALBNCPFDCLCT@DAACIEDCTKRCNOJCRIRUBWISAIHI@YNKACLM@CJI@C@EBKJMBGHWDSKGGIEaI[SIUOCOFUJQF[IYGMC@@IIKDOLCDCJDX@@ADBD@BBBA@BB@D@BCB@BCFCF@JENCFANCV@NHjJNF\\@ZGLETGFIJKBKPe@OBGHIJCREXKVG\\CVGfGNK@MAGDCDKCEMG@CEAAC@ACAAE@CACC@BECGBADAK@CBDEAGAA@CECCBIKBAAEDGCCDC@CFGKACECCBEACCAEG@ABCAECA@CFEDAAEGAGBE@CAAC@CGBEAE@ECMCACA@AEAAFCBCEGKGCKBA@CFEACFA@ENABC@CHCCIAAB@ECAECEBAFA@ECEG@KSFCDBHABACABCEKA@GAEBGCCDGEEB@CCA@FC@AAADGBCC@AUKEIABABBJEFCCAEGEOJGACA@CCACCCAGCFEAA@EACDGGCGBECCBCECAABAEKA@CBC@EDAE@EECC@CEEAEE@@BCDGDIKMEC@MDEAGBAABACA@AGDAFG@JJ@FGFKE@KAB@DIFA@@ACA@AAB@@C@AEDABGF@@DDEECCBADAF@GCB@DBBEFBKBAEAEEEBCAAAEA@CEA@HIA@CIAMDBADCF@EEA@ABCDOAIG@CEEE@@FCBGGIHEBCCE@@CCCDGCEBAAGFEDIGCNMICIGCGGABAAAMICABEC@BGGAEBCAAAG@GCBAACCACEA@IAGBCKUFACMEBC@CAAECCGBC@M@ECGBGEEAE@@DGH@DCEMCCCAIBBHEAGDAAAAEFAAGA@CACDEAIDCCEBGCGB@BCAG@CACFEAEC@@AFGBEDA@ADEACKEEB@DG@@CICAAGAGDGLE@@@CCCBACC@@AAABA@AAE@EDGACC@GIAAEACFC@EFCHCD@FAFCD@HABEBADGB@CE@@EE@@CBAJCBCACHCBEAEECIACGGCIAIBCGEAAEBCEGIGGCCDEC@CBCEA@A@ANCCIEA@GCACBCAK@AGBACGB@GGACHICEEI@C@ACAAABCCGDA@CDA@EDACA@CFEBGKECGD@@AACIAC@ECC@AC@ECEAIBEJCD@@FFAACHACCR@BCB@@EBCNBBADCAABAB@AGFABGEBEAGCGACEGBECG@IACGCA@AGGEAABCCGACCBCEC@ADCL@HBLCD@LFLEHIRCJEFIIO@ABCB@JBB@SGGDC@KHA@EDCA@CIAGBEG@AIC@AQ@CCIAIBQAADDLHHCB@DYGCCAAAEOEAA@GAAE@ECI@GFED[DGA@QCICC[GOEEKDGACBA@KCCCABACA@AEAAECCBCAC@GAA@EBCCCCS[EqGWGKBKGAG@GB[CGEEICMB[JGHCJGDCBAAQCCBIACBEEE@EG@EECAEEEA@GACK@CDABCAC@CBQ@ACADGAKCEBA@IFCCG@EDA@EBAIECBAABCACFA@EGEBCEEE@AA@Gg[KOMCKAGBEBMPITK@YLKHODADGB@FG@EB@HIBRJB@CBGAE@@@BDI@DA@EEGCB@DG@AFE@CCEBAABCEEOGGEAEBE@IAEAAOAIBA@CIDG@ECC@CACCA@CGAAEAA@CCASFGCK@BCED@DCACB@AADC@A@DBHB@B@DCLMEMKG@CDGDMBGBCCIG@CEC@EEE@ACC@KII@CCCOAIBGAMDGFAFAB@BCFBDADBJF@DFJDEH@FLBFAJ@FBBFDBDF@FCFNDDDFBABADFHEJDLCBADENIBIACHCJMdI@EAaaGEG@EHMfQfOZCBM@CDBB@DDBCBBBRNEDBBAHC@@ACD@FCACBAA@BC@@@N@ADEAABGACBEAOFGBCBEHCBADABKAABSBAMCACECBGBIGECIAS@ECEGC@GAABE@CCE@EACCG@AEGGACDC@CRADC@IBCBEBC@C@A@EF@DED@D@DEAADECIBCAADADGCC@EDAAEBABCB@BCD@ACFAGEAECCBCOGAAAADECGE@GCCUAADEEICCIQIIOKGISIE@EBGHGTIHGDI@GCKQGEWEGGEMAIEABKEAADG@EDEE@DBDIAEBKCMAEDE@CDAFCHGDABIBGHGACBG@KAAD@F@FA@UEEEDK@EBAAC@KFMCKHG@EBCCCDEAAGAACA@CE@GCEIACAMAAOAEIIC@ODECBGACECEFGBABAHKFIBIAOBEFAJCBECGAACIEU@EBGAACAIEGACAGBECAC@CEIAAIDMbFAOIEAE@CKKACIAEEBCAG@ECEACCC@CCAG@CDKAIFADCB@DGHDHAB@DCD@JCBC@@DAB@BADADCBE@CDILAHABWHABQDQHCCEA@COMUKQIG@ULYT[HKACC@GBODGBECGEGKGKMCKEKCUEGIGGACEMCI@GAGFUB@CIGC@EEJCACIEGIQGQQKW@G@MCIIOQMaQGAG@GDO@UCICQKGCYWS]_YKEACKIJ@IEBEAACAEB@CQCIGUFBDAFKLCBG@ECCI@CEC@CMIGKAFGHEBK@_AK@KDSHMASMKCIHB^GB@JKFAFED@DDDJDBDPLHHRJLRNXAJQTUFMCIC_USG[OUEGAIBUNEBIBMCMOIDG@BFC@CFBHENSFADQJCBO@KGCAGD@DEBGHE@EFEBCAAAC@AJA@GHGDGFMHADIFCLBDCB@FEN@HKJE@EDI@IBKBCAGBGFUDWEAHDDF@FD@JJH@LFBSJOGEBGHCB@EGBCDAJADIDE@ADC@EHAJYE@HCFCNBPBBFBDF@JBBBBDHADBDF@RLLB@DCDDF@DHHFBBHBB@DDFBFBDCHFDBHDFCJDH@HDDC@AD@DBDAD@FCFAJADFBLABBALFNFJCHB@D@CF@FFL@FZHFFADFETGBDPCBAAEB@TCVDHABDDALBBEHBADA@B@DA@@ADDBDAADNFJBR@BJFPBHTPJLAHEHED[HJQFKLCBED@DAD@DGHFNCPFBBBJHFNJFJDBFFFDHHADCJALDJ@FEF@RGL@JEBBLANBFBDB@CECDA@CJBHDFHDJHHJBJEH@\\NJJDNA\\@RBTBFNJNB\\BVANBTNPPPVNLbNHDJJFJDL@HGLGHKFQFCD@FBDHFzANBJFBFDBCF@NAJN@@DBBA@BFDJBAADZ@BB@BHHCDJFBADD@DLNBNAJCD@DKNAJ@V"],"encodeOffsets":[[122102,42307]]},"properties":{"cp":[120.451176,41.576758],"name":"朝阳市","childNum":1}},{"id":"211400","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@CD@FJFH@BAACGGEA"],["@@EBIBEFADAH@FBFHHDJDBV@BB@FCH@D@LBBD@DCJANFBFID@FBFD@D@DID@FBNMNADIAMBGBGAGCCECIA_BG@EASWGC"],["@@DABEC@AD@D"],["@@DPFDB@DEAMGCC@AD"],["@@AACDBDBADBHC@AI@"],["@@EACDBB@BBDD@BDDCCE@E@B"],["@@@IAEMK@A@EHGVEFALMDM@EACYIEKCS@MDEBCLAH@FF@DCBAB]BCLA@AAE@OAECCEAuAKDIFKBEAEACIKGCICAQBMAQQCA¥CGAMAOCGBI@IDC@WCICICKGCEBKN[@OKQCGASA]CMEKMMaWw_iGQ@MCQYMOCO@cIIICwBOCYKCGAEB[AID_CKQSUIAE@INQBKBOCOEIGG[SWKUKIIMISAUHmA]MCKKCICQGICKG[KSQUQMQG]C«FYC[Gĉ«c·[wkUA]DaDÇcqKyEcIKGCCEKAICc@CMOKIUOIAYAS@uDUACFBDGLI@DBADD@ADMDDH@DD@HJDBBDABAABDDBAFA@@@ADLJABQHKLEF@DBBABOC@BGCEDGH@CBCEDAACGIABAKC@BEAA@BAGCAF@AA@CBIABDIH@AE@FDC@ABGDAAGCCJG@@BHD@DKFEJBDFHBJLHBB@BSFe\\MLBDNNX^@HHHDH@JEJGFDJ@DGPAFAdGVCRMAECCIEF@FWADIGGEBGDGLUHg`DHGREFMACACA@AGACEG@GEMBADMK@CEAE@CDADFBBHDD@DBD@JDHBFHBDDCDBDLF@DCD@DJDJJGJAREDCHE@MHE@AD@DGBCBMbEFCFQLGJAD@NFT@HSVGPJdHNJN@PEFAH@DAF@HCLDFNLDJBJMVEHIDI@GBGFCDGVGJ]RCPBJFF\\HFFDR@FAFCDWNaFGDC@CDKIOCGDE@GBBHIE@BEDAEECAEIGAGEABASEiBeJYBSEaAKAEBYDSAS@SC[G]@SCWBsHiRpCDALBHBDPJHHFPHLNJ@DFDBLDDLBDANM@CACVEJHRD@DFADBBBAFJFI@LJBDLF`ZT^ZXHDRLJD^DH@HCH@^LVPHFJPDJ@N@HLXRRRHHJJFBDIDFFD@JH@DVAHEHBJ@NDDFHBJHFHDVFLDLLNLHFHDHAFCHAP@HDDLB\\GZSVKH@RJVLPN@DFBDDRGRCBAXGBABGJKDCF@DABCBC@ABA@CD@DA@IDC@CBACGHG@CDABCJELBDCH@DB@DDDBDDF@FBHADFFJBBDLL@DBFJFBPaECNBJJBDFD@DBAFBHBDFHBJBDHBFAV@JFBDHBFDDABIFEPAJBJALEBGBAHAFEFDBDAHFDPCD@JJBFBPNBDBJBDF@HDFB@BDHBBBCFDDAD@FGHDLEN@LBDAB@FCLFFVFB@@E@EBCLBH@DAHBHGJABAHCDGBEDCF@FCNBLDFAJBAC@CFFFCH@BCFBALFBBJFNHHXFHFLRHDJ@HCJGHSHGFAF@TJHJPLJJJRDDFJCFBBDVHDF@DHCFBBBBPHADDDBFHFEBBDC@ADA@ADABBFCB@FDDCHCBBBADDLELC@C@CFE@@F@B@DADAFAD@JCDQB@DCDBDHHBFB@F@DDFBF@FFFA@AHBD@FHFDT@JBFDJHHADADFDBBNTABALBBABCDAFGLCPEFBDAFBDAFBBCM@@@D@@ABBDADB@EDC@BD@BGAAFCQMAADACA@CAADCN@DAPYReNeFGH@HFbbFBJ@NcDIDGJBJAFOFCCKFIEGBCBAEACCMCDE@ECECAAEEAI@EBKA@EFGICCEE@AC@EBCACDE@ABCBCVIHBJAPBDD@DJJ@LDD@BFF@FFD@DJHDDHANAHCDCH@NLNFDK@C@AGACAB@D@BC@BDADB@CFCADL@HDTEDB@DBBBFHB@DDBBD@DDD@FCHDJB@JAPBBBBF@JAFBFHFPHFFADBBFADDF@BEH@@CDAFH@FCBJ@AC@@F@HBDAA@QIJA@GFAH@@EHABCPCLGZKL@JSNOFAHALBNDLPh\\@HBBF@FFADHF@FEBBDADBBDADBFDAB@FCB@FDHED@JABDFBLCHDB@BAR@DBDADCB@FBBBHHBB@FFBFFD@FFHF@FFDAJBDARDBBLEDIHG\\INAJDFFDHA\\@HBHLHLAXHrH\\FABFRDDAD@FBB@HBDADDDBFFB@BDBABDBDD@LABBDCHFLPF\\HDDDJ@RHB\\CFCHEJ@FDF@BB@HBBPFBFBBDDZH@CDAGGCKBCRBJAJBDDR@@BJD@BFHHAJB@DDBFCB@LGD@FCF@PHA@TRH@DCFKDEDG@CDA@A@CEGGCGK@EBAD@BINAJC@CJB@GAEDGTGJABAH@@CD@DAFE@ADEB@D@BBF@D@JH@DFFD@JADB@HHDBDFBD@ABDDJFNINBBEBAD@FD@CBAAEFDFABDDAF@@CFE@ABCCEKAACGAACBCFAJGFCBFH@DEJDDCNEDBFHFBDABCDACKBMBABMJQ@IESBEGWDQHCDCDCH@JHB@XILDFCAGCABADCNCBCF@ZDNNJ@FBHFF@FHH@CGBKAMMWCMEKGUAOCIAQA@AGJ@AQD@@A@GCCIAAGH@AIFCDGFBDN@@@EB@DH@A@EB@AIHBDABBDBDCAAHAG@H@GADC@EGCAECDKEDGBBBAJDACBAHA@ACC@IKAJMCSBMCKEEOYQIEKAIBGHadECCGAKGAGBILGpKDQAMLAJIB"]],"encodeOffsets":[[[123724,41503]],[[123686,41445]],[[123893,41727]],[[123510,41367]],[[123664,41442]],[[123669,41413]],[[123884,41801]]]},"properties":{"cp":[120.856394,40.755572],"name":"葫芦岛市","childNum":7}}],"UTF8Encoding":true});
}));

liaoningChart.setOption(liaoningOption);
