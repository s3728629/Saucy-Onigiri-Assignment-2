//functions enables the user to change the font size based on the users choices. after they have
//chosen their font size and submitted, the css will be applied onto the other pages and 
//the button also navigates them to the home page.
function changeFont() {
        const size = document.querySelector('.font_selection');
        const selection = size.options[size.selectedIndex].text
         const allElements = document.querySelectorAll('.fchang')
        console.log(allElements);
        if (selection === 'Small (Default)') {
            for (let i = 0; i < allElements.length; i++) {
             console.log(allElements[i]);
             allElements[i].style.fontSize = '1.6 em';
         console.log('small selected')   
         localStorage.changeTextSize = 'Small'
         window.location.href = "index.html"; 
        }
    } else if (selection === 'Medium') {
        for (let i = 0; i < allElements.length; i++) {
            console.log(allElements[i]);
            allElements[i].style.fontSize = '2.6em';
        console.log('medium selected') 
        window.location.href = "index.html"; 
        localStorage.changeTextSize = 'Medium'
       }
    } else if (selection === 'Large') {
        for (let i = 0; i < allElements.length; i++) {
            console.log(allElements[i]);
            allElements[i].style.fontSize = '3.6em';
        console.log('large selected')    
        window.location.href = "index.html"; 
        localStorage.changeTextSize = 'Large'
       }
    }
}

//This function is supposed to hide and show divs (iphone and andriod content on home page)
//Unfortunately, this was not completed in time.. Learning and coding the font size option
//took too long.
function changeDivs() {
    const selectedDiv1 = document.querySelectorAll('.div1')
    const selectedDiv2 = document.querySelectorAll('.div2')
    const selectedDiv3 = document.querySelectorAll('.div3')
     if (selection === 'Apple (eg. iPhone)') {
        for (let i = 0; i < selectedDiv1.length; i++) {
            document.getElementById("div1").style.display = "block";  
        window.location.href = "index.html"; 
        localStorage.changeTextSize = 'Apple (eg. iPhone)'
       }
    } 
    else if (selection === 'Andriod (eg. Samsung, Google)') {
        for (let i = 0; i < selectedDiv2.length; i++) {
            document.getElementsByClassName("div2").style.display = "block";
        window.location.href = "index.html"; 
        localStorage.getElementById = 'Andriod (eg. Samsung, Google)'
       }
    }  else if (selection === 'Both') {
        for (let i = 0; i < selectedDiv3.length; i++) {
            document.getElementsByClassName("div3").style.display = "block";
        window.location.href = "index.html"; 
        localStorage.getElementById = 'Both'
       }
    }
    else {
            alert('Please select a size.')
    }
}
//This part of the code applies the functions onto the 'Finished' Button on the prequiz.html file.
document.querySelector('._button').addEventListener('click', function () {
    changeFont();
    changeDivs();
    window.location = 'index.html'
})
