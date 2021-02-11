fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
      for(let i=0;i<json.length;i++){
        console.log(json[i])
        var x = document.createElement('li')
        x.innerHTML= json[i].name
        document.getElementById('flag').appendChild(x)
        x=document.createElement('img')
        x.src=json[i].flag
        document.getElementById('flag').appendChild(x)

      }
  })