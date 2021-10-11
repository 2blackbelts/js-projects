/* 
    Hello
    I'm a block comment
    Third line here
*/

// alert("External script is working!");
console.log("I'm external."); // This is a test message

function change() {
    var x = "Welcome back old world!";
    document.querySelector('h1').innerText = x;
    console.log("The change function has been run");
}

function styler() {
    document.getElementById('title').style.color = "red";
    console.log("Styler has run - h1 is now red.");
}


