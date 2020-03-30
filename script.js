
fetch('https://api.covid19india.org/data.json')
.then(response => response.json())
.then(json => {
   
      const timeline_data=json.cases_time_series
      var statewise=json.statewise
      
   
      const table=document.getElementById('mytable')
      var totalconfirmed =document.getElementById('confirm')
      var totalactive = document.getElementById('active')
      var totalrecovered =document.getElementById('recovered')
      var totaldeath = document.getElementById('death')
      var TotalConfirmed=0;
      
      var TotalRecovered=0
     
      var Totaldeath=0
      var Totalactive=0
      var datamap=new Map()
    
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
        
        
        // console.log(statewise[i].state+" "+i)
        // console.log('active cases  '+statewise[i].active)
        document.getElementById('mytable').innerHTML += temp
      }
      totalconfirmed.innerHTML=TotalConfirmed
      totalactive.innerHTML=Totalactive
      totalrecovered.innerHTML=TotalRecovered
      totaldeath.innerHTML=Totaldeath

// Printing all the values from the resulting object

 rendergraph(statewise,timeline_data);
   
})
function rendergraph(statewise,timeline_data){
  var datalist=[]
  var label=[]
  var confirmed_timeline=[]
  var date_label=[]
  var death_timeline=[]
  var recovered_timeline=[]
  var daily_recovered_timeline=[]
  var daily_death_timeline=[]
  var daily_confirmed_timeline=[]
  console.log(statewise)
  for(var i=0;i<statewise.length;i++){
    if(i==0){
      continue
    }
    label.push(statewise[i].state)
    datalist.push(statewise[i].confirmed)
  }
  for(var i=0;i<timeline_data.length;i++){
      date_label.push(timeline_data[i].date)
      confirmed_timeline.push(timeline_data[i].totalconfirmed)
      death_timeline.push(timeline_data[i].totaldeceased)
      recovered_timeline.push(timeline_data[i].totalrecovered)
      daily_confirmed_timeline.push(timeline_data[i].dailyconfirmed)
      daily_recovered_timeline.push(timeline_data[i].dailyrecovered)
      daily_death_timeline.push(timeline_data[i].dailydeceased)

  }
  console.log(daily_confirmed_timeline)
  console.log(daily_recovered_timeline)
  console.log(daily_death_timeline)
  var chart = new Chart(chartContainer,{
    type :'line',
    data: {
      labels: label,
      datasets: [{
          label: 'Covid-19 confirmed cases',
          
          data: datalist
      }]
  },

  // Configuration options go here
  options: {}
  })
  var myColors = ['red', 'green', 'blue'];
  var chart = new Chart(chartContainer2,{
    type :'line',
    data: {
      labels: date_label,
      datasets: [{
          label: 'Confirmed Cases',
          strokeColor: "rgba(220,220,220,1)",
          fill: false,
          borderColor: "#5DADE2",
          data: confirmed_timeline
      },
      {
        strokeColor: "rgba(151,187,205,1)",
        label: 'Recovered Cases',
        fill: false,
        borderColor: "#212F3D",
        data: recovered_timeline
      },
      {
        label:'Death Cases',
        fill: false,
        borderColor: "#bae755",
        data: death_timeline
      }
    ]
  },

  // Configuration options go here
  options: {}
  })
  
  var chart = new Chart(chartContainer3,{
    type :'line',
    data: {
      labels: date_label,
      datasets: [{
          label: 'Confirmed Cases',
          strokeColor: "rgba(220,220,220,1)",
          fill: false,
          borderColor: "#5DADE2",
          data: daily_confirmed_timeline
      },
      {
        strokeColor: "rgba(151,187,205,1)",
        label: 'Recovered Cases',
        fill: false,
        borderColor: "#212F3D",
        data: daily_recovered_timeline
      },
      {
        label:'Death Cases',
        fill: false,
        borderColor: "#bae755",
        data: daily_death_timeline
      }
    ]
  },

  // Configuration options go here
  options: {}
  })
}





var dataduplicate=[
  {label: "Maharashtra", y: 215},
  {label: "Kerala", y: 202},
  {label: "Karnataka", y: 83},
  {label: "Delhi", y: 72},
  {label: "Uttar Pradesh", y: 72},
  {label: "Telangana", y: 70},
  {label: "Gujarat", y: 69},
  {label: "Rajasthan", y: 63},
  {label: "Tamil Nadu", y: 67},
  {label: "Madhya Pradesh", y: 47},
  {label: "Jammu and Kashmir", y: 45},
  {label: "Punjab", y: 39},
  {label: "Haryana", y: 35},
  {label: "Andhra Pradesh", y: 23},
  {label: "West Bengal", y: 22},
  {label: "Bihar", y: 15},
  {label: "Ladakh", y: 13},
  {label: "Andaman and Nicobar Islands", y: 10},
  {label: "Chandigarh", y: 9},
  {label: "Chhattisgarh", y: 7},
  {label: "Uttarakhand", y: 7},
  {label: "Goa", y: 5},
  {label: "Himachal Pradesh", y: 3},
  {label: "Odisha", y: 3},
  {label: "Manipur", y: 1},
  {label: "Mizoram", y: 1},
  {label: "Puducherry", y: 1},
  {label: "Arunachal Pradesh", y: 0},
  {label: "Assam", y: 0},
  {label: "Dadra and Nagar Haveli", y: 0},
  {label: "Daman and Diu", y: 0},
  {label: "Jharkhand", y: 0},
  {label: "Lakshadweep", y: 0},
  {label: "Meghalaya", y: 0},
  {label: "Nagaland", y: 0},
  {label: "Sikkim", y: 0},
  {label: "Tripura", y: 0}
]