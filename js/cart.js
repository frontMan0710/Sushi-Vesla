$(function () {
    if ($(window).width() < 720) {
        $("aside").remove()
    }
    if ($(window).width() > 720) {
        $(".openCart").on("click", function () {
            $(this).toggleClass("active")
            $("aside").toggleClass("active")
        })
    }
    if ($(window).width() < 720) {
        $("button.openCart").remove()
    }
})