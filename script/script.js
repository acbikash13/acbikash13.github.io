$(window).scroll(function(){
    var classes = $("nav").attr("class");
    classes = classes + " bg-info"
    var classes = $("nav").css("background-color", classes);
}) ;

let myButton = document.getElementById("goTop");
window.onscroll = function() {
    scrollFunction();
 }
 function scrollFunction() {
    if (document.body.scrollTop >400 || document.documentElement.scrollTop > 400) {
        $("#goTop").css("display","block");
        $(".navbar").css("background-color", "yellow");
        // console.log("400 ox")
    }
    else  {
        $("#goTop").css("display","none")
        $(".navbar").css("background-color", "lightblue");

        // console.log("not 400 ox")
    }
    $("#goTop").click(function() {
        // console.log("scrollTop working");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
 }

 $(document).ready(function() {
    $( ".mr-auto .nav-item" ).bind( "click", function(event) {
        event.preventDefault();
        var clickedItem = $( this );
        $( ".mr-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});