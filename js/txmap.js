//get请求
$.ajax({
    type: 'get',
    url: 'https://whois.pconline.com.cn/ipJson.jsp?json=true',
    success: function (res) {
        // 将返回的字符串res转换为对象，以便访问其属性
        // 如果返回的res已经是对象，则不需要此步骤
        if (typeof res === "string") {
            try {
                ipLocation = JSON.parse(res);
            } catch (error) {
                console.error("解析错误", error);
                return;
            }
        } else {
            ipLocation = res;
        }
        showWelcome(ipLocation);
    }
});


//根据自己的需求定制
function showWelcome(ipLocation) {
    if (!document.getElementById("welcome-info") || !ipLocation) return;

    let addr = ipLocation.addr || ''; // 获取地址，如果地址不存在则默认为空字符串
    let pro = ipLocation.pro || ''; // 获取省份，如果省份不存在则默认为空字符串
    let city = ipLocation.city || ''; // 获取城市，如果城市不存在则默认为空字符串

    //拼接地址信息，你可以根据需要自定义此处显示的格式
    let fullAddress = `${pro} ${city}`.trim(); // 如果pro和city存在，中间加空格，然后去除首尾空格

    //自定义文本需要放的位置
    document.getElementById("welcome-info").innerHTML = `欢迎来自<span>${fullAddress}</span>的小伙伴`;
}