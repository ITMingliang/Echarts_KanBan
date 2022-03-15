setInterval(function() {
        var Timers = document.getElementById('Timers');
        var time = new Date();
        var m = time.getMonth();
        var d = time.getDate();
        var k = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();
        m = m + 1;
        m < 10 ? m = '0' + m : m;

        d < 10 ? d = '0' + d : d;
        var t = time.getFullYear() + "-" + m + "-" + d
        k < 10 ? k = '0' + k : k;
        mm < 10 ? mm = '0' + mm : mm;
        ss < 10 ? ss = '0' + ss : ss;
        var timer = t + '&nbsp;' + k + ':' + mm ;
        Timers.innerHTML = timer;
    }, 1000)