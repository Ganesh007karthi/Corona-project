fetch('https://api.covid19api.com/summary')
.then(response => response.json())
.then(json => {
   
      var data =json.Countries;
      var table=document.getElementById('mytable')
      var totalconfirmed =document.getElementById('confirm')
      var totalrecovered =document.getElementById('recovered')
      var totaldeath = document.getElementById('death')
      var TotalConfirmed=0;
      var newconfirmed=0;
      var TotalRecovered=0
      var newrecovered=0
      var Totaldeath=0
      var newdeath=0
      for(var i=0;i<data.length;i++){
          
        if(i==0){
            continue
        }

        var confirmedcase=data[i].NewConfirmed
        
        TotalConfirmed+=data[i].TotalConfirmed
        newconfirmed+=data[i].NewConfirmed
        TotalRecovered+=data[i].TotalRecovered
        newrecovered+=data[i].NewRecovered
        Totaldeath+=data[i].TotalDeaths
        newdeath+=data[i].NewDeaths

          var temp='';
          
          temp+="<tr>"
          temp+="<td>"+data[i].Country+"</td>"
          temp+="<td>"+data[i].TotalConfirmed+"</td>"
          temp+="<td>"+data[i].NewConfirmed+"</td>"
          temp+="<td>"+data[i].TotalRecovered+"</td>"
          temp+="<td>"+data[i].NewRecovered+"</td>"
          temp+="<td>"+data[i].TotalDeaths+"</td>"
          temp+="<td>"+data[i].NewDeaths+"</td></tr>"
  
          
          
          // console.log('active cases  '+statewise[i].active)
          table.innerHTML += temp
      }
      totalconfirmed.innerHTML = TotalConfirmed
      totalrecovered.innerHTML = TotalRecovered
      totaldeath.innerHTML = Totaldeath
      document.getElementById('newconfirm').innerHTML="+"+newconfirmed
      document.getElementById('newrecovered').innerHTML="+"+newrecovered
      document.getElementById('newdeath').innerHTML="+"+newdeath
    //   var statewise=json.statewise
      
   
    //   var table=document.getElementById('mytable')
      
    //   for (var i=0;i<statewise.length;i++){
       
    //   }


// Printing all the values from the resulting object


   
})
