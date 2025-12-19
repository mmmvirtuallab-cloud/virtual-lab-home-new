// js/intro.js
import { INTRO_CONTENT } from './intro_data.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Set Header Title & Button
    document.getElementById('top-bar-title').textContent = INTRO_CONTENT.headerTitle;
    const btn = document.getElementById('action-btn');
    btn.textContent = `${INTRO_CONTENT.buttonLabel} →`;
    btn.onclick = () => window.open(INTRO_CONTENT.buttonLink, '_blank');

    // 2. Set Main Title
    document.getElementById('main-title').textContent = INTRO_CONTENT.mainHeading;

    // 3. Render Aim & Acknowledgement inside the Description area
    // We use innerHTML to format the headings and list nicely
    const contentArea = document.getElementById('main-desc');
    
    // Generate Student List HTML
    const studentListHTML = INTRO_CONTENT.students
        .map(student => `<li style="margin-bottom: 5px;">${student}</li>`)
        .join('');

    contentArea.innerHTML = `
        <h3 style="text-align: left; color: #1e293b; margin-bottom: 10px; margin-top: 0;">${INTRO_CONTENT.aimTitle}</h3>
        <p style="text-align: justify; margin-bottom: 30px;">
            ${INTRO_CONTENT.aimContent}
        </p>

        <h3 style="text-align: left; color: #1e293b; margin-bottom: 10px;">${INTRO_CONTENT.ackTitle}</h3>
        <p style="text-align: justify; margin-bottom: 15px;">
            ${INTRO_CONTENT.ackContent}
        </p>

        <ul style="text-align: left; padding-left: 20px; line-height: 1.6; color: #475569;">
            ${studentListHTML}
        </ul>
    `;
});