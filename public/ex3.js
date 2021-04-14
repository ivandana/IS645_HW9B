document.querySelector("form").addEventListener("submit",e=>{
    e.preventDefault();

    const formData=new FormData(e.target);
    fetch("http://localhost:3000/api/articles",{
        method:"POST",
        body:formData
        
    })
    .then(response => response.text())
    .then(output => {
        document.getElementById("solution").textContent = output;   
    })
    .catch(err => {
        console.error(err.message);
    });
});
