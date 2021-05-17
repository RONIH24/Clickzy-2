function number() {
  var x = document.getElementById("code")
  x.innerHTML = Math.floor((Math.random() * 9999999) + 111111);
}

number.call()