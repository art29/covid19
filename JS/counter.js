var h2 = document.getElementById('CountUp');
var to = h2.getAttribute('data-to');
var speed = h2.getAttribute('data-speed');
var count = 1;
var intervalId;

function counter() {
    count+=9;
    if(count > to)  {
        clearInterval(intervalId);
        h2.innerHTML = to;
    } else {
        h2.innerHTML = count;
    }
}

intervalId = setInterval(counter, (speed/to));
