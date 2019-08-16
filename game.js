var firstBox = document.querySelector("#one")
var secondBox = document.querySelector("#two")
var thirdBox = document.querySelector("#three")
var fourthBox = document.querySelector("#four")
var fiveBox = document.querySelector("#five")
var sixBox = document.querySelector("#six")
var sevenBox = document.querySelector("#seven")
var eightBox = document.querySelector("#eight")
var nineBox = document.querySelector("#nine")
var button = document.querySelector("button[type='button']")
var squeres = document.querySelectorAll("td")



firstBox.addEventListener("click", function(){
  var a = firstBox.textContent
  if(a == ""){
    firstBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    firstBox.textContent = "O"
  }
  else{
    firstBox.textContent = ""
  }
})

secondBox.addEventListener("click", function(){
  var a = secondBox.textContent
  if(a == ""){
    secondBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    secondBox.textContent = "O"
  }
  else{
    secondBox.textContent = ""
  }
})

sevenBox.addEventListener("click", function(){
  var a = sevenBox.textContent
  if(a == ""){
    sevenBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    sevenBox.textContent = "O"
  }
  else{
    sevenBox.textContent = ""
  }
})

thirdBox.addEventListener("click", function(){
  var a = thirdBox.textContent
  if(a == ""){
    thirdBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    thirdBox.textContent = "O"
  }
  else{
    thirdBox.textContent = ""
  }
})

fourthBox.addEventListener("click", function(){
  var a = fourthBox.textContent
  if(a == ""){
    fourthBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    fourthBox.textContent = "O"
  }
  else{
    fourthBox.textContent = ""
  }
})

fiveBox.addEventListener("click", function(){
  var a = fiveBox.textContent
  if(a == ""){
    fiveBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    fiveBox.textContent = "O"
  }
  else{
    fiveBox.textContent = ""
  }
})

sixBox.addEventListener("click", function(){
  var a = sixBox.textContent
  if(a == ""){
    sixBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    sixBox.textContent = "O"
  }
  else{
    sixBox.textContent = ""
  }
})

eightBox.addEventListener("click", function(){
  var a = eightBox.textContent
  if(a == ""){
    eightBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    eightBox.textContent = "O"
  }
  else{
    eightBox.textContent = ""
  }
})

nineBox.addEventListener("click", function(){
  var a = nineBox.textContent
  if(a == ""){
    nineBox.textContent = "X"
    console.log("x");
  }
  else if(a == "X"){
    nineBox.textContent = "O"
  }
  else{
    nineBox.textContent = ""
  }
})



button.addEventListener("click", function(){
  for (var i = 0; i < squeres.length; i++) {
    squeres[i].textContent=""
  }
})
// firstBox.addEventListener("click", function(){
//   firstBox.textContent = ""
// })
// firstBox.addEventListener("click", function(){
//   firstBox.textContent = ""
// })
