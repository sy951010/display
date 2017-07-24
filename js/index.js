
 $.fn.extend({
    add_ani:function(effect,duration,delay){
        $(this).addClass('ani');
        if (effect) {
            $(this).attr('swiper-animate-effect', effect);
        }
       if (duration) {
            $(this).attr('swiper-animate-duration', duration);
       }
        if ( delay) {
            $(this).attr('swiper-animate-delay', delay);
        }   
    }
 });
 
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            $('.slide1 img').eq(0).add_ani('fadeInDownBig','1s','0.3s');
            $('.slide1 img').eq(1).add_ani('fadeInDownBig','1s','0.8s');
            $('.slide1 img').eq(2).add_ani('rotateOutDownRight','20s','2s');
            $('.slide2 h1').add_ani('fadeInDown','1s','0.3s');
            $('.slide2 h1 img').add_ani('fadeInDown','1s','0.8s');
            $('.one,.two').add_ani('fadeInUp','1s','0.8s')
            $('.slide4 p').add_ani('fadeInDown','1s','0.3s');
            $('.slide4 img').eq(0).add_ani('rubberBand','1s','1.3s');
            $('.slide5,.slide6,.slide7,.slide8').find('img:eq(0)').add_ani('flip','1s','0.3s');
            $('.slide5,.slide6,.slide7,.slide8').find('img:eq(1)').add_ani('rotateOutDownRight','20s','2s');
            $('.slide5,.slide6,.slide7,.slide8').find('p').add_ani('fadeInUpBig','1s','0.3s');
            $('.slide9 img:eq(0)').add_ani('bounceInLeft','1s','0.3s');
            $('.slide9 img:eq(1)').add_ani('rotateOutDownRight','15s','2s');
            $('.slide9 div:eq(0) img:eq(0)').add_ani('flipInY','1s','1s');
            $('.slide9 div:eq(0) img:eq(1)').add_ani('flipInY','1s','1.5s');
            $('.slide9 div:eq(1) img:eq(0)').add_ani('flipInY','1s','2s');
            $('.slide9 div:eq(1) img:eq(1)').add_ani('flipInY','1s','2.5s');
            $('.slide9 div:eq(2) img:eq(0)').add_ani('flipInY','1s','3s');
            $('.slide9 div:eq(2) img:eq(1)').add_ani('flipInY','1s','3.5s');
            $('.slide10 p:eq(0)').add_ani('fadeInDown','1s','0.3s');
            $('.slide10 p:eq(1)').add_ani('fadeInDown','0.7s','0.8s');
            $('.slide10 img:eq(1)').add_ani('fadeInUpBig','1s','1.3s');
            $('.slide10 img:eq(0)').add_ani('rotateOutDownRight','15s','2s');
            $('.slide11 img:eq(0)').add_ani('bounceInLeft','1s','0.3s');
            $('.slide11 div:eq(0) img:eq(0)').add_ani('fadeInLeft','1s','0.3s');
            $('.slide11 div:eq(0) img:eq(1)').add_ani('fadeInRight','1s','0.7s');
            $('.slide11 div:eq(1) img:eq(0)').add_ani('fadeInLeft','1s','1.1s');
            $('.slide11 div:eq(1) img:eq(1)').add_ani('fadeInRight','1s','1.5s');
            $('.slide11 div:eq(2) img:eq(0)').add_ani('fadeInLeft','1s','1.9s');
            $('.slide11 div:eq(2) img:eq(1)').add_ani('fadeInRight','1s','2.3s');
            $('.slide11 div:eq(3) img:eq(0)').add_ani('fadeInLeft','1s','2.7s');
            $('.slide11 div:eq(3) img:eq(1)').add_ani('fadeInRight','1s','3.1s');
            for (var i = 0; i < 9; i++) {
                $('.slide12 li').eq(i).find('img').add_ani('flipInX','0.3s',(i+1)*0.3+'s')  
            }
            $('.slide13 img:eq(0)').add_ani('lightSpeedIn','1s','0.3s');
            $('.slide13 img:eq(1)').add_ani('rotateOut','20s','0.5s');
            $('.slide13 a').add_ani('bounceIn','1.5s','1s');
            $('.slide13 p:eq(0)').add_ani('bounceIn','1.5s','1s');
            $('.slide13 p:eq(1)').add_ani('fadeInDownBig','1s','2s');
            $('.slide13 img:eq(2)').add_ani('fadeInDownBig','1s','2.5s');
        
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //初始化完成开始动画
    }
  }) 

