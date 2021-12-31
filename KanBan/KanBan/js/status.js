function setStatus(status) {
    var statusOne = document.getElementById("status1");
    var statusTwo = document.getElementById("status2");
    var statusThree = document.getElementById("status3");
    var statusFour = document.getElementById("status4");
    var statusFive = document.getElementById("status5");
    statusOne.className = 'ments_0_0';
    statusTwo.className = 'ments_1_0';
    statusThree.className = 'ments_2_0';
    statusFour.className = 'ments_3_0';
    statusFive.className = 'ments_4_0';
    switch (status) {
        case "0":
        case 0:
        //case "通电":
            statusOne.className = 'ments_0_1';
            break;
        case "1":
        case 1:
        //case "运行":
            statusOne.className = 'ments_0_1';
            statusTwo.className = 'ments_1_1';
            break;
        case "2":
        case 2:
        //case "暂停":
            statusOne.className = 'ments_0_1';
            statusThree.className = 'ments_2_1';
            break;
        case "3":
        case 3:
        //case "故障":
            statusOne.className = 'ments_0_1';
            statusFour.className = 'ments_3_1';
            break;
        case "4":
        case 4:
        //case "报警":
            statusOne.className = 'ments_0_1';
            statusFive.className = 'ments_4_1';
            break;
        default:
            statusOne.className = 'ments_0_0';
            statusTwo.className = 'ments_1_0';
            statusThree.className = 'ments_2_0';
            statusFour.className = 'ments_3_0';
            statusFive.className = 'ments_4_0';
    }
}

function setStatusX(status, x) {
    var statusOne = document.getElementById("status_1" + x);
    var statusTwo = document.getElementById("status_2" + x);
    var statusThree = document.getElementById("status_3" + x);
    var statusFour = document.getElementById("status_4" + x);
    var statusFive = document.getElementById("status_5" + x);
    statusOne.className = 'ments_0_0';
    statusTwo.className = 'ments_1_0';
    statusThree.className = 'ments_2_0';
    statusFour.className = 'ments_3_0';
    statusFive.className = 'ments_4_0';
    switch (status) {
        case "0":
        case 0:
        //case "通电":
            statusOne.className = 'ments_0_1';
            break;
        case "1":
        case 1:
        //case "运行":
            statusOne.className = 'ments_0_1';
            statusTwo.className = 'ments_1_1';
            break;
        case "2":
        case 2:
        //case "暂停":
            statusOne.className = 'ments_0_1';
            statusThree.className = 'ments_2_1';
            break;
        case "3":
        case 3:
        //case "故障":
            statusOne.className = 'ments_0_1';
            statusFour.className = 'ments_3_1';
            break;
        case "4":
        case 4:
        //case "报警":
            statusOne.className = 'ments_0_1';
            statusFive.className = 'ments_4_1';
            break;
        default:
            statusOne.className = 'ments_0_0';
            statusTwo.className = 'ments_1_0';
            statusThree.className = 'ments_2_0';
            statusFour.className = 'ments_3_0';
            statusFive.className = 'ments_4_0';
    }
}

function getUrl(url) {
    return "http://localhost:9270/api/report/" + url;
   //return "http://192.168.1.101:80/api/report/" + url;
}