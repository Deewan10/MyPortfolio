const navbar = document.querySelectorAll("navbar");


 window.addEventListener ("scroll", function() {
     navbar.classList.toggle ("sticky", window.scrollY > 120);
 });

 document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let fireworks = [];
  
    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speed = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        this.angle = Math.atan2(canvas.height, this.x - canvas.width / 2);
        this.dx = this.speed * Math.cos(this.angle);
        this.dy = this.speed * Math.sin(this.angle);
      }
  
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
  
      update() {
        this.x += this.dx;
        this.y -= this.dy;
        this.radius -= 0.05;
      }
    }
  
    function createFirework() {
      fireworks.push(new Firework());
    }
  
    function updateFireworks() {
      fireworks.forEach((firework, index) => {
        firework.draw();
        firework.update();
  
        if (firework.radius <= 0) {
          fireworks.splice(index, 1);
        }
      });
    }
  
    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      createFirework();
      updateFireworks();
    }
  
    animate();
  });

  


  const listContainer = document.getElementById('listContainer');
  const marquee = document.getElementById('marquee');

  function resetListPosition() {
    const firstListItem = listContainer.querySelector('li:first-child');
    listContainer.appendChild(firstListItem);
  }

  marquee.addEventListener('animationiteration', resetListPosition);

 
  let itemsWidth = 0;
  listContainer.querySelectorAll('li').forEach(item => {
    itemsWidth += item.offsetWidth;
    listContainer.appendChild(item.cloneNode(true));
  });

  marquee.style.width = itemsWidth * 2 + 'px';


  // document.addEventListener('DOMContentLoaded', function() {
  //   const carousel = document.querySelector('.carousel');
  //   const images = carousel.querySelectorAll('img');
  //   const totalImages = images.length;
  //   let currentIndex = 0;
  
  //   function showImage(index) {
  //     carousel.style.transform = `translateY(-${index * 100}%)`;
  //   }
  
  //   function nextImage() {
  //     currentIndex = (currentIndex + 1) % totalImages;
  //     showImage(currentIndex);
  //   }
  
  //   // Initial setup
  //   carousel.style.height = `${totalImages * 100}%`;
  //   images.forEach(img => {
  //     img.style.height = `${100 / totalImages}%`;
  //   });
  
  //   // Start auto-scrolling
  //   const interval = setInterval(nextImage, 2000); // Change interval time as needed
  // });
  
  
  