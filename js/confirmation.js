$(function () {
    if ($(window).width() > 719) {
        $(".confirmTitle, main section.cart, .orderConfirm").remove()
    } else {
        $("section.timeSet, section.categories, section.confirmation").remove()
    }
    if ($(window).width() > 1119) {
        $(".openCart").remove()
    }
})
$(function () {
    $("#deliveryForm").show()
    $("[data-tab='deliveryForm']").addClass("active")
    $(".radio-group.radioLabel").on("click", function() {
        let tabId = $(this).data("tab")
        $(".radio-group label input").removeClass("active")
        $(this).addClass("active")
        $(".tabContent").removeClass("active").hide()
        $("#" + tabId).addClass("active").show()
    })
})