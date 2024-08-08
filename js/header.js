$(function () {
    if ($(window).width() < 1440) {
        $(".headerNav").hide()
        $(".burgerIcon").on("click", function () {
            $(this).toggleClass("active")
            $(".headerNav").slideToggle(300)
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
        $(".userMenu .search").remove()
    } else {
        $(".headerContent .burgerIcon").remove()
    }
    if ($(window).width() >= 720) {
        $(".headerNav li.callUs").remove()
    }
    let $header = $("header")
    if ($header) {
        $(".wrapper").css("padding-top", $header.height() + 20)
        if ($(window).width() < 720) {
            $(".wrapper").css("padding-top", $header.height())
        }
    }
})