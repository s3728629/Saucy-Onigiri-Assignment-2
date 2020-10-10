//this is the main function 
function checkForm() {

    if (!(c1.checked)) {
        document.getElementById("question1Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ1").style.display = "inline";
        return false;
        
    }
}

function checkForm2() {

    if (!(a2.checked)) {
        document.getElementById("question2Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ2").style.display = "inline";
        return false;
       
    }
}

function checkForm3() {

    if (!(a3.checked)) {
        document.getElementById("question3Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ3").style.display = "inline";
        return false;
       
    }
}





