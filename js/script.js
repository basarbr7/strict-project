// sticky menu scroll start
let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
  let sticky = window.scrollY;
  if (sticky>150){
    navbar.classList.add("sticky_menu")
  }else{
    navbar.classList.remove("sticky_menu")
  }
})
// sticky menu scroll end


// feather icon start
feather.replace()
// feather icon end


// venobox start
new VenoBox({
  selector: ".my-link",
  spinner: 'plane',
  border: '0',
  numeration: 'true',
  infinigall: 'true',
  sharp: 'true',
  navTouch: 'true',
  
});
// venobox end