var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myVariable;
myVariable = 'Bob';
myVariable;

let iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('yay , i love it');
}else{
 alert('but i loved chocolate');   
}
//alert是警告小視窗

function multiply(num1,num2) {
    //custom function
  let result = num1 * num2;
  return result;
}


document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
    //queryselector >> 選擇元素
    //onclick >>點擊
}