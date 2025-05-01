let lengthResult = document.getElementById("length-result");
let volumeResult = document.getElementById("volume-result");
let massResult = document.getElementById("mass-result");
let convertButton = document.getElementById("convert-button");
let metric = document.getElementById("metric");


convertButton.addEventListener("click", function(){
   lengthResult.innerHTML = `${Number(metric.value)} meters = ${(Number(metric.value) * 3.281).toFixed(3)} feet | ${Number(metric.value)}
    feet = ${(Number(metric.value) * .3048).toFixed(3)} meters`;
    volumeResult.innerHTML = `${Number(metric.value)} liters = ${(Number(metric.value) * 0.264172).toFixed(3)} gallons | ${Number(metric.value)}
    gallons = ${(Number(metric.value) * 3.78541).toFixed(3)} liters`;
    massResult.innerHTML = `${Number(metric.value)} kilos = ${(Number(metric.value) * 2.20462).toFixed(3)} pounds | ${Number(metric.value)}
    pounds = ${(Number(metric.value) * 0.453592).toFixed(3)} kilos`;
});