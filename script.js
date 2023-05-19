$(document).ready(function () {

    let active = "none";



    function intialize() {
        $("#result-box").addClass("hidden");
        $("#sidebar-menu a").each(function () {
            if ($(this).hasClass("active")) {
                active = $(this).attr("id");
                console.log("Now active: " + active);
                $("#inp_n").removeClass("is-invalid");
                $("#inp_n").removeClass("is-valid");
            }
        });
    }

    $("#solve-btn").click(function () {
        if (active == "binary-group-spawn") {
            console.log("binary-group-spawn is loaded");
            console.log("binary-group-spawn algorithm is starting...");
            let n = $("#inp_n").val();
            if ($("#inp_n").val().match(/^\d+/)) {
                $("#inp_n").addClass("is-valid");
                $("#inp_n").removeClass("is-invalid");
            } else {
                $("#inp_n").removeClass("is-valid");
                $("#inp_n").addClass("is-invalid");
                return;
            }
            console.log("n is: " + n);
            let binary = [];

            for (let i = 0; i < n; i++) {
                binary.push(0);
            }
            console.log("binary is now created: " + binary.join(""));

            let binaries = [];
            binaries.push(binary.join(""));
            let last_bin = binary.length - 1;
            let current = last_bin;
            while (binary[0] != 1 || current != 0) {
                if (binary[current] == 0) {
                    binary[current]++;
                    binaries.push(binary.join(""));
                    console.log("now spawning: " + binary.join(""));
                    if (current != last_bin)
                        current = last_bin;
                } else {
                    binary[current] = 0;
                    current--;
                }
            }

            console.log("Fetching to UI...");

            let output = "";
            binaries.forEach(function (val, index) {
                output += "<tr><th scope=\"row\">"+ index +"</th> \n";
                output += "<td>"+ val +"</td></tr>"
            });

            $("#result").html(output);

        }
        if (active == "child-group-spawn") {
            console.log("child-group-spawn is loaded");
        }
        $("#result-box").removeClass("hidden");
    });


    intialize();

});