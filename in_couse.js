document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Tab Switching Logic ---
    const tabItems = document.querySelectorAll('.tabs-navigation .tab-item');
    const tabContents = document.querySelectorAll('.tab-content-wrapper .tab-content');

    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Deactivate all tabs
            tabItems.forEach(t => t.classList.remove('active'));
            // Hide all tab contents
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate clicked tab
            this.classList.add('active');
            // Show corresponding content
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // --- 2. Initial Progress Setup (40%) ---
    const initialProgress = 40;
    const progressBar = document.getElementById('course-progress-bar');
    const progressPercentText = document.getElementById('progress-percent');

    // Set initial progress
    progressBar.style.width = initialProgress + '%';
    progressPercentText.textContent = initialProgress + '%';

    // --- 3. Optional: Add interactive functionality to 'เรียนต่อ' button ---
    const continueButton = document.querySelector('.continue-button');
    let currentProgress = initialProgress;

    continueButton.addEventListener('click', () => {
        // Increment progress by 5% as an example
        currentProgress += 5;
        if (currentProgress > 100) {
            currentProgress = 100;
        }

        // Update display
        progressBar.style.width = currentProgress + '%';
        progressPercentText.textContent = currentProgress + '%';
        
        // Update button text and episode when progress is 100%
        if (currentProgress === 100) {
            document.querySelector('.current-episode').textContent = 'หลักสูตรเสร็จสมบูรณ์';
            continueButton.textContent = 'ดูใบรับรอง';
        }
    });
});