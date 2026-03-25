/* ============================================
   ENCRYPTED CONTACT DISPLAY - Anti-Scraper
   ============================================ */

// Contact data stored as Base64 (obfuscated)
const ENCRYPTED_CONTACT = {
    email: 'eGVyb2hvdXJAZ21haWwuY29t', // xerohour@gmail.com (Base64)
    phone: 'NTAyLTI1MS0xMzM3' // 502-251-1337 (Base64)
};

// Base64 decode helper
function decryptBase64(str) {
    return atob(str);
}

// Render contact cards with decrypted data
function renderContactCards() {
    const emailCard = document.querySelector('.contact-card[data-type="email"]');
    const phoneCard = document.querySelector('.contact-card[data-type="phone"]');
    
    if (emailCard) {
        const email = decryptBase64(ENCRYPTED_CONTACT.email);
        const emailContainer = emailCard.querySelector('.contact-data');
        if (emailContainer) {
            // Split email into parts for obfuscation
            const [user, domain] = email.split('@');
            emailContainer.innerHTML = `
                <span class="contact-part">${user.split('').map(c => `<span class="char" style="animation-delay: ${Math.random() * 0.5}s">${c}</span>`).join('')}</span>
                <span class="contact-symbol">@</span>
                <span class="contact-part">${domain.split('').map(c => `<span class="char" style="animation-delay: ${Math.random() * 0.5}s">${c}</span>`).join('')}</span>
            `;
        }
    }
    
    if (phoneCard) {
        const phone = decryptBase64(ENCRYPTED_CONTACT.phone);
        const phoneContainer = phoneCard.querySelector('.contact-data');
        if (phoneContainer) {
            // Obfuscate phone with matrix symbols
            const digits = phone.split('');
            phoneContainer.innerHTML = digits.map((d, i) => {
                if (d === '-') {
                    return `<span class="contact-separator">-</span>`;
                }
                // Randomly show some digits as matrix symbols
                const showAsSymbol = Math.random() > 0.7;
                if (showAsSymbol) {
                    return `<span class="contact-symbol" data-real="${d}">●</span>`;
                }
                return `<span class="char" style="animation-delay: ${i * 0.05}s">${d}</span>`;
            }).join('');
            
            // Add hover effect to reveal hidden digits
            phoneContainer.querySelectorAll('.contact-symbol[data-real]').forEach(symbol => {
                symbol.addEventListener('mouseenter', function() {
                    this.textContent = this.getAttribute('data-real');
                    this.classList.add('revealed');
                });
                symbol.addEventListener('mouseleave', function() {
                    this.textContent = '●';
                    this.classList.remove('revealed');
                });
            });
        }
    }
}

// Canvas-based contact renderer (alternative anti-scraping)
function renderContactOnCanvas(canvasId, text, isEmail = false) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 320;
    const height = canvas.height = 90;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0a0a0a');
    gradient.addColorStop(1, '#001a00');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Border
    ctx.strokeStyle = '#00ff41';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(0.75, 0.75, width - 1.5, height - 1.5);
    
    // Corner decorations
    ctx.beginPath();
    ctx.moveTo(5, 15);
    ctx.lineTo(5, 5);
    ctx.lineTo(15, 5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(width - 5, 15);
    ctx.lineTo(width - 5, 5);
    ctx.lineTo(width - 15, 5);
    ctx.stroke();
    
    // Text styling
    ctx.fillStyle = '#00ff41';
    ctx.font = 'bold 14px "Courier New", monospace';
    ctx.textBaseline = 'middle';
    
    // Draw text with character spacing (anti-selection)
    const chars = text.split('');
    let x = 80;
    const y = isEmail ? 50 : 55;
    
    chars.forEach((char, i) => {
        // Add random opacity variation
        ctx.globalAlpha = 0.7 + Math.random() * 0.3;
        ctx.fillText(char, x + (i * 2), y);
        x += ctx.measureText(char).width + 1;
    });
    
    ctx.globalAlpha = 1;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Render decrypted contact cards
    renderContactCards();
    
    // Alternative: Render canvas versions (uncomment to use)
    // const email = decryptBase64(ENCRYPTED_CONTACT.email);
    // const phone = decryptBase64(ENCRYPTED_CONTACT.phone);
    // renderContactOnCanvas('contact-email-canvas', email, true);
    // renderContactOnCanvas('contact-phone-canvas', phone, false);
    
    // Add copy-to-clipboard functionality
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('dblclick', function() {
            const dataElement = this.querySelector('.contact-data');
            if (dataElement) {
                const text = dataElement.textContent.replace(/\s/g, '');
                navigator.clipboard.writeText(text).then(() => {
                    // Show copy confirmation
                    const badge = this.querySelector('.security-badge');
                    const originalText = badge.innerHTML;
                    badge.innerHTML = '<i class="fas fa-check"></i> COPIED!';
                    badge.classList.add('copied');
                    setTimeout(() => {
                        badge.innerHTML = originalText;
                        badge.classList.remove('copied');
                    }, 2000);
                });
            }
        });
    });
    
    // Console easter egg for contact info
    console.log('%c📧 ENCRYPTED CONTACT DATA ', 'background: #000; color: #00ff41; font-size: 14px; font-weight: bold; padding: 5px;');
    console.log('%cDouble-click any contact card to copy ', 'color: #008f11; font-style: italic;');
});

/* ============================================
   CSS ANIMATIONS FOR CONTACT CARDS
   ============================================ */

// Add these styles dynamically
const contactStyles = document.createElement('style');
contactStyles.textContent = `
    .contact-part {
        display: inline-flex;
    }
    
    .char {
        display: inline-block;
        color: #00ff41;
        font-weight: 700;
        animation: char-glow 2s ease-in-out infinite;
    }
    
    @keyframes char-glow {
        0%, 100% { 
            text-shadow: 0 0 5px #00ff41;
            opacity: 1;
        }
        50% { 
            text-shadow: 0 0 15px #00ff41, 0 0 25px #00ff41;
            opacity: 0.8;
        }
    }
    
    .contact-symbol {
        display: inline-block;
        color: #008f11;
        font-weight: 700;
        margin: 0 1px;
    }
    
    .contact-separator {
        display: inline-block;
        color: #00ff41;
        font-weight: 700;
        margin: 0 2px;
    }
    
    .security-badge.copied {
        background: rgba(0, 255, 65, 0.2);
        border-color: #00ff41;
        animation: badge-pulse 0.5s ease-in-out;
    }
    
    @keyframes badge-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .contact-symbol.revealed {
        color: #00ff41;
        text-shadow: 0 0 10px #00ff41;
    }
    
    .contact-card {
        cursor: pointer;
        user-select: none;
    }
    
    .contact-card:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(contactStyles);
