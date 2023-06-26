import * as stack from './stack.js';

window.onload = function () {
    console.log("done");

    let pop = document.getElementById('pop');
    let push = document.getElementById('push');
    let peek = document.getElementById('peek');
    let display = document.getElementById('top_of_stack');

    pop.addEventListener("click", function () {
        let text = "Tog bort " + stack.pop();
        alert(text);
    });

    push.addEventListener("click", function () {
        let x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function () {
        display.innerHTML = stack.peek();
    });
};