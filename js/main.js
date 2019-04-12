$(() => {

    var $toggleBtn = $("#toggleBtn");
    // var $months = $(".month.calendar");
    $toggleBtn.on("click", () => {
        console.log("btn clicked");
        // console.log($months.length);
        $(".month.calendar").toggleClass("list");
        $(".day").toggleClass("list");
    })

})