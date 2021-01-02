// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* 
// Debug via console.log
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    // FIX BUG
    value: Number(prompt("Degrees celcius:")),
  };

  // FIND BUG
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// IDENTIFY BUG
console.log(measureKelvin()); */

// Coding Challange

const forecast = {
  temps: [17, 21, 23],
  temps2: [12, 5, -5, 0, 4],
  print: function (temps) {
    const lengthOfTemps = temps.length;
    let forecastString = "";
    for (let i = 0; i < lengthOfTemps; i++) {
      if (i == lengthOfTemps - 1)
        forecastString += ` ... ${temps[i]}C in ${i + 1} days ... `;
      else forecastString += ` ... ${temps[i]}C in ${i + 1} days `;
    }
    console.log(forecastString);
  },
};

forecast.print(forecast.temps2);
