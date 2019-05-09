window.onload = main;


function main(){
    console.log("in main function");
    var myForm = document.getElementById("form_1");
    myForm.addEventListener("submit", validateForm);
}




function validateForm(event){
    
    console.log("validating form");
    event.preventDefault(event);
    var myForm = document.getElementById("form_1");
}