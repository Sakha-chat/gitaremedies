const welcomeMessage = `"Hare Krishna! Welcome to Gita Remedies"\n
                        `;

const element = document.getElementById("shloks");
let index = 0;
let typingTimer;

function writeMessage() {
    if (index < welcomeMessage.length) {
        element.innerHTML += welcomeMessage.charAt(index);
        index++;
        typingTimer = setTimeout(writeMessage, 100); 
    } else {
       
        clearTimeout(typingTimer); 
    }
}

document.getElementById("dropdown").addEventListener("change", function() {
    clearTimeout(typingTimer); 
});

writeMessage();

const body = document.querySelector('body');
const toggle = document.getElementById("toggle");
const icon = document.getElementById("icon");

toggle.onclick = function() {
  toggle.classList.toggle("active");
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}

function displayMessage() {
    const message = document.createElement("div");
    if (document.body.classList.contains("light-mode")) {
      message.textContent = "Switch to dark mode";
    } else {
      message.textContent = "Switch to light mode";
    }
    message.classList.add("hover-message");
    document.body.appendChild(message);
}
  
  
  function hideMessage() {
    const message = document.querySelector(".hover-message");
    if (message) {
      message.remove();
    }
  }
