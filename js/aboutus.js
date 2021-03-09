$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if(positiontop>300 && positiontop<600){
        $('.bxc2').addClass('anim')
        }
       
        if(positiontop>800 && positiontop<1200){
        $('.bxc3').addClass('anim')
        }
        if(positiontop>1500 && positiontop<2000){
        $('.bxc4').addClass('anim')
        }
        if(positiontop>2000 && positiontop<2500){
        $('.bxc5').addClass('anim')
        }

    });
});