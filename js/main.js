$(function () {
    let areHiddenElementsVisible = false
    function adjustElements() {
        const containerWidth = $(".categoryList").width()
        let totalWidth = 0
        const $elements = $(".categoryList .categoryCard")
        $elements.each(function () {
            const $element = $(this)
            const elementWidth = $element.outerWidth(true)
            const isVisible = totalWidth + elementWidth <= containerWidth
            $element.toggle(isVisible).toggleClass("invisible", !isVisible)
            if (isVisible) {
                totalWidth += elementWidth
            }
        })
    }
    function toggleHiddenElements() {
        $(".invisible").toggle()
        areHiddenElementsVisible = !areHiddenElementsVisible
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