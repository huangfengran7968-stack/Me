
/**
 * 输入时间秒，转换为时:分:秒
 * @param {Object} value秒
 */
function formatTime(value) {
    var seconds = parseInt(value), // 秒
        minutes = 0, // 分
        hours = 0, // 小时
        result;
    hours = parseInt(value / 3600); //转换小时
    hours = hours > 9 ? hours : "0" + hours;
    minutes = parseInt(value / 60) - hours * 60; //转换分钟
    minutes = minutes > 9 ? minutes : "0" + minutes;
    seconds = value % 60;
    seconds = seconds > 9 ? seconds : "0" + seconds;
    result = hours + ":" + minutes + ":" + seconds;
    return result;
}

function queryURLParams(URL) {
    // const url = location.search; // 项目中可直接通过search方法获取url中"?"符后的字串
    let url = URL.split("?")[1];
    let obj = {}; // 声明参数对象
    let arr = url.split("&"); // 以&符号分割为数组
    for (let i = 0; i < arr.length; i++) {
        let arrNew = arr[i].split("="); // 以"="分割为数组
        obj[arrNew[0]] = arrNew[1];
    }
    return obj;
}

function timeDeal(timestamp) {
    // 时间戳 
    // 此处时间戳以毫秒为单位
    let date = new Date(parseInt(timestamp) * 1000);
    let Year = date.getFullYear();
    let Moth = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    let Hour = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    let Minute = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let Sechond = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    let GMT = Year + '-' + Moth + '-' + Day + '   ' + Hour + ':' + Minute + ':' + Sechond;
    return GMT
}

function showDeepToast(msg) {
    $("#toast").show()
    $("#text").text(msg)
    setTimeout(function () {
        $("#toast").hide()
    }, 2000);
}

//秒数转化为时分秒
function formatSeconds(value) {
    var secondTime = parseInt(value);// 秒
    var minuteTime = 0;// 分
    var hourTime = 0;// 小时
    if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
        //获取分钟，除以60取整数，得到整数分钟
        minuteTime = parseInt(secondTime / 60);
        //获取秒数，秒数取余，得到整数秒数
        secondTime = parseInt(secondTime % 60);
        //如果分钟大于60，将分钟转换成小时
        if (minuteTime > 60) {
            //获取小时，获取分钟除以60，得到整数小时
            hourTime = parseInt(minuteTime / 60);
            //获取小时后取余的分，获取分钟除以60取余的分
            minuteTime = parseInt(minuteTime % 60);
        }
    }
    if(secondTime<10){
        secondTime = "0"+parseInt(secondTime)
    }
    if(minuteTime<10){
        minuteTime = "0"+parseInt(minuteTime)
    }
    if(hourTime<10){
        hourTime = "0"+parseInt(hourTime)
    }
    var result = hourTime+":"+minuteTime+":"+secondTime;

    return result;
}
