//scroll bar function
let myButton = document.getElementById("goTop");
window.onscroll = function() {
    scrollFunction();
 }
 function scrollFunction() {
    if (document.body.scrollTop >400 || document.documentElement.scrollTop > 400) {
        $("#goTop").css("display","block");
    }
    else  {
        $("#goTop").css("display","none")
        // let backgroundColor = $(".navbar").css("background-color");

        // backgroundColor = backgroundColor + " bg-primary"
        // $(".navbar").css("background-color", backgroundColor);

        // console.log("not 400 ox")
    }
    $("#goTop").click(function() {
        // console.log("scrollTop working");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
 }
// form submit button
  $(".btn").click(function() {
    let message =  $(".form-control");
    let displaymessgae = " "
    for(let i = 0; i< message.length; i++){
        displaymessgae += message[i].value + "\n";
        message[i].value= "";
   }
   alert(`Your message has been received with name, email, and message as follows:\n${displaymessgae}`)
  })
  