function dropdown(){
    header = document.getElementById('header')
    btn = document.getElementById('dropdownBtn')
    if (header.style.height == 'auto'){
        header.style.height = '3.2rem'
        btn.classList = 'fa-solid fa-caret-down'
    }
    else{
        header.style.height = 'auto' 
        btn.classList = 'fa-solid fa-caret-up'
    }
}


scrolleBtn = document.getElementById("scrolleBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrolleBtn.style.display = "block";
  } else {
    scrolleBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
} 