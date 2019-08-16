var table = document.querySelectorAll("td")
var button = document.querySelector("button[type='button']")

button.addEventListener("click", function(){
  for(var i=0;i<table.length;i++){
    table[i].textContent=""
  }
})

var tic = function(){
   if(this.textContent==""){
     this.textContent="X"
   }else if(this.textContent=="X"){
     this.textContent="O"
   }else{
     this.textContent=""
   }
}

for(var i=0;i<table.length;i++){
  table[i].addEventListener("click", tic)
}
