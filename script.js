/* ============================================
   Neural Network Background Animation
   ============================================ */

const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let connections = [];

// Configuration
const CONFIG = {
    particleCount: 80,
    connectionDistance: 150,
    particleSpeed: 0.3,
    particleSize: 2,
    connectionOpacity: 0.15
};

// Resize canvas
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
        this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
        this.size = Math.random() * CONFIG.particleSize + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#00d9ff';
        ctx.fill();
    }
}

// Initialize particles
function initParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
        particles.push(new Particle());
    }
}

// Draw connections between nearby particles
function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.connectionDistance) {
                const opacity = (1 - distance / CONFIG.connectionDistance) * CONFIG.connectionOpacity;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    drawConnections();

    requestAnimationFrame(animate);
}

// Initialize
resize();
initParticles();
animate();

// Handle resize
window.addEventListener('resize', () => {
    resize();
    initParticles();
});

/* ============================================
   GitHub Projects Fetcher
   ============================================ */

const projectsGrid = document.getElementById('projects-grid');

// AI-related keywords to filter projects
const AI_KEYWORDS = [
    'ai', 'artificial intelligence', 'machine learning', 'ml',
    'neural', 'network', 'deep learning', 'tensorflow',
    'pytorch', 'agent', 'llm', 'nlp', 'computer vision',
    'genome', 'bioinformatics', 'promethease', 'snp',
    'automation', 'autonomous', 'chatbot', 'gpt'
];

// Featured projects (manually curated - update with your actual repos)
const FEATURED_PROJECTS = [
    {
        name: 'Promethease Offline',
        description: 'Offline genome analysis reports with interactive UI for SNP data visualization and filtering.',
        language: 'HTML',
        topics: ['genome', 'bioinformatics', 'promethease', 'offline'],
        override: true
    },
    {
        name: 'AI Agent System',
        description: 'Autonomous AI agents for task automation and intelligent decision-making.',
        language: 'Python',
        topics: ['ai', 'agents', 'automation', 'machine-learning'],
        override: true
    },
    {
        name: 'Genome Analysis Tools',
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
        const htmlUrl = isOverride ? `https://github.com/xerohour/${project.name.replace(/\s+/g, '-')}` : project.html_url;
        const stars = isOverride ? '⭐' : project.stargazers_count;
        const forks = isOverride ? '🍴' : project.forks_count;
        const language = project.language || 'Code';
        const topics = project.topics || [];

        return `
            <div class="col-md-6 col-lg-4">
                <div class="project-card fade-in">
                    <div class="project-card-body">
                        <h3 class="project-title">
                            <a href="${htmlUrl}" target="_blank">
                                <i class="fab fa-github"></i> ${project.name}
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
                                <i class="fas fa-circle" style="color: ${getLanguageColor(project.language)}; font-size: 0.5rem;"></i> 
                                ${language}
                            </span>
                        </div>
                        
                        ${topics.length > 0 ? `
                            <div class="project-tags">
                                ${topics.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join('')}
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
    return colors[language] || '#8b949e';
}

/* ============================================
   Scroll Animations
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
   Smooth Scroll
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

/* ============================================
   Initialize
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubRepos();
    initScrollAnimations();

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 14, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        }
    });
});
