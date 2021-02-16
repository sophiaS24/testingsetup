

function acknowledgement() {

  var name = document.getElementById("pollname").value;
  var desc = document.getElementById("pollDescription").value;
  var ans1 = document.getElementById("a1").value;
  var ans2 = document.getElementById("a2").value;
  var ans3 = document.getElementById("a3").value;
  var ans4 = document.getElementById("a4").value;

  document.getElementById("addToMe").innerHTML += "<h2>" + name + "</h2>";
  document.getElementById("addToMe").innerHTML += "<h3>" + desc + "</h3>";
  document.getElementById("addToMe").innerHTML += "<input type='radio' id='ans1' name='answer1' value='1'>" + "<label for='ans1'>" + ans1 +"</label> <br>"
  document.getElementById("addToMe").innerHTML += "<input type='radio' id='ans2' name='answer2' value='2'>" + "<label for='ans2'>" + ans2 +"</label> <br>"
  document.getElementById("addToMe").innerHTML += "<input type='radio' id='ans3' name='answer3' value='3'>" + "<label for='ans3'>" + ans3 +"</label> <br>"
  document.getElementById("addToMe").innerHTML += "<input type='radio' id='ans4' name='answer4' value='4'>" + "<label for='ans4'>" + ans4 +"</label> <br>"
      }