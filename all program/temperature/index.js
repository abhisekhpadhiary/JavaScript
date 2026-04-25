let toFahrenheit = document.getElementById("tofahrenheit");
let toCelsius = document.getElementById("tocelsius");

function convert(){
    let tmp = Number(document.getElementById("number").value);

    if(toFahrenheit.checked){
        let ftp = (tmp * (9/5)) + 32;
        document.getElementById("result").textContent = `${tmp} in Fahrenheit = ${ftp}`;
    }
    else if(toCelsius.checked){
        let ctmp = (tmp - 32) * (5/9);
        document.getElementById("result").textContent = `${tmp} in Celsius = ${ftp}`;
    }
    else{
        document.getElementById("result").textContent = `Plese select any button`;
    }


}