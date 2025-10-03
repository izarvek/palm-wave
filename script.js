let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value < 450) {
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 2 + "px";
  }
});

 const scrollAmount = 40; 

  window.addEventListener('wheel', function(e) {
    e.preventDefault(); // Prevent default scrolling

    // Determine scroll direction
    const delta = Math.sign(e.deltaY);

    // Scroll by fixed amount
    window.scrollBy({
      top: delta * scrollAmount,
      left: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }, { passive: false });