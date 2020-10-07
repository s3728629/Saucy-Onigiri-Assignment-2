// info on adding devents https://www.w3schools.com/js/js_events.asp

//addEventlistener (adding and removing) 
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp

//if statement. if user chooses blank, do the corresponding condition.

//var homePage = 'index.html';

function changePreferences() {
        
        window.location.href ="index.html";
        homePage.querySelector("h2").style.backgroundColor= "blue";
}


function changeFont() {
        const size = document.querySelector('.font_selection');
        const selection = size.options[size.selectedIndex].text
         const allElements = document.querySelectorAll('.fchang')
        console.log(allElements);
        if (selection === 'Small') {
            for (let i = 0; i < allElements.length; i++) {
             console.log(allElements[i]);
             allElements[i].style.fontSize = '3rem';
         console.log('small selected')    
        }
    } else if (selection === 'Medium') {
        for (let i = 0; i < allElements.length; i++) {
            console.log(allElements[i]);
            allElements[i].style.fontSize = '4rem';
        console.log('medium selected')    
       }
    } else if (selection === 'Large') {
        for (let i = 0; i < allElements.length; i++) {
            console.log(allElements[i]);
            allElements[i].style.fontSize = '5rem';
        console.log('large selected')    
       }
    } else {
            alert('Please select a size.')
    }
}
