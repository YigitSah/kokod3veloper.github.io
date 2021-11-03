
class BrApi {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  showNotification(text,options,time = 3000) {
    var x = document.getElementById("notifbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, time);
  }
}
