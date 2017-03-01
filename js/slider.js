/**
 * Created by Administrator on 2017/3/1.
 */
    $(document).ready(function(){
        $(".img_gallery").hover(function(){
            $("#btn_prev,#btn_next").fadeIn()
        },function(){
            $("#btn_prev,#btn_next").fadeOut()
        });

        $dragBln = false;

        $(".main_img").touchSlider({
            flexible : true,
            speed : 200,
            btn_prev : $("#btn_prev"),
            btn_next : $("#btn_next"),
            paging : $(".point a"),
            counter : function (e){
                $(".point a").removeClass("on").eq(e.current-1).addClass("on");//Í¼Æ¬Ë³ÐòµãÇÐ»»
                $(".img_font span").hide().eq(e.current-1).show();//Í¼Æ¬ÎÄ×ÖÇÐ»»
            }
        });

        $(".main_img").bind("mousedown", function() {
            $dragBln = false;
        });

        $(".main_img").bind("dragstart", function() {
            $dragBln = true;
        });

        $(".main_img a").click(function(){
            if($dragBln) {
                return false;
            }
        });

        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);

        $(".img_gallery").hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                $("#btn_next").click();
            },5000);
        });

        $(".main_img").bind("touchstart",function(){
            clearInterval(timer);
        }).bind("touchend", function(){
            timer = setInterval(function(){
                $("#btn_next").click();
            }, 5000);
        });

    });