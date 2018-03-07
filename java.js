$(document).on("click", ".submit-btn", function(){
    event.preventDefault();
    var numberRecords = $("#numberRecords").val();
    var searchTerm = $("#searchTerm").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    console.log(numberRecords, searchTerm, startYear, endYear)
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "2664ad2903ec42308e32d21b90486032",
      'q': searchTerm,
      'begin_date': startYear,
      'end_date': endYear,
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      console.log(result);    
    });
});