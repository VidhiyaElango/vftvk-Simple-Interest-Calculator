function compute()
{
    var p, n,r;
    p = document.getElementById("principal").value;
    if(p <= 0){
        alert("Enter Number greater than 0")
        return false
    }
    n = document.getElementById("years").value;
    r = document.getElementById("rate").value;
    let interest = parseInt((p * n * r) / 100)
    document.getElementById ('num').innerHTML =`<p>If you deposit <span id="hl-span">${p}</span> at an interest rate of <span id="hl-span">${r}</span> you will receive an amount of <span id="hl-span">${interest}</span></p>`;
}
(function() {
    var number=50;
    var optionList = "";
    for (var x=1; x<=number; x++) {
    optionList += "<option>"+x+"</option>";
    }
   var select = document.getElementById('years')
    select.innerHTML = optionList;
 
 })();

