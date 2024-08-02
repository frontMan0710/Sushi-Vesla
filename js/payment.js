$(function () {
    function validateForm() {
        let isValid = true
        const selectedPaymentMethod = $(".radioButton[name='paymentMethod']:checked").attr("id")
        if (selectedPaymentMethod === "cashMethod") {
            const changeSum = $("#changeSum").val()
            const changeRadioSelected = $(".changeShortSelect input[name='changeSelect']:checked").length > 0
            if (changeSum === "" && !changeRadioSelected) {
                isValid = false
            }
        }
        if (isValid) {
            $(".confirmButton a").removeClass("disable")
        } else {
            $(".confirmButton a").addClass("disable")
        }
    }
    $(".radioButton[name='paymentMethod']").on("change", function () {
        validateForm()
    })
    $("#changeSum, .changeShortSelect input[name='changeSelect']").on("input change", function () {
        validateForm()
    })
    $(".confirmButton a").on("click", function (event) {
        if ($(".confirmButton a").hasClass("disable")) {
            event.preventDefault()
        }
    })
    $(".confirmButton a").addClass("disable")
})