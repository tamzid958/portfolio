"use-strict";

const details = document.getElementById("details");
const cmd = document.getElementById("cmd_prmpt");
cmd.addEventListener("keypress", function (e) {
  var cmd_prmpt = cmd.value;
  const error =  "<span class='error'>" + cmd_prmpt + " not found, try command: info, about, skills, projects, education, achievements or clear</span>";
  cmd_prmpt = cmd_prmpt.toLowerCase();
  cmd_prmpt = cmd_prmpt.trim();
  if (e.key === 'Enter') {
    if(!isEmpty(cmd_prmpt) && !isBlank(cmd_prmpt))
    {
      if (cmd_prmpt === "info") {
        loadfile("sections/info.html")    
      } else if (cmd_prmpt === "skills") {
        loadfile("sections/skills.html")
      } else if (cmd_prmpt === "projects") {
        loadfile("sections/projects.html")
      }else if (cmd_prmpt === "about") {
        loadfile("sections/about.html")
      }else if (cmd_prmpt === "education") {
        loadfile("sections/education.html")
      }else if (cmd_prmpt === "achievements") {
        loadfile("sections/achievements.html")
      } else if (cmd_prmpt === "clear") {
        details.innerHTML = "";
      } else {
        details.innerHTML = error;
      }
      cmd.value = "";
    }
  }
});

function loadfile(file){
  var xhr = new XMLHttpRequest();
  xhr.open('get', file, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) { 
        details.innerHTML = xhr.responseText;
      } 
  }
  xhr.send();
}

function isEmpty(str) {
  return (!str || str.length === 0 );
}

function isBlank(str) {
  return (!str || /^\s*$/.test(str));
}