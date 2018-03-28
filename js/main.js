//商城早报文字显示
(function(){
    var oSpan = document.querySelectorAll("#main .m-new .txt span");
    var index = 0;
    var length = oSpan.length;

    setInterval(function(){
        oSpan[index].className = "";
        index = ++index % length;

        setTimeout(function(){  //延迟显示
            oSpan[index].className = "on";
        },300)
    },4000)
})();

//swiper插件加载
(function(){
    new Swiper(".swiper-container",{
        loop : true,    //循环
        pagination : ".swiper-pagination",//分页器
        autoplay : 2000,//自动滑动
        speed : 500,    //滑动时间
        autoplayDisableOnInteraction : false   //操作后不停止自动轮播
    });
})();

//自适应屏幕
(function(n){
    var e=n.document,
        t=e.documentElement,
        i=720,
        d=i/100,
        //orientationchange是翻转移动设备时触发
        o="orientationchange"in n?"orientationchange":"resize",
        a=function(){
            var n=t.clientWidth||320;
            n>720&&(n=720);
            t.style.fontSize=n/d+"px"
        };
    e.addEventListener&&(n.addEventListener(o,a,!1),
        e.addEventListener("DOMContentLoaded",a,!1))
})(window);