$(document).ready(function () {
$(".menu__burger").click(function(event){
    $(".menu__burger").toggleClass("menu__burger-active");
    $(".menu__list").toggleClass("menu__list-active");
    $("body").toggleClass("lock");

})  
});
