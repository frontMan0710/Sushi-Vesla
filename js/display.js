$(function () {
    if ($(window).width() > 1119) {
        $(".openCart").remove()
    }
    if ($(window).width() < 720) {
        $(".catalogueCard").find(".prodName").remove()
        $(".modal .close img").attr("src", "./img/mobileClose.svg")
    } else {
        $(".catalogueCard .mobileProdContent").remove()
        $(".categoryListMobile").remove()
        $(".promoCodeMobile").remove()
        $(".mobileProdName").remove()
        $(".mobileProdPrice").remove()
        $(".mobileAddCart").remove()
    }
})