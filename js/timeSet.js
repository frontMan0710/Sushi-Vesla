$(function () {
    $(".deliveryContent .collapsible, .pickupContent .collapsible").hide()
    $(".deliveryContent .deliveryFor, .pickupContent .pickupFor").on("click", function () {
        $(this).siblings(".collapsible").slideToggle(300)
        $(this).toggleClass("active")
        if ($(this).hasClass("active")) {
            $(this).text("Сбросить")
        } else {
            $(this).text("Заказать ко времени")
        }
    })
    $(".deliveryTime .showMore, .pickupTime .showMore").hide().first().show()
    $(".showMore").on("click", function () {
        let $this = $(this)
        let $buttons = $this.nextAll("button").slice(0, 6)
        $buttons.addClass("visible")
        let $nextShowMore = $buttons.nextAll(".showMore").first()
        if ($nextShowMore.length) {
            $this.hide()
            $nextShowMore.show()
        } else {
            $this.remove()
        }
    })
})
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