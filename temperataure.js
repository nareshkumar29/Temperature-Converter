const cel = document.getElementById("celsius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");


cel.addEventListener("input", ()=>{
    
    fah.value=parseFloat(cel.value * 1.8) + 32;
    kel.value=parseFloat(cel.value)+273.15;
})

fah.addEventListener("input", ()=>{
    cel.value=parseFloat(fah.value - 32)/1.8;
    kel.value=(parseFloat(fah.value-32)/1.8)+273.15; 
})

kel.addEventListener("input", ()=>{
    cel.value=parseFloat(kel.value-273.15);
    fah.value=(parseFloat(kel.value-273.15)*1.8)+32;
})





