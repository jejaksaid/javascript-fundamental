// function Warn() {
//     alert("This is message warning");
//     document.write("Warning Message");
// }

// function getConfirmation() {
//     var retVal = confirm("Do you want to continue?");
//     if (retVal == true) {
//         document.write("user want to continue");
//         return true;
//     } else {
//         document.write("user does not want to continue");
//         return false;
//     }
// }

function getValue() {
    var retVal = prompt("Enter your name :" , "Your name here");
    document.write("You entered " + retVal);
}