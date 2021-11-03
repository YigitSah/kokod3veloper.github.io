class BrApi {

  static showNotification(text,options = "red" ,time = 3000) {
    var x = document.getElementById("notifbar");
  
    // Add the "show" class to DIV
    x.className = "show";
    x.innerHTML = text; x.style.background = options; 
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
  }
}
