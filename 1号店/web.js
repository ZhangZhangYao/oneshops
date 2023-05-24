// 购物车
function Num() {
    $(".zj span").each(function (index) {
        // console.log($(".num").index())
        let sum = $('.num').eq(index).text() * $('.val').eq(index).val()
        $(this).text(sum.toFixed(2))
        let nnn = $('.val').eq(index).val()
        $(this).parent().parent().prev().find('b').text(nnn)
    })
    let num1 = 0
    $('.shop_box_r span').text($('.goshop_shop li').length)
    $('.goshop_shop li').each(function (index) {
        if ($('.goshop_shop li').length >= 1) {
            num1 += Number($('.zj span').eq(index).text())
        }
    })
    $('.shop_box_l span').html('￥' + num1)

}
Num()
$('.jia').click(function () {
    var aaa = $(this).prev('input').val(function (index, value) {
        return value < 10 ? ++value : 10
    })

    // 调用小计
    Num()
})
// 自减
$('.jian').click(function () {
    $(this).next('input').val(function (index, value) {
        return value > 1 ? --value : 1
    })
    // 调用小计
    Num()
})
$('.close').click(function () {
    $(this).closest('li').detach()
    if ($('.goshop_shop li').length < 1) {
        $(".shop_box").detach()
        $('.goshop_shop').css('display', 'none')
        $('.goshop').fadeIn(200)
    }
    if ($("shop_header span"))
        Num()
})
$('.nav_r').mouseenter(function () {
    if ($('.goshop_shop li').length >= 1) {
        $('.goshop_shop').fadeIn(200)
    } else {
        $('.goshop').fadeIn(200)
    }
})
$('.nav_r').mouseleave(function () {
    if ($('.goshop_shop li').length >= 1) {
        $('.goshop_shop').fadeOut(200)
    } else {
        $('.goshop').fadeOut(200)
    }
})
// 放大镜
let body_img_l = document.querySelector(".body_img_l")
let body_img_l_box1 = document.querySelector(".body_img_l_box1")
let body_img_l_box1I = document.querySelector(".body_img_l_box1 img")
let body_img_l_box2 = document.querySelector(".body_img_l_box2")
let body_img_l_box2I = document.querySelector(".body_img_l_box2 img")
let ooo = document.querySelector(".ooo")

//鼠标划入小图显示大图和遮罩
body_img_l_box1.onmouseover = function () {
    ooo.style.display = 'block'
    body_img_l_box2.style.display = 'block'
    //遮罩跟随鼠标进行移动
    ooo.onmousemove = function (event) {
        //计算遮罩的位置=鼠标的X轴,Y轴的位置减去左边和上边偏移的值，再减去遮罩层的一半
        console.log(event.pageX, event.pageY)
        let left = event.pageX - body_img_l.offsetLeft - ooo.offsetWidth / 2
        let top = event.pageY - body_img_l.offsetTop - ooo.offsetHeight / 2
        // 限制遮罩的移动
        left = left < 0 ? 0 : left
        left = left > body_img_l_box1.offsetWidth - ooo.offsetWidth ? body_img_l_box1.offsetWidth - ooo.offsetWidth : left
        top = top < 0 ? 0 : top
        top = top > body_img_l_box1.offsetHeight - ooo.offsetHeight ? body_img_l_box1.offsetHeight - ooo.offsetHeight : top
        // 遮罩移动
        ooo.style.left = left + "px"
        ooo.style.top = top + "px"
        //大小图比例
        let scale = body_img_l_box2I.offsetWidth / body_img_l_box1I.offsetWidth
        //设置大图位置
        body_img_l_box2I.style.left = -left * scale + "px"
        body_img_l_box2I.style.top = -top * scale + "px"
    }

}
//鼠标划出小图隐藏大图和遮罩
body_img_l_box1.onmouseout = function () {
    ooo.style.display = 'none'
    body_img_l_box2.style.display = 'none'
}
//尺码选择和颜色选择功能
let li1 = $('.text_checked li')
let li2 = $('.text_checked1 li')
li1.click(function (index) {
    $(this).addClass('checked').siblings().removeClass('checked')
})
li2.click(function (index) {
    $(this).addClass('checked').siblings().removeClass('checked')
})

let tval = $('.text_b input').val()
let btn1 = $('.text_b .btn1')
let btn2 = $('.text_b .btn2')
btn1.click(function () {
    let num = Number(tval) + 1
    tval = num
    $('.text_b input').val(num)
})
btn2.click(function () {
    if (tval > 1) {
        let num = Number(tval) - 1
        tval = num
        $('.text_b input').val(num)
    } else {
    }
})
$('.team_sum').children("span").text($(':checked').parent().next().next().text())
console.log($(':checked').parent().next().next().text())
$('.price input').click(function () {
    let aa = $('.team_sum').children("span").text()
    if (this.checked == true) {
        let jiage = Number($(this).parent().siblings(".jia_ge").text())
        let ac = Number(aa) + jiage
        console.log(ac,jiage)
        $('.team_sum').children("span").text(ac)
    }
    else {
        let aa = $('.team_sum').children("span").text()
        let jiag = Number($(this).parent().siblings(".jia_ge").text())
        let ac = Number(aa) - jiag
        $('.team_sum').children("span").text(ac)
    }
})
$(".des_tab li").click(function(){
    $(this).addClass("current").siblings().removeClass("current")
    
    console.log($(this).parent().parent().parent().siblings(".des_item").toggleClass("current"))
})
