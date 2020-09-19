$(document).ready(function () {
  var personal_information =
    "<h3>Personal Information:</h3><b>Profile Picture:</b><a class='cmd_link' href='https://ibb.co/pKVbKLB' target='_blank'>click to see</a><br><b>Name:</b> Tamzid Ahmed Fahim <br> <b>Email:</b> tamjidahmed958@gmail.com<br> <b>Date of Birth:</b> 27 October 1999 </br> <b>Medical Fitness:</b> Perfecto</br><b>Height:</b> 5 feet 10 inch</br><b>Religion:</b> Muslim</br><b>Marital Status:</b> Single</br><b>Blood Group:</b> AB+</br><b>Country:</b> Bangladesh </br><b>Permanent Address:</b> Dhaka </br><b>Important Profile Link :</b> <a class='cmd_social' href='https://github.com/tamzid958' target='_blank'><i class='fab fa-github'></i></a> <a class='cmd_social' href='https://www.linkedin.com/in/tamzid-ahmed958/' target='_blank'><i class='fab fa-linkedin'></i></a><br>";

  var skills_info =
    "<h3>Skills:</h3>&nbsp; &nbsp; | <b>Software Application</b> <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| C# <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| Java <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| C <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| C++ <br>&nbsp; &nbsp;| <b>Web Application:</b> <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| HTML <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| CSS <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| JavaScript <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| PHP <br>&nbsp; &nbsp;| <b>Mobile Application:</b><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| Java <br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;| XML <br>&nbsp; &nbsp;| <b>Algorithm &amp; Data Structure: </b><br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Python <br>&nbsp; &nbsp;| <b>UI UX Designer</b><br> <br><b>Unicorn Skilled Developer.<b><br>";

  var projects_info =
    "<h3>Projects:</h3>1. Visa MasterCard Management System - <a class='cmd_link' href='https://github.com/tamzid958/Card-Management-System-Src-Code' target='_blank'>source code</a>&nbsp;- (Java)<br>2. B2B Gaming Shop (client xero) - <a  class='cmd_link' href='https://github.com/tamzid958/Client-Xero' target='_blank'>source code</a> - (c#)<br>3. Hospital Appointment System (OSCA) - <a class='cmd_link' href='https://github.com/tamzid958/Medical-Site' target='_blank'>source code</a>&nbsp;- (PHP)<br>4. Doctor Profile Mobile Application (Prescribe) - hidden - (Java)<br><h3>Algorithm Practice:</h3><br>Codeforces Problem Solution - <a class='cmd_link' href='https://github.com/tamzid958/codeforces' target='_blank'> snippets </a> - (Python)";

  $("#cv_btn").click(function () {
    document.getElementById("cv_btn").value = "Downloaded";
  });

  $("#cmd_prmpt").on("keypress", function (e) {
    var cmd_prmpt = $("#cmd_prmpt").val();
    var error =
      "<br>" +
      cmd_prmpt +
      " not found, try command: personal_info, skills, projects or clear";

    if (e.keyCode == 13) {
      document.getElementById("details").classList.add("details_anim");
      if (cmd_prmpt === "personal_info") {
        document.getElementById("details").innerHTML += personal_information;
        document.getElementById("details").style.color = "white";
        document.getElementById("cmd_prmpt").value = "";
      } else if (cmd_prmpt === "skills") {
        document.getElementById("details").innerHTML += skills_info;
        document.getElementById("details").style.color = "white";
        document.getElementById("cmd_prmpt").value = "";
      } else if (cmd_prmpt === "projects") {
        document.getElementById("details").innerHTML += projects_info;
        document.getElementById("details").style.color = "white";
        document.getElementById("cmd_prmpt").value = "";
      } else if (cmd_prmpt === "clear") {
        document.getElementById("details").innerHTML = "";
        document.getElementById("cmd_prmpt").value = "";
      } else {
        var final_error = error.fontcolor("red");
        document.getElementById("details").innerHTML += final_error;
        document.getElementById("cmd_prmpt").value = "";
      }
    }
    setTimeout(function () {
      document.getElementById("details").classList.remove("details_anim");
    }, 4000);
  });
});
