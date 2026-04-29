document.addEventListener('DOMContentLoaded', () => {
    const screenshotsContainer = document.querySelector('.screenshots-container');
    const ratingBars = document.querySelectorAll('.bar-progress');
    const downloadButton = document.querySelector('.button--primary');
    const reviewItems = document.querySelectorAll('.review-item');
    const devApps = document.querySelectorAll('.dev-app-item');

    // --- Utility Functions ---
    const simulateHaptic = () => {
        if (navigator.vibrate) {
            navigator.vibrate(10); // Short vibration
        }
    };

    const updateScrollProgress = () => {
        const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
    };

    // --- Interactive Elements ---

    // Rating bars animation on intersection
    const ratingBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.dataset.progress; // Get progress from data attribute
                entry.target.style.width = `${progress}%`;
                ratingBarObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    ratingBars.forEach(bar => ratingBarObserver.observe(bar));

    // Download button interaction
    if (downloadButton) {
        downloadButton.addEventListener('click', function(event) {
            simulateHaptic();
            // Prevent default download behavior initially to show animation
            event.preventDefault(); 
            
            const originalText = this.textContent;
            const originalBackground = this.style.background;

            this.textContent = 'INSTALLING...';
            this.style.background = 'rgba(255,255,255,0.1)';
            this.style.pointerEvents = 'none'; // Disable clicks during installation

            setTimeout(() => {
                this.textContent = 'OPEN';
                this.style.background = 'rgba(255,255,255,0.2)';
                this.style.pointerEvents = 'auto'; // Re-enable clicks
                // Optionally, navigate to the download URL after animation
                window.open(this.href, '_blank'); 
            }, 2000);

            // Revert after a longer period or on subsequent interaction
            setTimeout(() => {
                if (this.textContent === 'OPEN') {
                    this.textContent = originalText;
                    this.style.background = originalBackground;
                }
            }, 5000); // Revert after 5 seconds if not clicked again
        });
    }

    // Reviews expansion
    reviewItems.forEach(review => {
        review.addEventListener('click', function() {
            simulateHaptic();
            this.classList.toggle('expanded');
        });
    });

    // Developer apps interaction (alerting on click)
    devApps.forEach(app => {
        app.addEventListener('click', function(event) {
            simulateHaptic();
            const appName = this.querySelector('.dev-app-item__name').textContent;
            // event.preventDefault(); // Prevent actual navigation if desired for alert demo
            // alert(`Opening ${appName} in App Store...`);
        });
    });

    // --- UI Enhancements ---

    // Floating Action Button (FAB) for scroll to top
    const fab = document.createElement('div');
    fab.classList.add('fab');
    fab.innerHTML = '↑';
    document.body.appendChild(fab);

    fab.addEventListener('click', () => {
        simulateHaptic();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            fab.style.opacity = '1';
            fab.style.transform = 'translateY(0)';
        } else {
            fab.style.opacity = '0';
            fab.style.transform = 'translateY(20px)';
        }
    });

    // Initial scroll progress update
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);

    // Add touch gesture support for horizontal scrolling containers
    const enableHorizontalScrollGestures = (element) => {
        let isDragging = false;
        let startX;
        let scrollLeft;

        element.addEventListener('mousedown', (e) => {
            isDragging = true;
            element.classList.add('active-drag');
            startX = e.pageX - element.offsetLeft;
            scrollLeft = element.scrollLeft;
        });

        element.addEventListener('mouseleave', () => {
            isDragging = false;
            element.classList.remove('active-drag');
        });

        element.addEventListener('mouseup', () => {
            isDragging = false;
            element.classList.remove('active-drag');
        });

        element.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - element.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast factor
            element.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        element.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            scrollLeft = element.scrollLeft;
        });

        element.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            // Only prevent default if scrolling horizontally to avoid vertical scroll conflict
            if (Math.abs(e.touches[0].clientX - startX) > Math.abs(e.touches[0].clientY - e.touches[0].clientY)) {
                e.preventDefault();
            }
            const x = e.touches[0].clientX;
            const walk = (x - startX) * 1.5; // Touch scroll speed
            element.scrollLeft = scrollLeft - walk;
        });

        element.addEventListener('touchend', () => {
            isDragging = false;
        });
    };

    if (screenshotsContainer) {
        enableHorizontalScrollGestures(screenshotsContainer);
    }
    const developerAppsContainer = document.querySelector('.developer-apps');
    if (developerAppsContainer) {
        enableHorizontalScrollGestures(developerAppsContainer);
    }
    
    console.log('TalkSy App Store page loaded successfully! 🚀');
});