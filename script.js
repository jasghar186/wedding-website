$("document").ready(function(){
   
    // declare variables
    var toggleBtn = $(".bi-list") ;
    var menuContainer = $(".menu")

    // events
    $(toggleBtn).click(function(){
        $(menuContainer).toggleClass("showmenu")
    })
})