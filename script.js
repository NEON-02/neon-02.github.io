// --- BACKGROUND PARTICLES (Wintery/Dreamy Vibe) ---
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = Math.random() * 1 + 0.5; // Falling speed
        this.speedX = Math.random() * 1 - 0.5; // Drift
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        
        // Loop particles back to top
        if (this.y > canvas.height) {
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
for(let i = 0; i < 150; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();


// --- NAVIGATION / TRANSITIONS ---
function showSection(targetId) {
    // Find currently active section
    const currentSection = document.querySelector('section:not(.hidden)');
    const targetSection = document.getElementById(targetId);
    
    if (currentSection) {
        currentSection.querySelector('.glass-card').classList.add('fade-out');
        currentSection.querySelector('.glass-card').classList.remove('fade-in');
        
        // Wait for fade out animation
        setTimeout(() => {
            currentSection.classList.add('hidden');
            targetSection.classList.remove('hidden');
            
            const targetCard = targetSection.querySelector('.glass-card');
            if(targetCard) {
                targetCard.classList.remove('fade-out');
                targetCard.classList.add('fade-in');
            }
        }, 800);
    }
}


// --- "NO" BUTTON RUNAWAY LOGIC ---
const noBtn = document.getElementById('noBtn');
const btnGroup = document.querySelector('.btn-group');

noBtn.addEventListener('mouseover', () => {
    // Calculate safe boundaries so the button doesn't go off-screen
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;
    
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));
    
    // Switch to fixed positioning so it can fly anywhere on the screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});


// --- CELEBRATION (YES BUTTON) ---
function celebrate() {
    showSection('success-section');
    spawnHearts();
}

function spawnHearts() {
    const heartInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
        heart.style.zIndex = '100';
        // Randomize the animation duration between 3s and 6s
        heart.style.animation = `floatHeart ${Math.random() * 3 + 3}s linear forwards`;
        
        document.body.appendChild(heart);
        
        // Clean up the DOM
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 100); // Spawns a heart every 100ms

    // Stop spawning after 5 seconds
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 5000);
}
