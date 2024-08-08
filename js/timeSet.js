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
        let $buttons = $this.nextAll("li").slice(0, 6)
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