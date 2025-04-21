function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    let y = document.forms["myForm"]["message"].value;
    let z = document.forms["myForm"]["email"].value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (x == ""||y==""||z=="") {
      alert("Please fill out all fields before sending a message");
      return false;
    }else{
        if(pattern.test(z)==false){
            alert("Please enter a valid email address before sending a message")
        }else{
            alert("You have sent a message!")
        }
    }


}



function showDetails(){
    const y = document.getElementById("myDetails1");
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Hide Details"
    } else {
      x.style.display = "none";
      y.innerHTML = "Show Details"
    }
}


function showDetails1(){
    const y = document.getElementById("myDetails2");
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "Hide Details"
    } else {
      x.style.display = "none";
      y.innerHTML = "Show Details"
    }
}


// }

// function showDetails1(){
//     var x = document.getElementById("myDetails1");


// }


// function validateForm(){

//     if (localStorage.getItem("name")==null||localStorage.getItem("message")==null||localStorage.getItem("email")==null){

//         alert("Please fill out all fields before sending a message")
    
//     }

// }


// function valid(email) {
//     const input = document.createElement('input');
//     input.type = 'email';
//     input.value = email;
//     return input.checkValidity();
// }

// function emailValidation(){

//     if (localStorage.getItem("email")){
        
//     }
// }
function myFunction() {
  // Declare variables
  var input, filter, ul, li, i, txtValue;

  // What the user inputs
  input = document.getElementById("myInput");

  // Convert input to uppercase for case-insensitive match
  filter = input.value.toUpperCase();

  // Reference the unordered list and its list items
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items
  for (i = 0; i < li.length; i++) {
    // Get text from the list item
    txtValue = li[i].textContent || li[i].innerText;

    // Check if user input exists in the item text
    li[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
  }
}

