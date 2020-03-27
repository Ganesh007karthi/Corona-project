fetch('https://api.covid19india.org/data.json')
.then(response => response.json())
.then(json => {
   
      
      var statewise=json.statewise
      
   
      var table=document.getElementById('mytable')
      
      for (var i=0;i<statewise.length;i++){
        var temp='';
        if(i==0){
            continue
        }
        temp+="<tr>"
        temp+="<td>"+statewise[i].state+"</td>"
        temp+="<td>"+statewise[i].confirmed+"</td>"
        temp+="<td>"+statewise[i].active+"</td>"
        temp+="<td>"+statewise[i].recovered+"</td>"
        temp+="<td>"+statewise[i].deaths+"</td></tr>"

        
        console.log(statewise[i].state+" "+i)
        // console.log('active cases  '+statewise[i].active)
        table.innerHTML += temp
      }


// Printing all the values from the resulting object


   
})




console.log('hello')