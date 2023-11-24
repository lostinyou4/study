(function(){
    var controller = new ScrollMagic.Controller();
    new WOW().init();

    //서브젝트  
    $('.section-area .tit-anim01').each(function(){/*
        $(this).html( $(this).html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));*/
        words = $(this).text().split('');
        for(i in words){
            words[i] = '<span>' + words[i] + '</span>';
          }
        text = words.join('');
        $(this).html(text);

        var titTween1 = TweenMax.staggerFromTo($(this).find("span"), 0.1, {autoAlpha:0,  top:"10px"}, {autoAlpha:1, top:"0px"}, 0.05);       

        var titScene1 = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -($(window).height()/4)
        })
        .setTween(titTween1)
        .addTo(controller);
        //.addIndicators()
    });
    $('.section-area .tit-anim02').each(function(){
        words = $(this).text().split('');
        for(i in words){
            words[i] = '<span>' + words[i] + '</span>';
          }
        text = words.join('');
        $(this).html(text);

        var titTween2 = new TimelineMax({delay:0.5});
        titTween2
        .staggerFromTo($(this).find("span"), 0.1, {autoAlpha:0,  top:"10px"}, {autoAlpha:1, top:"0px"}, 0.05);       

        var titScene2 = new ScrollMagic.Scene({
            triggerElement: this,
            offset: -($(window).height()/4)
        })
        .setTween(titTween2)
        .addTo(controller);
        //.addIndicators()
    });
    
    //GNB
    $(window).scroll(function(){
        if($(window).scrollTop()>0){
            $('#gnb').addClass('on');
        }else{
            $('#gnb').removeClass('on');
        }
    })

    //인트로
    var slideTl = new TimelineMax();
    slideTl
    .set(".slide-content", {opacity: 0})
    .to(".slide-content", 2, {opacity: 1})
    .set(".main-slide", {backgroundColor: 'ffffff'})
    .set(".slide-content", {opacity: 1})
    .to(".slide-content", 1, {scale: "0.97", borderRadius: "8px"})
    .to(".main-slide", 1, {paddingTop:"115px", onComplete: introCallback}, "-=1")
    function introCallback(){
        $('.slide-content').addClass('load');
    }
    //인트로 슬라이드
    $('.intro-sec .main-slide').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        cssEase: 'ease-in-out',
        fade: true,
        //prevArrow: prevButton,
        //nextArrow: nextButton
      });

    //커리큘럼
    var curriWidth = $('.curri-list').width();
    var wipeTl = new TimelineMax()
    .set(".bg-sec", {opacity: 0})
    .set(".curri-sec", {height: "100%"})
    .fromTo(".curri-list", 1, {right: (-curriWidth + $( window ).width() + 700)+"px"}, {right: ($( window ).width() - 907)/2+"px", ease: Linear.easeNone})
    .to(".curri-top", 0.1, {opacity: 0}, "-=0.2")
    .set(".bg-sec", {opacity: 1});
    new ScrollMagic.Scene({
        triggerElement: '.curri-sec',
        triggerHook: 'onLeave',
        duration: '500%'
    })
    .setPin('.curri-sec')
    .setTween(wipeTl)
    .addTo(controller);
    //.addIndicators()

})();