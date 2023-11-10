function expoente() {
    let n = parseInt(expoente_2.value);
    let exp = 0;
    exp = Math.pow(2, n);
    alert(exp);
}

function fatorial() {
    let n = parseInt(fatorial_n.value);
    let fat = n;

    if (n < 0) {
        alert("Não é possível utilizar números negativos.");
    }

    else if (n == 0 || n == 1) {
        alert("O resultado será 1.");
    }

    else {
        while (n > 1) {
            fat = fat * (n - 1);
            n = n - 1;
        }

        alert(fat);
    }
}