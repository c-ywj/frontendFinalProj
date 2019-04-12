$(() => {

    var $toggleBtn = $("#toggleBtn");
    // var $months = $(".month.calendar");
    $toggleBtn.on("click", () => {
        $(".month.calendar").toggleClass("list");
        $(".day").toggleClass("list");
        if($toggleBtn.text() == "List View") {
            $toggleBtn.text("Calendar View");
        } else {
            $toggleBtn.text("List View");
        }
    })

})