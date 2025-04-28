//rotations of sections
document.addEventListener("DOMContentLoaded",()=>{

const cube = document.getElementById("cube");

document.getElementById("homeLink").addEventListener("click", function(e) {
  e.preventDefault();
  cube.style.transform = "rotateY(0deg)";
});

document.getElementById("aboutLink").addEventListener("click", function(e) {
  e.preventDefault();
  cube.style.transform = "rotateY(-90deg)";
});

document.getElementById("skillsLink").addEventListener("click", function(e) {
  e.preventDefault();
  cube.style.transform = "rotateX(180deg)";
});

document.getElementById("projectsLink").addEventListener("click", function(e) {
  e.preventDefault();
  cube.style.transform = "rotateY(-270deg)";
});

document.getElementById("contactLink").addEventListener("click", function(e) {
  e.preventDefault();
  cube.style.transform = "rotateX(-90deg)";
});
});