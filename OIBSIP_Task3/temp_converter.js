
function convertBtn() {
    var temperature = document.getElementById("temperature").value;
    var tempType = document.getElementById("convertTo").value;

    if(tempType == "Fahrenheit"){
        var result = temperature * 33.8;
        document.getElementById("result").textContent = "Result: " + result;
    }

    
}