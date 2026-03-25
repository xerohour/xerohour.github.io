/* ============================================
   MATRIX DIGITAL RAIN ANIMATION
   ============================================ */

const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

let width, height;
let columns = [];
let fontSize = 14;

// Matrix glyphs - Katakana + Latin + Numbers
const matrixChars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Resize canvas
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Calculate columns
    const columnCount = Math.floor(width / fontSize);
    columns = Array(columnCount).fill(0);
}

// Draw matrix rain
function draw() {
    // Fade effect (creates trails)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    // Set font style
    ctx.fillStyle = '#00ff41';
    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
    
    // Draw each column
    for (let i = 0; i < columns.length; i++) {
        // Random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, columns[i] * fontSize);
        
        // Reset column randomly after it goes off screen
        if (columns[i] * fontSize > height && Math.random() > 0.975) {
            columns[i] = 0;
        }
        
        // Move column down
        columns[i]++;
    }
}

// Animation loop
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// Initialize
resize();
animate();

// Handle resize
window.addEventListener('resize', () => {
    resize();
});

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */

const typewriterText = "./load_construct.exe --ai-projects";
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;
let typingSpeed = 50;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typewriter after page load
setTimeout(typeWriter, 1000);

/* ============================================
   GITHUB PROJECTS FETCHER
   ============================================ */

const projectsGrid = document.getElementById('projects-grid');

// AI-related keywords to filter projects
const AI_KEYWORDS = [
    'ai', 'artificial intelligence', 'machine learning', 'ml',
    'neural', 'network', 'deep learning', 'tensorflow',
    'pytorch', 'agent', 'llm', 'nlp', 'computer vision',
    'genome', 'bioinformatics', 'promethease', 'snp',
    'automation', 'autonomous', 'chatbot', 'gpt', 'matrix'
];

// Featured projects (manually curated)
const FEATURED_PROJECTS = [
    {
        name: 'PROMETHEASE_OFFLINE',
        description: 'Offline genome analysis reports with interactive UI for SNP data visualization.',
        language: 'HTML',
        topics: ['genome', 'bioinformatics', 'promethease', 'offline'],
        override: true
    },
    {
        name: 'AI_AGENT_SYSTEM',
        description: 'Autonomous AI agents for task automation and intelligent decision-making.',
        language: 'Python',
        topics: ['ai', 'agents', 'automation', 'machine-learning'],
        override: true
    },
    {
        name: 'GENOME_ANALYSIS',
        description: 'TensorFlow-IO utilities for FASTQ file processing and DNA sequence encoding.',
        language: 'Python',
        topics: ['genome', 'tensorflow', 'bioinformatics', 'dna'],
        override: true
    }
];

// Fetch GitHub repos
async function fetchGitHubRepos() {
    try {
        const response = await axios.get('https://api.github.com/users/xerohour/repos', {
            params: {
                sort: 'updated',
                per_page: 100
            }
        });

        const repos = response.data;

        // Filter for AI-related projects
        const aiRepos = repos.filter(repo => {
            if (repo.fork) return false;
            if (repo.name === 'xerohour.github.io') return false;
            
            const searchText = `${repo.name} ${repo.description || ''} ${(repo.topics || []).join(' ')}`.toLowerCase();
            return AI_KEYWORDS.some(keyword => searchText.includes(keyword));
        });

        // Combine with featured projects
        const allProjects = [...FEATURED_PROJECTS, ...aiRepos.slice(0, 6)];
        
        // Remove duplicates by name
        const uniqueProjects = allProjects.filter((project, index, self) =>
            index === self.findIndex(p => p.name === project.name)
        );

        renderProjects(uniqueProjects);
    } catch (error) {
        console.error('Error fetching repos:', error);
        // Render featured projects only if API fails
        renderProjects(FEATURED_PROJECTS);
    }
}

// Render projects to DOM
function renderProjects(projects) {
    projectsGrid.innerHTML = projects.map(project => {
        const isOverride = project.override || false;
        const htmlUrl = isOverride ? `https://github.com/xerohour/${project.name.replace(/\s+/g, '-').toLowerCase()}` : project.html_url;
        const stars = isOverride ? '██' : project.stargazers_count;
        const forks = isOverride ? '◈' : project.forks_count;
        const language = project.language || 'CODE';
        const topics = project.topics || [];

        return `
            <div class="col-md-6 col-lg-4">
                <div class="project-card fade-in">
                    <div class="project-card-body">
                        <h3 class="project-title">
                            <a href="${htmlUrl}" target="_blank">
                                <i class="fas fa-file-code"></i> ${project.name}
                            </a>
                        </h3>
                        <p class="project-description">${project.description || 'No description available'}</p>
                        
                        <div class="project-meta">
                            <span class="project-stat">
                                <i class="fas fa-star"></i> ${stars}
                            </span>
                            <span class="project-stat">
                                <i class="fas fa-code-branch"></i> ${forks}
                            </span>
                            <span class="project-stat">
                                <i class="fas fa-circle" style="color: ${getLanguageColor(project.language)}; font-size: 0.4rem;"></i> 
                                ${language}
                            </span>
                        </div>
                        
                        ${topics.length > 0 ? `
                            <div class="project-tags">
                                ${topics.slice(0, 4).map(tag => `<span class="tag">${tag.toUpperCase()}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-initialize scroll animations
    initScrollAnimations();
}

// Get language color
function getLanguageColor(language) {
    const colors = {
        'Python': '#3572A5',
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Jupyter Notebook': '#DA5B0B',
        'Shell': '#89e051',
        'Ruby': '#701516',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'Java': '#b07219'
    };
    return colors[language] || '#00ff41';
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 65, 0.2)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

/* ============================================
   GLITCH TEXT EFFECT
   ============================================ */

function randomGlitch() {
    const glitchTexts = document.querySelectorAll('.glitch');
    glitchTexts.forEach(text => {
        const original = text.getAttribute('data-text');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
        let iterations = 0;
        
        const interval = setInterval(() => {
            text.textContent = original
                .split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return original[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');
            
            if (iterations >= original.length) {
                clearInterval(interval);
            }
            
            iterations += 1/3;
        }, 30);
    });
}

/* ============================================
   INITIALIZE
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubRepos();
    initScrollAnimations();
    
    // Trigger glitch effect periodically
    setTimeout(randomGlitch, 2000);
    setInterval(randomGlitch, 10000);

    // Console easter egg
    console.log('%c WELCOME TO THE MATRIX ', 'background: #000; color: #00ff41; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself." ', 'color: #00ff41; font-style: italic;');
});
