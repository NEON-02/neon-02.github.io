// Particle and Rain System
const canvas = document.getElementById('canvas-particles');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// Navigation Logic
function showLetter() {
    transition('landing', 'letter-section');
}

function showProposal() {
    transition('letter-section', 'proposal-section');
}

function transition(outId, inId) {
    const outEl = document.getElementById(outId);
    const inEl = document.getElementById(inId);
    
    outEl.classList.add('fade-out');
    setTimeout(() => {
        outEl.classList.add('hidden');
        inEl.classList.remove('hidden');
        inEl.classList.add('fade-in');
    }, 800);
}

// "No" Button Runaway Logic
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Celebration
function celebrate() {
    transition('proposal-section', 'success-section');
    createHearts();
}

function createHearts() {
    for(let i=0; i<50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.bottom = '-10%';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animation = `floatUp ${Math.random() * 3 + 2}s linear forwards`;
            heart.style.zIndex = '100';
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// Initialize
window.addEventListener('resize', initCanvas);
initCanvas();
for(let i=0; i<100; i++) particles.push(new Particle());
animateParticles();

// Add CSS for floating hearts dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes floatUp {
    to {
        transform: translateY(-120vh) rotate(360deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);
