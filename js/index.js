$(function () {
    if ($(window).width() < 1440) {
        $(".burgerIcon").on("click", function () {
            $(this).toggleClass("active")
            $(".headerNav").toggleClass("active")
            if ($(window).width() < 720) {
                $("body").toggleClass("lock")
            }
        })
        $(".phone").on("click", function () {
            if ($(window).width() >= 720) {
                $(".phoneNumbers").toggleClass("active")
                $(".search").removeClass("active")
            }
        })
        $(".userMenu .profile").on("click", function () {
            $(".search").toggleClass("active")
            $(".phoneNumbers").removeClass("active")
        })
    } else {
        $(".headerContent .burgerIcon").remove()
    }
    if ($(window).width() >= 720) {
        $(".headerNav .profile").remove()
        $(".phone").attr("href", "javascript:void(0)")
    }
    let $header = $("header")
    if ($header) {
        $(".wrapper").css("padding-top", $header.height() + 20)
        if ($(window).width() < 720) {
            $(".wrapper").css("padding-top", $header.height())
        }
    }
})
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
    var areHiddenElementsVisible = false
    function adjustElements() {
        let containerWidth = $(".categoryList").width()
        let totalWidth = 0
        let firstRowTop = null
        $(".categoryList .categoryCard").each(function() {
            let $element = $(this)
            let elementWidth = $element.outerWidth(true)
            if (firstRowTop === null) {
                firstRowTop = $element.offset().top
            }
            if (totalWidth + elementWidth > containerWidth || $element.offset().top !== firstRowTop) {
                $element.hide().addClass("invisible")
            } else {
                $element.show().removeClass("invisible")
                totalWidth += elementWidth
            }
        })
    }
    function toggleHiddenElements() {
        if (areHiddenElementsVisible) {
            $(".invisible").hide()
            areHiddenElementsVisible = false
        } else {
            $(".invisible").show()
            areHiddenElementsVisible = true
        }
    }
    adjustElements()
    $(window).on("resize", adjustElements)
    $(".sectionTitle span").on("click", function () {
        toggleHiddenElements()
        $(this).toggleClass("active")
    })
})
$(function () {
    var $target = $(".catalogueList .catalogueCard")
    $(window).on("scroll", function() {
        var scrollTop = $(window).scrollTop()
        var windowHeight = $(window).height()
        $target.each(function() {
            var $el = $(this)
            var targetOffset = $el.offset().top
            if (scrollTop + windowHeight >= targetOffset && $el.css("visibility") === "hidden") {
                $el.css("visibility", "visible").css("opacity", "1")
            }
        })
    })
    if ($(window).width() < 1120) {
        $(".openCart").fadeOut(0)
        $(window).on("scroll", function () {
            $(".openCart").fadeIn(500)
        })
    } else {
        $(".openCart").remove()
    }
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
    new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 20,
        preloadImages: false,
    })
})
$(function () {
    $(".lazy").Lazy({
        bind: "event",
        threshold: 0,
        afterLoad: function(element) {
            element.parent().show()
            element.parent().addClass("active")
        }
    })
    $(".catalogueCard").on("click", function () {
        var $modal = $(this).find(".modalWrapper")
        if ($modal.length) {
            $("body").addClass("lock")
            $modal.addClass("active")
            $modal.show()
        }
        if ($(".modal.active")) {
            $("a.openCart").removeClass("active")
        }
    })
    $(document).on("click", ".modalWrapper.active .modal .close", function () {
        let $modal = $(this).closest(".modalWrapper")
        $("body").removeClass("lock")
        $modal.removeClass("active")
        $modal.hide()
        if ($modal) {
            $("a.openCart").addClass("active")
        }
    })
    $(".modalWrapper").hide()
})
$(function () {
    $("img").Lazy()
})