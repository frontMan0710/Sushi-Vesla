$(function () {
    function animateNumber(element, start, end, duration) {
        const range = end - start
        const startTime = performance.now()
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const currentNumber = start + range * progress
            element.text(currentNumber.toFixed(2) + " грн.")
            if (progress < 1) {
                requestAnimationFrame(updateNumber)
            } else {
                element.text(end.toFixed(2) + " грн.")
            }
        }
        requestAnimationFrame(updateNumber)
    }
    $(".decrease").on("click", function() {
        let $counter = $(this).siblings(".counter")
        let $price = $(this).closest(".cartItem, [class*='Item']").find(".itemPrice")
        let price = parseFloat($price.data("price"))
        let counter = parseInt($counter.text(), 10)
        if (counter > 0) {
            counter--
            let itemTotal = (price * counter).toFixed(2)
            $counter.text(counter)
            $price.text(itemTotal + " грн.")
        }
        if (counter === 0) {
            $(this).addClass("disable")
        }
        totalPrice()
    })
    $(".increase").on("click", function() {
        let $counter = $(this).siblings(".counter")
        let $price = $(this).closest(".cartItem, [class*='Item']").find(".itemPrice")
        let price = parseFloat($price.data("price"))
        let counter = parseInt($counter.text(), 10)
        counter++
        var itemTotal = (price * counter).toFixed(2)
        $counter.text(counter)
        $price.text(itemTotal + " грн.")
        if (counter > 0) {
            $(this).siblings(".decrease").removeClass("disable")
        }
        totalPrice()
    })
    let $trash = $(".cartItem").find(".removeItem")
    $trash.on("click", function () {
        $(this).closest(".cartItem").fadeOut(300, function() {
            $(this).remove()
            cartCheck()
            totalPrice()
        })
    })
    $(".remove").on("click", function () {
        $(this).closest(".cartItem").fadeOut(400, function () {
            $(this).remove()
            cartCheck()
            totalPrice()
        })
    })
    function cartCheck() {
        if ($(".cartItem").length) {
            $(".emptyMessage").hide()
        } else {
            $(".emptyMessage").show()
        }
    }
    function totalPrice() {
        var total = 0
        $(".itemPrice").each(function () {
            var itemPrice = parseFloat($(this).text()) || 0
            total += itemPrice
        })

        let $totalSum = $(".totalSum")
        let currentTotal = parseFloat($totalSum.text()) || 0
        animateNumber($totalSum, currentTotal, total, 600)
    }
    cartCheck()
    totalPrice()
})
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
$(function () {
    if ($(window).width() < 1120) {
        $("aside").remove()
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
        $(".openCart").remove()
    }
})
$(function () {
    $("img").Lazy()
})