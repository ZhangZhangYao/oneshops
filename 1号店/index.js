
//获取大盒子
let box = $('.banner_box')
//轮播的图片
let imgs = $('.banner_c_list li')
// 轮播的圆圈
let circles = $('.banner_c_list1 li')
// 显示的图片的索引
let imgIndex = 0
// 切换到指定图片函数
function play(index) {
    // 显示图片    
    imgs.eq(index).fadeIn(1000).siblings().fadeOut()
    // 高亮圆圈    
    circles.eq(index).addClass('active').siblings().removeClass('active')
        
}
// 点击圆圈切换到对应的图片
circles.click(function(){
    // 更改索引
    imgIndex = $(this).index()
    // 执行切换
    play(imgIndex)
})
let timer = null
function autoplay(){
    timer = setInterval(function(){
            imgIndex = imgIndex === imgs.length - 1 ? 0 : ++imgIndex
            play(imgIndex)
    },2000)
} 

$(function(){
    autoplay()
})

box.mouseout(function(){
    autoplay()
})

// 鼠标悬停在盒子上自轮轮播暂停
box.mouseover(function(){
    clearInterval(timer)
})

var div = document.querySelector(".scoll")
var uls = document.querySelector(".banner_r_box2")
var divs = div.appendChild(uls.cloneNode(true))
let timers
window.onload = div.onmouseout  = function(){
    timers = setInterval(()=>{
        div.scrollTop +=1
    if(div.scrollTop>=uls.offsetHeight){
        div.scrollTop = 0
    }
    },20)
}
div.onmouseover = function(){
    clearInterval(timers)
}

$(".h_prev").click(function() {
    var left = document.querySelector(".banner_foot_list").offsetLeft;
    console.log(left);
    left -= 975;
    console.log(left);
    $(".banner_foot_list").animate({
        left: left + "px"
    }, 2000, function() {
        document.querySelector(".banner_foot_list").style.left = (left == -1950 ? 0 : left) + "px";
    })
    return false;
})

$(".h_next").click(function() {
    var left = document.querySelector(".banner_foot_list").offsetLeft;
    document.querySelector(".banner_foot_list").style.left = (left == 0 ? -1950 : left) + "px";
    left = document.querySelector(".banner_foot_list").offsetLeft;
    left += 975;
    console.log(left);
    $(".banner_foot_list").animate({
        left: left + "px"
    }, 2000)

    return false;
})