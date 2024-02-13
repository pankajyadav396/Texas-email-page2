let output = document.getElementById('output');

function root() {
    output.innerHTML = Math.sqrt(output.innerHTML)
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
}

function num(x) {
    if (output.innerHTML == 0) {
        output.innerHTML = x
    }
    else {
        output.innerHTML += x
    }
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
}
function del() {
    if (output.innerHTML == 0) { output.innerHTML = 0 }
    else {
        output.innerHTML = output.innerHTML.slice(0, -1)
    }
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
}
function power() {
    output.innerHTML = Math.pow(output.innerHTML, 2)
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
} function empty() {
    output.innerHTML = 0;
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
}
function numop(x) {
    if (output.innerHTML == 0) {
        output.innerHTML = x
    }
    else {
        output.innerHTML += x
    }
    document.getElementById('plus').classList.add('pointer-events-none');
    document.getElementById('minus').classList.add('pointer-events-none');
    document.getElementById('multiply').classList.add('pointer-events-none');
    document.getElementById('divide').classList.add('pointer-events-none');
    document.getElementById('dot').classList.add('pointer-events-none');
}

function result() {
    output.innerHTML = eval(output.innerHTML)
    document.getElementById('plus').classList.remove('pointer-events-none');
    document.getElementById('minus').classList.remove('pointer-events-none');
    document.getElementById('multiply').classList.remove('pointer-events-none');
    document.getElementById('divide').classList.remove('pointer-events-none');
    document.getElementById('dot').classList.remove('pointer-events-none');
}