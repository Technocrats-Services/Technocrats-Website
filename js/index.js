$(document).ready(function(){
    $(window).scroll(function(){
        var positiontop = $(document).scrollTop();
        console.log(positiontop);
       if(positiontop>550)
       {
           $('nav').removeClass()
           $('nav').addClass('navbar fixed-top  navbar-expand-lg navbar-dark bg-dark')
       }
       if(positiontop<550){
        $('nav').removeClass()
        $('nav').addClass('navbar fixed-top  navbar-expand-lg navbar-dark bg-transparent')

       }

    });
});
