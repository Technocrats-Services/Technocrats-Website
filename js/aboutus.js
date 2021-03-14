$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);
        if(screen.width<700){
            if(positiontop>100 && positiontop<300){
                $('.bxc2').addClass('anim')
                }
            
                if(positiontop>300 && positiontop<600){
                $('.bxc3').addClass('anim')
                }
                if(positiontop>600 && positiontop<900){
                $('.bxc4').addClass('anim')
                }
                if(positiontop>900 && positiontop<1200){
                $('.bxc5').addClass('anim')
                }
        
        
        }
        else{    
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
        }

    });
});
window.onload=function(){
let floN = document.getElementById('floN')

floN.addEventListener('click',function hover(){
    let instaN = document.getElementById('instaN')
    let imgN = document.getElementById('imgN')
    console.log('run')
    instaN.addClass('dis')
    imgN.addClass('imgblr')

});
}