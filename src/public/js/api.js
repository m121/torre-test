
function searchFor(){
    let value =  document.getElementById('searchfor').value;
    let size = document.getElementById('size').value;
    consumeapi(value,size);
    return false;
 }

 function consumeapi(value,size){
    fetch(`https://search.torre.co/opportunities/_search/?offset=1&size=${size}`,
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
      
        addjobs(res.results,value);
    });
 }


  function addjobs(data,value){
    var card = data.map(function(element,index){
       
        if(element.remote){
        if((element.organizations[0].name == value) || (element.objective == value)){
        let picture = element.organizations[0].picture != null ? element.organizations[0].picture : 'https://via.placeholder.com/300';
        let salary = element.compensation == null ?  'Private' : `<span>Min </span>${element.compensation.minAmount} - <span>Max </span>${element.compensation.maxAmount} ${element.compensation.currency}<span>/</span>${element.compensation.periodicity}`
        
        return (`<div class='col-sm'>
        <div class='card' style='width: 18rem;'> 
        <img src='${picture}' class='card-img-top' alt='${element.organizations[0].name}'>
         <div class='card-body'>
          <h5 class='card-title'><a href=${element.id}>${element.objective}</a></h5>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Company :</strong>${element.organizations[0].name}</li>
          <li class="list-group-item"><strong>Status :</strong> ${element.status}</li>
          <li class="list-group-item"><strong>Salary :</strong> ${salary}</li>
          </ul>
          <div class="card-body text-right">
          <a href="#" class="card-link">View details</a>
        </div> 
    
 
        </div>   <br/></div>`);
        }else if(!value){
            let picture = element.organizations[0].picture != null ? element.organizations[0].picture : 'https://via.placeholder.com/300';
            let salary = element.compensation == null ?  'Private' : `<span>Min </span>${element.compensation.minAmount} - <span>Max </span>${element.compensation.maxAmount} ${element.compensation.currency}<span>/</span>${element.compensation.periodicity}`
            
            return (`<div class='col-sm'>
            <div class='card' style='width: 18rem;'> 
            <img src='${picture}' class='card-img-top' alt='${element.organizations[0].name}'>
             <div class='card-body'>
              <h5 class='card-title'><a href="https://torre.co/en/jobs/${element.id}">${element.objective}</a></h5>
              </div>
              <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Company :</strong>${element.organizations[0].name}</li>
              <li class="list-group-item"><strong>Status :</strong> ${element.status}</li>
              <li class="list-group-item"><strong>Salary :</strong> ${salary}</li>
              </ul>
              <div class="card-body text-right">
              <a href="https://torre.co/en/jobs/${element.id}" class="card-link">Quick Apply</a>
            </div> 
        
     
            </div>   <br/></div>`);
        }else{
            return ('<div></div>');
        }

    }
    else{
        return ('<div></div>');
    }
    })
    
    document.getElementById('jobs').innerHTML = card;  
    
  }


  function jobinfo(){
 
  }