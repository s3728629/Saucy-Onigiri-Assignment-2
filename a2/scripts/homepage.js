
document.addEventListener('DOMContentLoaded', function () {
  var bodys = document.querySelectorAll('.fchange')
  var selectedDiv1 = document.querySelectorAll('.div1')
  var selectedDiv2 = document.querySelectorAll('.div2')
  var selectedDiv3 = document.querySelectorAll('.div3')
  console.log(bodys)
//functions enables the user to change the font size based on the users choices. after they have
//chosen their font size and submitted, the css will be applied onto the other pages that have
//the 'fchange' class.
if (localStorage.changeTextSize === 'Small') {
    for (let i = 0; i < bodys.length; i++) {
        bodys[i].style.fontSize = '1.6 em';   
        console.log(bodys[i])
    }
} else if (localStorage.changeTextSize === 'Medium') {
    for (let i = 0; i < bodys.length; i++) {
        bodys[i].style.fontSize = '2.6em';   
        console.log(bodys[i])
    }
} else if (localStorage.changeTextSize === 'Large') {
    for (let i = 0; i < bodys.length; i++) {
        bodys[i].style.fontSize = '3.6em';   
        console.log(bodys[i])
    }
    //This else if statement is supposed to hide and show divs (iphone and andriod content on home page)
    //Unfortunately, this was not completed in time.. Learning and coding the font size option
    //took too long.
} else if (localStorage.getElementsByClassName === 'Apple (eg. iPhone)') {
    for (let i = 0; i < selectedDiv1.length; i++) {
        document.getElementsByClassName("div1").style.display = "block";
        document.getElementsByClassName("div2").style.display = "none";
    }
}

});