    const callbackButton = () => {
        alert(miText.value);
        
    };
    const miText = document.getElementById("input");

  const miButton = document.getElementById("button");
miButton.addEventListener("click", callbackButton);
