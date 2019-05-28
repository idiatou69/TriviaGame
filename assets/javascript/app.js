
var correct = 0;
var incorrect = 0;
var unanswer =0;
var number = 30;
var intervalId;
var showImages;
var counter = 0;
var images = ["200w(1).webp", "200w.webp", "summer-winter.webp"];
var answers = ["1c", "2c", "3b"];
// var animate: "https://media2.giphy.com/media/26xBKNX477PVn53mU/200w.webp?cid=790b76115ceac888333079734108c351&rid=200w.webp";

$("#start-over").hide()

function checkAns() {
  stop ();
  $(".questions").hide()
  for (var i = 0; i < answers.length; i++) {
    if ($("#" + answers[i]).is(':checked')) {
      correct++

    }
    else {
      incorrect++
    }
  }
  $("#correct").text(correct);
  $("#incorrect").text(incorrect);
  $("#unanswer").text(unanswer)
  $("#start-over").show()
}
$(".btn-light").on("click", checkAns)
$("#start").on("click", run);
$(".questions").hide()
$("#start-over").on("click", resetGame)

function resetGame(){
  location.reload()
}


function run() {
  $(".questions").show()
  $("#start").hide();
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#time").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
    checkAns()
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}



