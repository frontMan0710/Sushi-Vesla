$(function () {
    $(".burgerIcon").on("click", function () {
        $(this).toggleClass("active")
        $(".headerNav").toggleClass("active")
        $("body").toggleClass("lock")
    })
    $(".phone").on("click", function () {
        $(".phoneNumbers").toggleClass("active")
        $(".search").removeClass("active")
    })
    $(".userMenu .profile").on("click", function () {
        $(".phoneNumbers").removeClass("active")
    })
})