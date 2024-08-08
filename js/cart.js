$(function () {
    if ($(window).width() < 720) {
        $("aside").remove()
    }
    $(".openCart").on("click", function () {
        $(this).toggleClass("active")
        $("aside").toggleClass("active")
    })
})