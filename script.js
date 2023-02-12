
// element that gets the done Button
doneButton = document.getElementById("done");

// gets the fill button
fillButton = document.getElementById("fill");
// gets all the inputs fields
inputs = document.getElementsByTagName("input");

//code to set the numbers when clicked on the button. This will not let change the numbers 
doneButton.addEventListener('click', setFinal);
function setFinal(){
    doneButton.style.backgroundColor = 'red';
    for (let i= 0; i<25; i++){
        inputs[i].setAttribute('readonly', true); 
    
    } 
}

//code to fill up the fields from 1- 25 randomly when clicked.
 var numbers = [];
 do{
    num = Math.floor(Math.random() * 25 +1);
    if(!(numbers.includes(num))){
        numbers.push(num);
    }
 } while((numbers.length !==25));

// no since we have the numbers that are unique, when clicked on the 
fillButton.addEventListener('click',fill);
  
function fill(){
    for (let i= 0; i<25; i++){
        console.log("test for fill button");
        inputs[i].setAttribute('value',numbers[i]);

    } 
}

// Now once the digits are set, we have to find a way to cross the numbers
// once the numbers are crossed, we have to find a way to store the numbers, maybe in a  grid system
