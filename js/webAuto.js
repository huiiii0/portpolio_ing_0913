$(function(){
    // 인터파크
    $("#interpark_box").mouseenter(function(){
        $("#interpark > li").stop().animate({marginTop:"-2120px"},5000)
    }).mouseleave(function(){
        $("#interpark > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // MLB
    $("#estore_box").mouseenter(function(){
        $("#estore > li").stop().animate({marginTop:"-1920px"},5000)
    }).mouseleave(function(){
        $("#estore > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // CAFE
    $("#gem_box").mouseenter(function(){
        $("#gem > li").stop().animate({marginTop:"-2110px"},5000)
    }).mouseleave(function(){
        $("#gem > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // vittz
    $("#dkjm_box").mouseenter(function(){
        $("#dkjm > li").stop().animate({marginTop:"-2930px"},5000)
    }).mouseleave(function(){
        $("#dkjm > li").stop().animate({marginTop:"0px"},3000)
    })
})

