let content = document.querySelector("#content");

function getUser(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data =>{
        console.log(data.results[0]);
        content.innerHTML = `<img src="${data.results[0].picture.large}"width="100px" class="img-fluid rounded-circle">
        <h1>${data.results[0].name.first} ${data.results[0].name.last}</h1>

        <div class="container text-center" style="margin-top:10px;">
          <i class="fas fa-envelope"></i>
        <p style="display: inline-block">${data.results[0].email}</p>
        </div>

        <div class="container text-center">
        <i class="fas fa-map-marker-alt"></i>
        <p style="display: inline-block;">${data.results[0].location.city}</p>
        </div>

        <div>
        <i class="fas fa-phone-square-alt"></i>
        <p style="display: inline-block;">${data.results[0].cell}</p>
        <div>`
        
    })
}