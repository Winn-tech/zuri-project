var name = "Nwuizu Oluchukwu Godwin";
var height = 5.5;
var country = "nigeria";
var firstLetter = country[0];
var fl = firstLetter.toUpperCase();
var cn = country.slice(1,7);
var myCountry = fl + cn;
var result = Array(name, height, myCountry);
for(i =0; i< result.length; i++){
    alert(result[i]);
}