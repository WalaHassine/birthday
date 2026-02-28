// Cursor following effect
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Typing effect for greeting - French and emotional (without emojis)
const greetingText = "Tu es la personne la plus precieuse de ma vie. Chaque moment avec toi est un tresor que je garde dans mon coeur. Je t'aime plus que tout au monde!";
const greetingElement = document.querySelector('.greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 80);
    }
}

// Create floating elements (without emojis - using simple shapes)
const floatingElements = ['*', '+', 'x', 'o'];
function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = floatingElements[Math.floor(Math.random() * floatingElements.length)];
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.fontSize = (Math.random() * 25 + 20) + 'px';
    element.style.color = 'rgba(233, 69, 96, 0.6)';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -600,
        x: Math.random() * 150 - 75,
        rotation: Math.random() * 360,
        duration: Math.random() * 6 + 6,
        opacity: 1,
        ease: "none",
        onComplete: () => element.remove()
    });
}

// Create particles on click
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'heart-particle';
    particle.textContent = '*';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.color = '#e94560';
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 4000);
}

document.addEventListener('click', (e) => {
    createParticle(e.clientX, e.clientY);
});

// Initialize animations
window.addEventListener('load', () => {
    // Title animation with bounce
    gsap.to('h1', {
        opacity: 1,
        duration: 1.5,
        y: 20,
        ease: "elastic.out"
    });

    // Button animation
    gsap.to('.cta-button', {
        opacity: 1,
        duration: 1,
        y: -20,
        ease: "back.out"
    });

    // Start typing effect
    typeGreeting();

    // Create floating elements periodically
    setInterval(createFloating, 1200);
});

// Hover effects
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.3,
            boxShadow: "0 0 50px rgba(233, 69, 96, 0.8)"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            boxShadow: "0 0 30px rgba(233, 69, 96, 0.5)"
        });
    });

    // Smooth page transition on click
    button.addEventListener('click', () => {
        // Create multiple particles on click
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createParticle(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 100);
        }
        
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                window.location.href = 'cause.html';
            }
        });
    });
});

