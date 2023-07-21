$(".service-row").click(function () {
    $(this).parent().siblings().children(".service-row").removeClass("service-show");
    $(this).parent().siblings().children(".service-content").addClass("hidden");
    $(this).toggleClass("service-show");
    $(this).siblings().toggleClass("hidden")
});
