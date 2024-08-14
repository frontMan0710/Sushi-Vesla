$(function () {
    $(".deliveryContent .collapsible, .pickupContent .collapsible").hide()
    $(".deliveryContent .deliveryFor, .pickupContent .pickupFor").on("click", function () {
        let $this = $(this)
        let $collapsible = $this.siblings(".collapsible")
        $collapsible.slideToggle(300)
        $this.toggleClass("active").text($this.hasClass("active") ? "Сбросить" : "Заказать ко времени")
    })
    $(".deliveryTime .showMore, .pickupTime .showMore").hide().first().show()
    $(".showMore").on("click", function () {
        let $this = $(this)
        let $buttons = $this.nextAll("li").slice(0, 6)
        $buttons.addClass("visible")
        let $nextShowMore = $buttons.nextAll(".showMore").first()
        $this.toggle($nextShowMore.length).remove()
        $nextShowMore.show()
    })
})