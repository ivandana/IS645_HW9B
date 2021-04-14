document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    console.log(formData);
    
    fetch("http://localhost:3000/ex1", {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(result => { 
        document.getElementById("output").textContent = result;
      })
      .catch(err => {
        console.error(err.message);
      });
    });