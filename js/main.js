$(".service-row").click(function () {
    $(this).parent().siblings().children(".service-row").removeClass("service-show");
    $(this).parent().siblings().children(".service-content").addClass("hidden");
    $(this).toggleClass("service-show");
    $(this).siblings().toggleClass("hidden")
});


$("#MenuOpen").click(function () {
    $("#Menu").toggleClass("max-[698px]:hidden");
    $("#Overlay").toggleClass("hidden");
});

$("#MenuClose").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $("#Overlay").addClass("hidden");
});

