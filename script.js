document.getElementById("cursor").addEventListener("click", myFunction);
function myFunction() {
  let genre = document.getElementById("genre").value;

  if (genre == "Science Non-Fiction") {
    alert("That's right!");
  }
  
  else {
    alert("Try again.");
  }
}

  
