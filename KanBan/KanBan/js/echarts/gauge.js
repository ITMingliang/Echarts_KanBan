function t2() {
    return {
        tooltip: {
            formatter: "",
        },
        series: [{
                name: '',
                type: 'gauge',
                min: 0,
                max: 100,
                radius: '90%',
                splitNumber: 10, // �ָ����Ĭ��Ϊ5
                axisLine: { // �������
                    lineStyle: { // ����lineStyle����������ʽ
                        width: 10,
                        shadowBlur: '20', //轴线阴影光圈的设置
                        shadowColor: '#0096ff'//#6ACA8B
                    }
                },
                axisTick: { // �����С���
                    splitNumber: 10, // ÿ��splitϸ�ֶ��ٶ�
                    length: 15, // ����length�����߳�
                    lineStyle: { // ����lineStyle����������ʽ
                        color: 'auto',
                    }
                },
                axisLabel: { // ������ı���ǩ�����axis.axisLabel
                    distance: 0,
                    textStyle: { // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                        color: 'auto',
                        fontWeight: ['bold'],
                        //fontSize: 16,
                        background: "#01040D",
                    },
                },
                splitLine: { // �ָ���
                    show: true, // Ĭ����ʾ������show������ʾ���
                    length: 16, // ����length�����߳�
                    lineStyle: { // ����lineStyle�����lineStyle������������ʽ
                        color: 'auto'
                    }
                },
                pointer: {
                    show: true,
                    width: 5
                },
                title: {
                    show: true,
                    color: "auto",
                    offsetCenter: [0, '-40%'], // x, y����λpx
                    textStyle: { // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                        fontWeight: 'bolder',
                        //fontSize:26
                    }
                },
                detail: {
                    formatter: '{value}',
                    backgroundColor: "#00a0e9",
                    borderRadius: 10,
                    padding: [10, 25, 10, 25],
                    textStyle: { // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                        color: '#FFFFFF',
                        fontWeight: 'normal',
                        fontSize: 26,
                        shadowBlur: '60',
                        shadowColor: '#65cdf8'
                    }
                },
                data: [{ value: 0, name: "" }]
            },

        ],
    };
}