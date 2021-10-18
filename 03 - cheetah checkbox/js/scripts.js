// checking the 'cage' checkbox
document.getElementById("cage").addEventListener("click", function(){
    console.log("Check box is: " + this.checked);
    // 'this' is referring to the selected "cage" checkbox
    // var checked = document.getElementById("cage").checked;
    // console.log(checked);
});

document.getElementById("vet").addEventListener("click", function(){
    console.log("Vet button pressed");

    // check the "cage" checkbox
    var cage_status = document.getElementById("cage").checked;
    console.log(cage_status);

    // select email paragraph
    var email_paragraph = document.getElementById("email");

    // if "cage" is true
    if (cage_status == true) {

        console.log("Cage is closed. Update email message.")
        // change email paragraph
        email_paragraph.innerHTML = "Now is a good time to vax the cheetah";

    // if "cage" is false
    } else if (cage_status == false) {

        console.log("Cage is open. Run!!!");
        // change email paragraph to something else
        email_paragraph.innerHTML = "Get your running shoes on!";

    } else {
        console.error("Error. Check box is in limbo");
    } 
    
});