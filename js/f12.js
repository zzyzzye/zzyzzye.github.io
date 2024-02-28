new Vue({
    created() {
        // 监听右键点击事件
        document.addEventListener('contextmenu', (event) => {
            this.showMessage();
            event.preventDefault(); // 阻止默认右键菜单行为
        });

        // 监听键盘按下事件
        document.addEventListener('keydown', (event) => {
            if (event.key === 'F12') {
                this.showMessage();
                event.preventDefault(); // 阻止默认F12打开开发者工具行为
            }
        });
    },
    methods: {
        showMessage() {
            this.$notify({
                title: "发现你了😗",
                message: "你已被监视",
                position: 'top-left',
                offset: 50,
                showClose: true,
                type: "warning",
                duration: 5000
            });
        }
    }
});