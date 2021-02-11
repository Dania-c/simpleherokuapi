fetch('https://mysistername.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
      for(let i=0;i<json.length;i++){
        
        let x = document.createElement('li')
        x.innerHTML= json[i].name
        document.getElementById('flag').appendChild(x)
       
      }
  })