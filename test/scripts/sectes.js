var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bstar.png') {
      myImage.setAttribute ('src','images/wstar.png');
    } else {
      myImage.setAttribute ('src','images/bstar.png');
    }
}
//https://developer.mozilla.org/zh-TW/docs/Learn/Getting_started_with_the_web/JavaScript_basics