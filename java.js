$(document).on("click", ".submit-btn", function(){
  event.preventDefault();
  var numberRecords = $("#numberRecords").val();
  var searchTerm = $("#searchTerm").val().trim();
  var startYear = $("#startYear").val().trim();
  var endYear = $("#endYear").val().trim();
  console.log(numberRecords, searchTerm, startYear, endYear)    

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=2664ad2903ec42308e32d21b90486032&q="+searchTerm;
  
  if (startYear){
    queryURL += "&begin_date="+startYear+"0101"
  }

  if (endYear){
    queryURL += "&end_date="+endYear+"0101"
  }

  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(function(result) {
    for (var i = 0; i<=numberRecords; i++){
    var webUrl = result.response.docs[i].web_url;
    console.log(webUrl);
    console.log(result);
    }
    // selector(result.response.docs);
//   });

});
});