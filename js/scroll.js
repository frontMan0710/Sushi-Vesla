$(function () {
    $("#toCatalogue").on("click", function () {
        $("html body, html").animate({
            scrollTop: $(".categories").offset().top - ($("header").height() + 30)
        }, 400)
    })
})