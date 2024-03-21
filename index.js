function buttonClick() {
    const button = document.getElementById("popButton");
    const message = document.getElementById("message");
    const sound = document.getElementById("clickSound"); // Get the audio element (optional)

    if (sound) { // Play sound if audio element exists
      sound.play();
    }
    
    document.body.classList.remove("ini"); // Remove initial class
    document.body.classList.add("cl"); // Add new class
    button.classList.add("hidden"); // Add the hidden class to the button
    message.style.display = "block"; // Show the message
  }
  
