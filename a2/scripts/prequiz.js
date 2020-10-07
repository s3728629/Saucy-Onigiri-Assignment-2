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
