$(function () {
    $("#list").show()
    $("[data-tab='list']").addClass("active")
    $(".controls button").on("click", function() {
        let tabId = $(this).data("tab")
        $(".controls button").removeClass("active")
        $(this).addClass("active")
        $(".tabContent").removeClass("active").hide()
        $("#" + tabId).addClass("active").show()
    })
    $(".targetSelect input, .checkmark").on("click", function() {
        lockButton()
    })
    function lockButton() {
        let $continue = $(".pickupContent a").addClass("disable")
        let $radio = $(".targetSelect input:checked")
        if ($radio.length > 0) {
            $continue.removeClass("disable")
        }
    }
    lockButton()
})