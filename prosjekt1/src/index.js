"use strict";

// Toggle documentation
$("#switch").click(() => {
        if($("#doc").is(":hidden")){
                $("#doc").slideDown();
                $("#switch").text("Hide documentation");

        } else {
                $("#doc").slideUp();
                $("#switch").text("Show documentation");
        }
});