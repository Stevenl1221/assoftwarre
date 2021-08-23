window.onload = roll(50);
function roll(t) {
    var ul1 = document.getElementById("item1");
    var ul2 = document.getElementById("item2");
    var ulbox = document.getElementById("review_box");

    ul2.innerHTML = ul1.innerHTML;

    if (ulbox != null) {
        ulbox.scrollTop = 0; // Set to 0 when no scrolling starts
        var timer = setInterval(rollStart, t); // Setting timer, parameters t Used for interval time (in milliseconds), parameter t The smaller, the faster
        // Mouse migration div Pause scrolling on
        ulbox.onmouseover = function () {
            clearInterval(timer);
        }
        // Mouse removal div Continue scrolling after
        ulbox.onmouseout = function () {
            timer = setInterval(rollStart, t);
        }
    }
 }
 
 // Start scrolling function
 function rollStart() {
     // Stated above DOM Object needs to be declared again as a local object
     var ul1 = document.getElementById("item1");
     var ul2 = document.getElementById("item2");
     var ulbox = document.getElementById("review_box");
     // Normal rolling scrollTop Value+1,Return to 0 when the scrolling height is greater than the list content height
        if (ulbox.scrollTop >= ul1.scrollHeight) {
            ulbox.scrollTop = 0;
        } else {
            ulbox.scrollTop++;
        }

    }