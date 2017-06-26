//rem-js,适配各种屏幕
//(function (doc, win) {
//    var docEl = doc.documentElement,
//    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//    recalc = function () {
//        var clientWidth = docEl.clientWidth;
//        if (!clientWidth) return;
//        if (clientWidth < 720) {
//            docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
//        }
//        else {
//            docEl.style.fontSize = 100 * (720 / 720) + 'px';
//        }
//    };
//    if (!doc.addEventListener) return;
//    win.addEventListener(resizeEvt, recalc, false);
//    doc.addEventListener('DOMContentLoaded', recalc, false);
//})(document, window);
//公用banner
function slide(name, width, height) {
    if ($(name).children().length > 1) {
        $(name).slidesjs({
            width: width,
            height: height,
            navigation: false,
            play: {
                auto: false,
                restartDelay: 2500
            },
            callback: {
                complete: function (number) {
                    clearTimeout(slideTimer)
                    var slideTimer = setTimeout(function () {
                        $(".slidesjs-play").click();
                    }, 4000)
                }
            }
        });
        //导航点居中
        var pagination = $(name).find(".slidesjs-pagination li").size() * 18;
        $(name).find(".slidesjs-pagination").css("margin-left", "-" + pagination / 200 + "rem");
    }
}
//左侧导航
$(".head .menu").on("click", function (event) {
    if (event && event.stopPropagation) { //阻止事件冒泡 
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
});
$(".head .menu").click(function () {
    if ($(".leftNav").position().left == 0) {
        $(".leftNav").removeClass("slide");
        $(".wrapMain").removeClass("on");
    } else {
        $(".leftNav").addClass("slide");
        $(".wrapMain").addClass("on");
        $(".wrapMain").css("height",$(window).height());
        $(".leftNavCover").show();
        $(".leftNav .navUl").css("height", ($(window).height() - 160));
    }
});
//二级导航点击效果
$(".leftNav .navUl > li").click(function () {
    var $me = $(this);
    var thisSubNav = $me.find(".subNav").css("display");
    if (thisSubNav == "none") {
        $me.find(".subNav").show().parents("li").siblings().find(".subNav").hide();
        $me.children("a").eq(0).addClass("bgShow");
        $me.siblings().children("a").eq(0).removeClass("bgShow");
    } else {
        $(".subNav").hide();
        $me.children("a").removeClass("bgShow");
    }
});
//任意点击区域，左侧栏隐藏
$(".leftNavCover").click(function (e) {
    if (!$(e.target).is($(".leftNav"))) {
        $(".leftNav").removeClass("slide");
        $(".wrapMain").removeClass("on");
        $(".leftNavCover").hide();
        $(".wrapMain").css("height", "auto");
    }
});
//收藏提示框js
var clickNum = 0;
var popHeight = $(".collectPop").height();
var popWidth = $(".collectPop").width();
$("#detailCollect").click(function () {
    clickNum += 1;
    if (clickNum % 2 !== 0) {
        $(this).attr("src", "../../images/collectOn.png");
        $(".collectPop").text("收藏成功！");
        $(".collectPop").show();
        $(".collectPop").css("margin-top", -popHeight / 200 + "rem").css("margin-left", -popWidth / 200 + "rem");
        setTimeout(function () {
            $(".collectPop").hide()
        }, 3000);
    } else {
        $(this).attr("src", "../../images/detailCollect.png");
        $(".collectPop").text("取消收藏成功！");
        $(".collectPop").show();
        $(".collectPop").css("margin-top", -popHeight / 200 + "rem").css("margin-left", -popWidth / 200 + "rem");
        setTimeout(function () {
            $(".collectPop").hide()
        }, 3000);
    }
});
$(".collectImg").click(function () {
    clickNum += 1;
    if (clickNum % 2 !== 0) {
        $($(this)).attr("src", "../../images/collectOn.png");
        $(".collectPop").text("收藏成功！");
        $(".collectPop").show();
        $(".collectPop").css("margin-top", -popHeight / 200 + "rem").css("margin-left", -popWidth / 200 + "rem");
        setTimeout(function () {
            $(".collectPop").hide()
        }, 2000);
    } else {
        $($(this)).attr("src", "../../images/detailCollect.png");
        $(".collectPop").text("取消收藏成功！");
        $(".collectPop").show();
        $(".collectPop").css("margin-top", -popHeight / 200 + "rem").css("margin-left", -popWidth / 200 + "rem");
        setTimeout(function () {
            $(".collectPop").hide()
        }, 2000);
    }
});

