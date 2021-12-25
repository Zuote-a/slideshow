$(function () {
    let index=0;//标记当前图片索引
    //定时切换
   let timer01;
    timer();
    function display(){
        $(".box-img").css("opacity","0");
        $(".box-img").eq(index).css("opacity","1")
        $(".navigation-button").css("background-color","#ccc")
        $(".navigation-button").eq(index).css("background-color","#fff")
    }
    function timer(){
            timer01=setInterval(function (){
            if (index===$(".box-img").length-1){
                index=0;
                display();

            }else {
                index++;
                display();
            }

        },5000)}
    //左切换
    $(".box-lift").click(function (){
        clearInterval(timer01);
        if (index===0){
            index=$(".box-img").length-1
            display();
            timer();
        }else {
            index--;
            display();
            timer();
        }

    })
    //右切换
    $(".box-right").click(function () {
        clearInterval(timer01);
        if (index===$(".box-img").length-1){
            display();
            index=0;
            timer();
        }else {
            index++;
            display();
            timer();
        }
    })
    $(".navigation-button").click(function (){
        clearInterval(timer01);
        index=$(this).index();
        display();
        timer();
    })
})
