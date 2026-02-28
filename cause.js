// Reasons database - Emotional French messages
const reasons = [
    { 
        text: "Tu as le plus beau sourire du monde, et chaque fois que tu ris, mon cœur s'envole. Ton bonheur est ma plus grande joie! 💕", 
        emoji: "💖",
        gif: "gif1.gif"
    },
    { 
        text: "Ta gentillesse et ta douceur me touchent profondément. Tu as un cœur en or qui éclair(everyone) autour de toi. 🌟", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Malgré les moments difficiles, tu reste forte et courageuse. Ta force m'inspire chaque jour un peu plus. ✨", 
        emoji: "💪",
        gif: "gif1.gif"
    },
    { 
        text: "Tu es unique et irremplaçable. Il n'y a personne comme toi au monde, et c'est ce qui te rend si spéciale. 🥰", 
        emoji: "💝",
        gif: "gif2.gif"
    },
    { 
        text: "Chaque conversation avec toi est un moment précieux que je garde précieusement dans mon cœur. 💭", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        text: "Tu sais comment remonter le moral même dans les pires moments. Tu es mon rayon de soleil! ☀️", 
        emoji: "🌞",
        gif: "gif2.gif"
    },
    { 
        text: "Ton âme pure et ton cœur généreux font de toi une personne exceptionnelle. Garde toujours cette lumière en toi! ✨", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "Je suis tellement reconnaissant(e) de t'avoir dans ma vie. Tu apporte tant de bonheur et de positivité! 🎉", 
        emoji: "🎊",
        gif: "gif2.gif"
    },
    { 
        text: "Tes yeux magnifiques racontent des histoires pleine de tendresse et de rêve. Je pourrais m'y perdre eternellement! 👀", 
        emoji: "💜",
        gif: "gif1.gif"
    },
    { 
        text: "Tu mérite tout le bonheur du monde et bien plus encore. Que cette nouvelle année t'apporte tout ce que tu désires! 🎂", 
        emoji: "🎁",
        gif: "gif2.gif"
    },
    { 
        text: "La façon dont tu prends soin de ceux que tu aimes est remarquable. Tu es une personne extraordinaire! ❤️", 
        emoji: "🥳",
        gif: "gif1.gif"
    },
    { 
        text: "Ton rire est la plus belle mélodie que j'ai jamais entendue. Il Illumine mes journées! 🎵", 
        emoji: "🎶",
        gif: "gif2.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `<span class="emoji">${reason.emoji}</span>${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Souvenir d'amour">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Raison ${currentReasonIndex + 1} sur ${reasons.length} - Tu es unique! 💕`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Voir nos souvenirs ensemble 💝";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html';
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function
function createFloatingElement() {
    const elements = ['💕', '💖', '💗', '💝', '💘', '✨', '🌟', '🦋'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 25 + 15) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -600,
        duration: Math.random() * 8 + 8,
        opacity: 0,
        rotation: Math.random() * 360,
        onComplete: () => element.remove()
    });
}

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);

// Initial animation for title
gsap.from('h1', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "elastic.out"
});

