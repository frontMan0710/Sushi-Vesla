$(function () {
    $("button.openCart").on("click", function () {
        $(this).toggleClass("active")
        $("aside").toggleClass("active")
    })
})