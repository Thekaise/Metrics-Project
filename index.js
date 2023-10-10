/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertLen = document.getElementById("convert-meter")
const convertVol = document.getElementById("convert-volume")
const convertMass = document.getElementById("convert-mass")
const convertValue = document.getElementById("convert-btn")
const number = document.getElementById("num-value")

const meter = 3.281
const liter = 0.264
const kilogram = 2.204



convertValue.addEventListener("click", function(){
    let num = number.value    
    // Convertion meter to feet | feet to meter
    const meterToFeet = num * meter
    const feetToMeeter = num * ( 1 / meter ).toFixed(4)  
    
    // Convertion liter to gallons | gallons to liter
    const literToGallons = num * liter
    const gallonsToLiter = num * ( 1 / liter )
    
    // Convertion Kilograms to pounds | pounds to kilograms
    const kiloToPounds = num * kilogram
    const poundsToKilo = num * ( 1 / kilogram )
    
    if( num === "" ){
         alert("Please Fill In All Required Fields");
    }else{
        convertLen.innerHTML = `${num} meters = ${meterToFeet.toFixed(3)} feet | 
                            ${num} feets = ${feetToMeeter.toFixed(3)} meter`   
                            
        convertVol.innerHTML = `${num} liters = ${literToGallons.toFixed(3)} gallons | 
                                ${num} gallons = ${gallonsToLiter.toFixed(3)} liters` 
                                
        convertMass.innerHTML = `${num} kilograms = ${kiloToPounds.toFixed(3)} pounds | 
                                ${num} pounds = ${poundsToKilo.toFixed(3)} kilograms` 
        
    }
    
})
/*
function lengthConvertion(){
    let meterToFeet = num * meter
    let feetToMeeter = num * ( 1 / meter )  
}

function volumeConvertion(){
    let meterToFeet = num * meter
    let feetToMeeter = num * ( 1 / meter )  
}

function massConvertion(){
    let meterToFeet = num * meter
    let feetToMeeter = num * ( 1 / meter )  
}
*/