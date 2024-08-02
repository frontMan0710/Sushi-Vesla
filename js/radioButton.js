function isChecked(event) {
    if ($(".radioButton").prop("checked")) {
        $(".confirmButton a, .confirmButton button").removeClass("disable")
    } else {
        event.preventDefault()
    }
}
$(function () {
    $(".confirmButton a, .confirmButton button").addClass("disable")
    $(".radioButton").on("click", function () {
        $(".confirmButton a, .confirmButton button").removeClass("disable")
    })
})
$(function () {
    $(".confirmButton a, .confirmButton button").on("click", function(event) {
        isChecked(event)
    })
})
$(function () {
    $(".radioLabel").on("click", function () {
        $(this).find("label input[type='radio']").prop("checked", true)
        $(".confirmButton a, .confirmButton button").removeClass("disable")
    })
})