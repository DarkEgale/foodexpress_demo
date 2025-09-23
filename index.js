const nav_links = document.querySelectorAll("nav ul li a");

window.addEventListener('scroll', function handleScroll() {
    const scroll = window.scrollY || window.pageYOffset;

    nav_links.forEach(link => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (!section) return;

        const top = section.offsetTop - 80;
        const bottom = top + section.offsetHeight;

        if (scroll >= top && scroll <= bottom) {
            nav_links.forEach(l => l.classList.remove("active")); 
            link.classList.add("active"); 
        }
    });
});

function links_click_handel(){
  const links=document.querySelectorAll('nav ul li a')
  const checkbox=document.getElementById('check')
  links.forEach(link=>{
    link.addEventListener('click',()=>{
      checkbox.checked = false
    })
  })
}
links_click_handel()


//hreo section animation
 let slides = document.querySelectorAll('.slide');
    let indicators = document.querySelector('.indicators');
    let index = 0;

    // create dots based on slide count
    slides.forEach((_, i) => {
      let dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        index = i;
        showSlide();
      });
      indicators.appendChild(dot);
    });

    let dots = document.querySelectorAll('.dot');

    function showSlide() {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      slides[index].classList.add('active');
      dots[index].classList.add('active');

      index = (index + 1) % slides.length;
    }

    setInterval(showSlide, 4000); 

    //mouse follow effect
    document.addEventListener('mousemove', function(event) {
      const motion = document.getElementById("motion");
      const offsetX = motion.offsetWidth / 2;
      const offsetY = motion.offsetHeight / 2;
      motion.style.left = (event.pageX - offsetX) + "px";
      motion.style.top = (event.pageY - offsetY) + "px";
    });
