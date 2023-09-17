document.getElementById("kiertekeles").onclick = function () {
    var testsuly = document.getElementById('testsuly').value;
    var magassag = document.getElementById('magassag').value;

    var BMI = testsuly / (magassag * magassag) * 10000;

    const sulyosansovany = 16;
    const mersekeltemsovany = 17;
    const enyhesovany = 18.5;
    const normal = 25;
    const tulsulyos = 30;
    const elsoelhiz = 35;
    const masodikelhiz = 40;

    if (magassag === "" || testsuly === "") {
        document.getElementById('result').innerHTML = "Nem adott meg minden adatot!";
    } else {
        if (BMI < sulyosansovany) {
            document.getElementById('result').innerHTML = "Maga súlyosan sovány!";
        } else if (BMI < mersekeltemsovany) {
            document.getElementById('result').innerHTML = "Maga mérsékelten sovény!";
        } else if (BMI < enyhesovany) {
            document.getElementById('result').innerHTML = "Maga enyhén sovány!";
        } else if (BMI < normal) {
            document.getElementById('result').innerHTML = "Maga normális testzsírszázalékkal rendelkezik!";
        } else if (BMI < tulsulyos) {
            document.getElementById('result').innerHTML = "Maga túl súlyos!";
        } else if (BMI < elsoelhiz) {
            document.getElementById('result').innerHTML = "Maga első fokú elhízott!";
        } else if (BMI < masodikelhiz) {
            document.getElementById('result').innerHTML = "Maga második fokú elhízott!";

        }
        else {
            document.getElementById('result').innerHTML = "Maga harmad fokú elhízott!";

        }
   
    }
    
}

