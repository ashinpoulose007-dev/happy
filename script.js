function goPage(pageNumber) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

/* FIREWORKS */
const canvas = document.getElementById('fireworks');

if (canvas) {
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        dx: (Math.random() - 0.5) * 7,
        dy: (Math.random() - 0.5) * 7,
        life: 100
      });
    }
  }

  function animate() {
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(p.x, p.y, 3, 3);

      p.x += p.dx;
      p.y += p.dy;
      p.life--;

      if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 700);
  animate();
}
