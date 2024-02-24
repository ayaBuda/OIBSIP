
function convertTemperature() {
  var convertFrom = document.getElementById("convertFrom").value;
  var convertTo = document.getElementById("convertTo").value;
  var temperature = parseFloat(document.getElementById("temperature").value);

  var result;

  if (convertFrom === "celsius" && convertTo === "fahrenheit") {
    result = (temperature * 9 / 5) + 32;
    document.getElementById("result").innerHTML = temperature + "°C is " + result.toFixed(2) + "°F";
  }
  else if (convertFrom === "celsius" && convertTo === "kelvin") {
    result = temperature + 273.15;
    document.getElementById("result").innerHTML = temperature + "°C is " + result.toFixed(2) + "K";
  } 
  else if (convertFrom === "fahrenheit" && convertTo === "celsius") {
    result = (temperature - 32) * 5 / 9;
    document.getElementById("result").innerHTML = temperature + "°F is " + result.toFixed(2) + "°C";
  } 
  else if (convertFrom === "fahrenheit" && convertTo === "kelvin") {
    result = (temperature - 32) * 5 / 9 + 273.15;
    document.getElementById("result").innerHTML = temperature + "°F is " + result.toFixed(2) + "K";
  } 
  else if (convertFrom === "kelvin" && convertTo === "celsius") {
    result = temperature - 273.15;
    document.getElementById("result").innerHTML = temperature + "K is " + result.toFixed(2) + "°C";
  } 
  else if (convertFrom === "kelvin" && convertTo === "fahrenheit") {
    result = (temperature - 273.15) * 9 / 5 + 32;
    document.getElementById("result").innerHTML = temperature + "K is " + result.toFixed(2) + "°F";
  }
}