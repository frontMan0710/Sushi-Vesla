function isChecked(event) {
    if ($("input#delivery").prop("checked") || $("input#pickup").prop("checked")) {
        $(".confirmButton a").removeClass("disable")
    } else {
        event.preventDefault()
    }
}
$(function () {
    $(".confirmButton a").addClass("disable")
    $("input#delivery, input#pickup").on("click", function () {
        $(".confirmButton a").removeClass("disable")
    })
})
$(function () {
    $(".confirmButton a").on("click", function(event) {
        isChecked(event)
    })
})