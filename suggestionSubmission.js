function acknowledgement() {
    alert("The form was submitted");
    var employeeName = document.getElementById("name").value;
    var employeeSuggestion = document.getElementById("suggestion").value;
    var employeeTags = document.getElementById("tags").value;
    var status = document.getElementById("status").value;
  
    var mysql = require('mysql');
    var con = mysql.createConnection({
    host: "107.180.1.16",
    user: "2021group2",
    password: "group22021",
     database: "2021group2"
      });
    con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO 2021group2.suggestions_submissions(Name, Suggestion, Tags) VALUES ('$employeeName', '$employeeSuggestion','$employeeTags')";
   con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
      });
    //});
}