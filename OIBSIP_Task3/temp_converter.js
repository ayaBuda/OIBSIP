console.log("hello world")
const convertBtn = document.querySelector(".convertBtn");

convertBtn.addEventListener("click", () => {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const tempType = document.getElementById("convertTo").value;

    if(tempType == "Fahrenheit"){
        var result = (temperature * 9/5 ) + 32;
        document.getElementById("result").textContent = "Result: " + result.toFixed(2) + " °F";
        // document.getElementById("outputResult").textContent = "Result: " + result.toFixed(2) + " °F";
        console.log("this is the temp: "+result);
    }

    else if(tempType == "Celsius"){
        const result = (temperature -32) * 5/9;
        document.getElementById("result").textContent = "Result: " + result.toFixed(2) + " °C";
        // document.getElementById("outputResult").textContent = "Result: " + result.toFixed(2) + " °C";
    }
});

// function convertBtn() {
//     var temperature = parseFloat(document.getElementById("temperature").value);
//     var tempType = document.getElementById("convertTo").value;

//     if(tempType == "Fahrenheit"){
//         var result = (temperature * 9/5 ) + 32;
//         document.getElementById("outputResult").textContent = "Result: " + result.toFixed(2) + " °F";
//         console.log("this is the temp: "+result);
//     }

//     else if(tempType == "Celsius"){
//         var result = (temperature -32) * 5/9;
//         document.getElementById("outputResult").textContent = "Result: " + result.toFixed(2) + " °C";
//     }

    
// }