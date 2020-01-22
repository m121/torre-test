
function searchFor(){
    var value =  document.getElementById('searchfor').value;
    consumeapi(value);
    return false;
 }

 function consumeapi(value){
    fetch(`https://search.torre.co/opportunities/_search/?offset=1&size=20&remote=false`,
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(res) {
      
        addjobs(res.results);
    });
 }


  function addjobs(data){
    var card = data.map(function(element,index){
        console.log(element.organizations[0].name)
        return (`<div class='col-sm'><div class='card' style='width: 18rem;'> <img src='${element.organizations[0].picture}' class='card-img-top' alt=''...'> <div class='card-body'> <h5 class='card-title'>${element.organizations[0].name}</h5>  <p class='card-text'>Status : ${element.status}</p>    </div>   </div></div>`);
        
    })
    document.getElementById('jobs').innerHTML = card;  
    
  }