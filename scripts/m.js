/**
 * Created by i-3 on 28/1/2017.
 */
$(document).ready(function() {
    $("li").hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    );

    $("#file").click( function() {
        document.getElementById("myDropdown").classList.toggle("show");
    });
    $("#logout-btn").click( function() {
        document.getElementById("log-Dropdown").classList.toggle("show");
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }



});

