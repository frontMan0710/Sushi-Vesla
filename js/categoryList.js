if ($(window).width() < 720) {
    $(function () {
        new Swiper(".swiper", {
            direction: "horizontal",
            slidesPerView: "auto",
            spaceBetween: 20,
            preloadImages: false,
        })
    })
}
$(function () {
    $(".sectionTitle span").on("click", function () {
        $(this).toggleClass("active")
        $(".categoryList").toggleClass("active")
    })
})
$(function () {
    $(".timeTitle span").on("click", function () {
        $(this).toggleClass("active")
        $(".timeSelect").toggleClass("active")
    })
})