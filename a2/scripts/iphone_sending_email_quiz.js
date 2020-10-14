//this is the main function 
function checkForm() {

    if (!(b1.checked)) {
        document.getElementById("question1Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ1").style.display = "inline";
        return false;
        
    }
}

function checkForm2() {

    if (!(b2.checked)) {
        document.getElementById("question2Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ2").style.display = "inline";
        return false;
       
    }
}





