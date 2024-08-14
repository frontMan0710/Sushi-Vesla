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