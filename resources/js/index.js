
const menuBtn = document.getElementById("menu");
const menuContainer = document.getElementsByClassName("menu_container")[0];
const closeBtn = document.getElementById("close");

const login = document.querySelector(".login");

menu.addEventListener("click", () => {
    menuContainer.style.left = "0"
})

closeBtn.addEventListener("click", () => {
    menuContainer.style.left = "-80%"
})

document.querySelector(".getY").innerHTML = new Date().getFullYear();




const hearts = document.querySelectorAll(".heart_container");
const heart_img = document.querySelectorAll(".heart_img");

// here here
heart_img.forEach(img =>{
  img.onclick = function({target}){
    target.parentElement.classList.toggle("active")

  }
})


//------- login section ------------------------------------
// login
const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing form from submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");

      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    // window.location.href = "/index.html";
    document.querySelector(".container").style.visibility = "hidden";
    document.getElementById("home").style.filter = "brightness(100%)";
    
   
  }
}

const loginContainer = document.querySelector(".container");
const home = document.getElementById("home");

login.onclick = function(){
  updateLogin();
}

function updateLogin(){
  loginContainer.style.visibility = "visible";
  home.style.filter = "brightness(50%)";
  login.style.visibility = "hidden";
}

