var h2 = document.getElementById('CountUp');
to = h2.getAttribute('data-to');
speed = h2.getAttribute('data-speed');

var count = 1;
var intervalId;

function counter() {
    count+=7;
    if(count > to)  {
        clearInterval(intervalId);
        h2.innerHTML = to;
    } else {
        h2.innerHTML = count;
    }
}

intervalId = setInterval(counter, (speed/to));
