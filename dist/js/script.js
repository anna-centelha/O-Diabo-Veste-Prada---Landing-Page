document.addEventListener("DOMContentLoaded", () => {
    const typedTextElement = document.getElementById("typedText");
    const frases = [
        "Florals? For spring? Groundbreaking.",
        "That blue represents millions of dollars and countless jobs.", 
        "Everybody wants this. Everybody wants to be us.",
        "That’s all..."
    ];
    let fraseIndex = 0;
    let charIndex = 0;
    const typingSpeed = 90;
    const erasingSpeed = 50;
    const delayBetweenPhrases = 1500;

    function type() {
        if (charIndex < frases[fraseIndex].length) {
            typedTextElement.innerHTML += frases[fraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenPhrases);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.innerHTML = frases[fraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            fraseIndex++;
            if (fraseIndex >= frases.length) {
                fraseIndex = 0;
            }
            setTimeout(type, typingSpeed);
        }
    }

    if (typedTextElement) {
        typedTextElement.style.opacity = '1';
        type();
    }

    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.highlight-image-editorial', {
            delay: 400,
            distance: '60px',
            origin: 'left',
            duration: 1200,
            easing: 'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.highlight-text-editorial', {
            delay: 600,
            distance: '60px',
            origin: 'right',
            duration: 1200,
            easing: 'ease-in-out',
            reset: true
        });
        ScrollReveal().reveal('.trailer', {
            delay: 300,
            duration: 1000,
            origin: 'bottom',
            distance: '30px',
            reset: true
        });
        ScrollReveal().reveal('.atores h2, .revista h2', {
            delay: 200,
            duration: 900,
            origin: 'top',
            distance: '20px',
            reset: true
        });
        ScrollReveal().reveal('.galeria img, .revista-slider img', {
            delay: 100,
            interval: 50,
            duration: 800,
            origin: 'bottom',
            distance: '20px',
            reset: true
        });
    } else {
        console.warn("ScrollReveal library not found. Ensure it's linked correctly in your HTML.");
    }
});