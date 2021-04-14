const travelingInfo = 
    {
        name:"Vandana",
        countries:[
            {
                name:"US",
                year: 2020
            },
            {
                name:"British Columbia",
                year: 2019
            },
            {
                name:"India",
                year: 2019
            },
            {
                name:"US",
                year:2018
            }
        ],
    };
const travelingData =  document.getElementById("API")
travelingData.addEventListener("click", e => { 
    e.preventDefault();

fetch("http://localhost:3000/api/countries",{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body: JSON.stringify(travelingInfo)
})
.then(response=>response.text())
.then(result=>{
    document.getElementById("output").textContent = result
    
})
.catch(err=>{
    console.error(err.message);
});

});