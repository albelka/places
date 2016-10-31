
$(document).ready(function() {
  $("#inputs").submit(function(event){
    event.preventDefault();

    var place = $("input#place").val();
    var landmarks = $("input#landmarks").val();
    var timeOfYear = $("select#timeOfYear").val();
    var notes = $("input#notes").val();


  });
});
