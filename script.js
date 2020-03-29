fetch('https://api.covid19india.org/data.json')
.then(response => response.json())
.then(json => {
   
      
      var statewise=json.statewise
      
   
      var table=document.getElementById('mytable')
      var totalconfirmed =document.getElementById('confirm')
      var totalactive = document.getElementById('active')
      var totalrecovered =document.getElementById('recovered')
      var totaldeath = document.getElementById('death')
      var TotalConfirmed=0;
      
      var TotalRecovered=0
     
      var Totaldeath=0
      var Totalactive=0
      for (var i=0;i<statewise.length;i++){
        var temp='';
        if(i==0){
            continue
        }
        TotalConfirmed+=parseInt(statewise[i].confirmed)
        Totalactive+=parseInt(statewise[i].active)
        TotalRecovered+=parseInt(statewise[i].recovered)
        Totaldeath+=parseInt(statewise[i].deaths)
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
      totalconfirmed.innerHTML=TotalConfirmed
      totalactive.innerHTML=Totalactive
      totalrecovered.innerHTML=TotalRecovered
      totaldeath.innerHTML=Totaldeath

// Printing all the values from the resulting object


   
})




console.log('hello')