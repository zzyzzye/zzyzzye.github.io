// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}


// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功👻",
                    message: "若要转载最好保留原文链接哦！",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})


document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // 阻止默认右键菜单行为
    new Vue({
        data: function () {
            this.$notify({
                title: "发现你了😗",
                message: "小伙子老实点👿",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "warning",
                duration: 5000
            });
        }
    })
});


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 123) {
        event.preventDefault(); // 阻止默认F12键行为
        new Vue({
            data: function () {
                this.$notify({
                    title: "发现你了😗",
                    message: "小伙子老实点👿",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "warning",
                    duration: 5000
                });
            }
        });
    }
});


// debounce 函数的实现
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         const context = this;
//         const args = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//         }, wait);
//     };
// }
//
// // 在页面加载时创建Vue实例
// document.addEventListener("DOMContentLoaded", function () {
//     new Vue({
//         created: function () {
//             document.addEventListener("copy", debounce(function () {
//                 this.$notify({
//                     title: "哎嘿！复制成功👻",
//                     message: "若要转载最好保留原文链接哦！",
//                     position: 'top-left',
//                     offset: 50,
//                     showClose: true,
//                     type: "success",
//                     duration: 5000
//                 });
//             }, 300));
//
//             document.addEventListener("contextmenu", function (event) {
//                 event.preventDefault();
//                 this.$notify({
//                     title: "发现你了😗",
//                     message: "小伙子老实点👿",
//                     position: 'top-left',
//                     offset: 50,
//                     showClose: true,
//                     type: "warning",
//                     duration: 5000
//                 });
//             });
//
//             document.addEventListener("keydown", function (event) {
//                 if (event.keyCode === 123) {
//                     event.preventDefault();
//                     this.$notify({
//                         title: "发现你了😗",
//                         message: "小伙子老实点👿",
//                         position: 'top-left',
//                         offset: 50,
//                         showClose: true,
//                         type: "warning",
//                         duration: 5000
//                     });
//                 }
//             });
//         }
//     });
// });