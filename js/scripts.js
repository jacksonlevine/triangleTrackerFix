onload = function() {

  let form = document.querySelector("form");

  form.onsubmit = function(event) {
    event.preventDefault();
    takeForm(event);
  }
  onclick = takeForm;

  function takeForm(event) {
    let answerSpot = document.getElementById("theAnswer");
    let num1 = parseFloat(document.getElementById("side1").value);
    let num2 = parseFloat(document.getElementById("side2").value);
    let num3 = parseFloat(document.getElementById("side3").value);

    if(num1 + num2 <= num3 || num2 + num3 <= num1 || num3+ num1 <= num2) {
      answerSpot.innerText = "Not a triangle"
    } else {

      if(num1 === num2 && num1 === num3) {
        answerSpot.innerText = "Equilateral"
      } else {
        if(num2 === num1 || num1 === num3 || num2 === num3) {
          answerSpot.innerText = "Isosceles"
        } else {
          answerSpot.innerText = "Scalene"
        }
      }
    }
  }
}