$(".submit-btn").on("click", function (event) {
    event.preventDefault();
    var search = $("#searchTerm").val().trim();
    var numberOfRecords = $("#numberRecords").val();
    console.log(search);
    console.log(numberOfRecords);
  });
  