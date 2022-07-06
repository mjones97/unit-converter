const convertBtn = document.getElementById('convert-btn')
let metersFeet = document.getElementById("meter-feet");
let litersGallons = document.getElementById("liters-gallons");
let kilogramsPounds = document.getElementById("kilograms-pounds")

convertBtn.addEventListener("click", function() {
    const value = Number(document.getElementById('unit').value)
    const meter = (value * (1/3.281)).toFixed(3)
    const feet = (value * 3.281).toFixed(3)
    const liter = (value * (1/0.264)).toFixed(3)
    const gallon = (value * 0.264).toFixed(3)
    const kilogram = (value * (1/2.204)).toFixed(3)
    const pound = (value * 2.204).toFixed(3)

    metersFeet.innerHTML = `<h2 class="card-head">Length (Meter/Feet)</h2>
                            <p>${value} meters = ${feet} feet | ${value} feet = ${meter} meters
                            </p>`

    litersGallons.innerHTML = `<h2 class="card-head">Volume (Liters/Gallons)</h2>
                                <p>${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters
                                </p>`

    kilogramsPounds.innerHTML = `<h2 class="card-head">Mass (Kilograms/Pounds)</h2>
                                <p>${value} kilograms = ${pound} pounds | ${value} pounds = ${kilogram} kilograms
                                </p>`
})