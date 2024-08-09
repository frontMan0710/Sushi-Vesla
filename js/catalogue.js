$(function () {
    let $element = $(".openCart").fadeOut(0)
    $(window).on("scroll", function() {
        if (!$element.is(":visible")) {
            $element.fadeIn(500)
            $(window).off("scroll")
        }
    })
})
$(function () {
    $(window).on("resize", function () {
        let windowHeight = $(window).height()
        $(".openCart").css("bottom", (windowHeight / 2) + "px")
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