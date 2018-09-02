var myImage = document.querySelector('#cool');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/passport.png') {
      myImage.setAttribute ('src','images/hekko.png');
    } else {
      myImage.setAttribute ('src','images/passport.png');
    }
}

var test = document.getElementById("axe");

test.addEventListener("mouseover", function(event){
    event.target.style.color = "orange";
}, false);

test.addEventListener("mouseout", function(event){
    event.target.style.color = "";
}, false);

/*var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
}
    window.addEventListener('scroll', function(e) {

        last_known_scroll_position = window.scrollY;
        if(!ticking){
            window.requestAnimationFrame(function(){
                doSomething(last_known_scroll_position);
                ticking = false;
            });
            ticking = true;
        }
    });

    */

/*
var myButton = document.querySelector('#button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
//  }
  myButton.onclick = function() {
    setUserName();
  }
  */