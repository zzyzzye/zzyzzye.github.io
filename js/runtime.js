// 移除了之前对全局变量 'now' 的修改，改用直接获取当前时间的方式

function createtime() {
    var now = new Date(); // 直接获取当前时间
    var start = new Date("01/26/2024 00:00:00");
    var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17);
    var unit = (dis / 149600000).toFixed(6);

    var grt = new Date("02/26/2024 00:00:00");
    var days = (now - grt) / 1e3 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum;
    var hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
        hnum = "0" + hnum;
    }

    var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum;
    var mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
        mnum = "0" + mnum;
    }

    var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum;
    var snum = Math.floor(seconds);
    if (String(snum).length === 1) {
        snum = "0" + snum;
    }

    let currentTimeHtml = hnum < 18 && hnum >= 9
        ? `<div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i></div>`
        : `<div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i></div>`;

    // Make sure the 'workboard' element exists before trying to update it
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = currentTimeHtml;
    }
}

// Initialize the display as soon as the script loads
createtime();

// Then update it every second
setInterval(() => {
    createtime();
}, 1000);