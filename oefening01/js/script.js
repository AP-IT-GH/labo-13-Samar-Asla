"use strict"
let firstName = prompt("wat is jouw voornaam");
let surename = prompt(" wat is jouw achternaam");
let age = prompt("wat is jouw leeftijd");
if(firstName === " " ){
    console.log("voornaam is leeg" );
}else if (surename ===" ")
{
    console.log("achternaam is leeg");
}else if(!firstName || !surename){
    console.log("Naam/Achternaam ontbreekt");

}
else if(age < 12 && age > 60){
    console.log("Leeftijd niet tussen 12 en 60");
}else{
    console.log(`voornaam ${firstName} en achternaam ${surename}
         leeftijd ${ age}`);
}