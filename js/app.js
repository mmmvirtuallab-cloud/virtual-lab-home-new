import EXPERIMENTS, { HOME_CONTENT, ABOUT_CONTENT, HOME_CATEGORY_CARDS, SITE_DATA } from './content.js';

// --- VIEW GENERATORS ---

// 1. Home View HTML
function getHomeView() {
    return `
        <section class="hero">
            <h1>${HOME_CONTENT.heroTitle}</h1>
            <p>${HOME_CONTENT.heroDescription}</p>
        </section>

        <section>
            <h2 class="section-heading">${HOME_CONTENT.experimentsTitle}</h2>
            <div class="card-grid" id="home-grid"></div>
        </section>
    `;
}

// 2. Experiments View HTML
function getExperimentsView(filterSubject) {
    return `
        <a href="#home" class="btn-back">&larr; Back to Home</a>
        <h2 class="section-heading">${filterSubject} Experiments</h2>
        <div id="exp-list-container"></div>
    `;
}

// 3. About View HTML (Dynamic Loop)
function getAboutView() {
    let htmlContent = `<div class="about-container">`;

    ABOUT_CONTENT.forEach(section => {
        htmlContent += `<h3>${section.title}</h3>`;
        
        // Optional intro text (like "Upon successful use...")
        if(section.intro) {
            htmlContent += `<p>${section.intro}</p>`;
        }

        if (section.isList) {
            // Render as numbered list
            htmlContent += `<ol class="about-list">`;
            section.text.forEach(item => {
                htmlContent += `<li>${item}</li>`;
            });
            htmlContent += `</ol>`;
        } else {
            // Render as standard paragraph
            htmlContent += `<p>${section.text}</p>`;
        }
    });

    htmlContent += `</div>`;
    return htmlContent;
}

// --- RENDER LOGIC ---

function render() {
    const app = document.getElementById('app-container');
    const hash = window.location.hash;

    // A. Experiments Route
    if (hash.startsWith('#experiments')) {
        const subject = hash.split('-')[1] || 'All'; 
        app.innerHTML = getExperimentsView(decodeURIComponent(subject));
        
        const listContainer = document.getElementById('exp-list-container');
        const filtered = EXPERIMENTS.filter(e => e.subject === subject || subject === 'All');
        
        if(filtered.length === 0) {
            listContainer.innerHTML = '<p>No experiments found for this category.</p>';
            return;
        }

        filtered.forEach(exp => {
            const div = document.createElement('div');
            div.className = 'exp-list-item';
            div.innerHTML = `
                <img src="${exp.imagePath}" class="exp-thumb" onerror="this.src='images/logo1.png'">
                <div class="exp-info">
                    <h3>${exp.title} <span class="badge">${exp.subject}</span></h3>
                    <p>${exp.description}</p>
                    <button class="btn-start" onclick="window.open('${exp.link}', '_blank')">Start Experiment</button>
                </div>
            `;
            listContainer.appendChild(div);
        });

    } 
    // B. About Route
    else if (hash === '#about') {
        app.innerHTML = getAboutView();
    } 
    // C. Home Route (Default)
    else {
        app.innerHTML = getHomeView();
        
        const grid = document.getElementById('home-grid');
        HOME_CATEGORY_CARDS.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => window.location.hash = `#experiments-${cat.id}`;
            
            card.innerHTML = `
                <div class="card-image" style="background-image: url('${cat.image}');"></div>
                <div class="card-content">
                    <h3>${cat.displayTitle}</h3>
                    <p>${cat.description}</p>
                    <span class="link-text">Enter Lab &rarr;</span>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Static Header/Footer Text from Content.js
    document.querySelector('.brand-name').textContent = SITE_DATA.brandName;
    document.querySelector('.brand-sub').textContent = SITE_DATA.brandSub;
    
    // Inject Footer Content dynamically
    const footer = document.querySelector('.main-footer');
    if(footer) {
        footer.innerHTML = `
            <p>${SITE_DATA.footerText}</p>
            <p>${SITE_DATA.footerSubText}</p>
        `;
    }

    // 2. Initial Render
    render();
});

// Listen for navigation changes
window.addEventListener('hashchange', render);