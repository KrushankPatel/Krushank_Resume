
// <-----------------tabs---------------------------->

let myResume = (evt, resume) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(resume).style.display = "";
    evt.currentTarget.className += " active";
  };
  
  document.getElementById("defaultOpen").click();
  