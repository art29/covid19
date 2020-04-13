var h2 = document.getElementById('CountUp');
var to = h2.getAttribute('data-to');
var speed = h2.getAttribute('data-speed');
var count = 1;
var intervalId;

intervalId = setInterval(counter, (speed/to));

function counter() {
    count+=9;
    if(count >= to)  {
        clearInterval(intervalId);
        h2.innerHTML = to;
    } else {
        h2.innerHTML = count;
    }
}


function isOutOfViewport(elem) {

    // Get element's bounding
    var bounding = elem.getBoundingClientRect();

    // Check if it's out of the viewport on each side
    var out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;

    return out;

}

var current;
var changed = 0;

var elem = document.querySelector('#CountUp');

function logViewport() {
    var isOut = isOutOfViewport(elem);
    if(current != isOut.any) {
        if (isOut.any == false) {
            if(changed == 0) {
                count = 1;
                intervalId = setInterval(counter, (speed/to));
            }
            changed = 1
        }
    }
    current = isOut.any;
}

logViewport();
window.addEventListener('scroll', logViewport, false);