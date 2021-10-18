// https://www.w3schools.com/js/js_typeof.asp

var string = "I'm a string"; // this is a string
var num = 6; // this is a number
var checkbox = true; // this is a boolean (true/false)

const shopping_list = ["Bread", "Milk", "Eggs", "Coffee", "Chocolate", "Tea", "Ice Cream"];

// console.log(shopping_list[2]);
// console.log(shopping_list.length);

// for (let i = 0; i < shopping_list.length; i++) {
//     console.log(shopping_list[i]);
// }

document.getElementById('print').addEventListener('click', function(){
    let compiled_list = "<ul>";
    for (let i = 0; i < shopping_list.length; i++) {
        compiled_list += "<li>" + shopping_list[i] + "</li>";
    }
    compiled_list += "</ul>";

    document.getElementById('shopping-printout').innerHTML = compiled_list;

});