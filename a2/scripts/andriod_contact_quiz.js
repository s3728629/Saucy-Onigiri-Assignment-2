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

    if (!(b3.checked)) {
        document.getElementById("question2Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ2").style.display = "inline";
        return false;
       
    }
}


function checkForm5() {

    if (!(b5.checked)) {
        document.getElementById("question5Error").style.display = "inline";
        return false;
    }
    else {
        document.getElementById("correctQ5").style.display = "inline";
        return false;
        
    }
}




