const details = document.getElementById("details");
const cmd = document.getElementById("cmd_prmpt");
cmd.addEventListener("keypress", function (e) {
  details.classList.remove("details_anim");
  var cmd_prmpt = cmd.value;
  cmd_prmpt = cmd_prmpt.toLowerCase();
  var error = "<span class='error'>" + cmd_prmpt + " not found, try command: info, skills, projects or clear</span>";

  if (e.key === 'Enter') {
    details.classList.add("details_anim");
    if (cmd_prmpt === "info") {
      loadfile("info.html")    
    } else if (cmd_prmpt === "skills") {
      loadfile("skills.html")
    } else if (cmd_prmpt === "projects") {
      loadfile("projects.html")
    }else if (cmd_prmpt === "about") {
      loadfile("about.html")
    }else if (cmd_prmpt === "education") {
      loadfile("education.html")
    }else if (cmd_prmpt === "achievements") {
      loadfile("achievements.html")
    } else if (cmd_prmpt === "clear") {
      details.innerHTML = "";
      cmd.value = "";
    } else {
      details.innerHTML = error;
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
            cmd.value = "";
          } 
      }
      xhr.send();
}