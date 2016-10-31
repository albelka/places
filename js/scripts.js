//business logic
function Place (place, landmarks, timeOfYear, notes) {
  this.place = place;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

//user interface
$(document).ready(function() {
  $("form#inputs").submit(function(event){
    event.preventDefault();

    var place = $("input#place").val();
    var landmarks = $("input#landmarks").val();
    var timeOfYear = $("select#timeOfYear").val();
    var notes = $("input#notes").val();
    var newPlace =  new Place(place, landmarks, timeOfYear, notes)

    $("ul#places").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $(".place").click(function(){
      $("#placeShow").show();
      $(".placeDisplay").text(newPlace.place);
      $(".landmarksDisplay").text(newPlace.landmarks);
      $(".timeOfYearDisplay").text(newPlace.timeOfYear);
      $(".notesDisplay").text(newPlace.notes);
    });

    $("input#place").val("");
    $("input#landmarks").val("");
    $("select#timeOfYear").val("");
    $("input#notes").val("");
  });
});
