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

$("#Overlay").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $(this).addClass("hidden");
})

$(".MenuLink").click(function () {
    $("#Menu").addClass("max-[698px]:hidden");
    $("#Overlay").addClass("hidden");
})



$(document).ready(function () {
    var currentDate = new Date();

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var month = monthNames[currentDate.getMonth()];
    var dayOfWeek = dayNames[currentDate.getDay()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();

    var formattedDate = month + " " + date + ", " + year;


    function updateTime() {
        var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        $("#currentTime").text(currentTime);
    }

    updateTime();

    $("#currentDate").text(formattedDate);
    $("#currentDay").text(dayOfWeek);
    setInterval(updateTime, 1000);
});


function showModal() {
    document.getElementById("myModal").style.display = "flex";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}


function checkShopStatus() {
    var currentTime = new Date();
    var openingTime = new Date();
    var closingTime = new Date();
    var DayOfWeek = currentTime.getDay();



    if (DayOfWeek === 0) {
        // Sunday, set opening time to 10:00 AM and closing time to 12:30 PM
        openingTime.setHours(10, 0, 0);
        closingTime.setHours(12, 30, 0);
    } else {
        // Other days, set opening time to 10:00 AM and closing time to 08:00 PM
        openingTime.setHours(10, 0, 0);
        closingTime.setHours(20, 0, 0);
    }

    if (currentTime < openingTime || currentTime >= closingTime) {
        showModal();
    }
}


checkShopStatus();