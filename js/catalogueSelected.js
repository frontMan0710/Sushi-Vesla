$(function () {
    $(".categories .sectionTitle span").remove()
    $("li.categoryCard a img").remove()
    $("li.categoryCard a").css({"flex-direction":"row", "height":"100%", "justify-content":"center"})
    $("li.categoryCard").css({"height":"50px", "padding":"0"}).on("click", function () {
        $("li.categoryCard").removeClass("active")
        $(this).addClass("active")
    })
})